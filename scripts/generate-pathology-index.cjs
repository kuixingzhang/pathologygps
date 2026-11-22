const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

const root = process.cwd();
const appDir = path.join(root, "app");
const output = path.join(root, "lib", "pathology-search-index.json");

const sectionNames = {
  "bone-and-soft-tissue": "Bone & Soft Tissue",
  cns: "Central Nervous System",
  "gi-liver-pancreas": "GI, Liver & Pancreas",
  "female-genital": "Female Genital",
  genitourinary: "Genitourinary",
  "head-and-neck": "Head & Neck",
  hematopathology: "Hematopathology",
  "ophthalmic-pathology": "Ophthalmic Pathology",
  "pediatric-pathology": "Pediatric Pathology",
  skin: "Dermatopathology",
  thoracic: "Thoracic",
  breast: "Breast",
  endocrine: "Endocrine",
  "genetic-tumor-syndromes": "Genetic Tumor Syndromes",
};

const entityAliases = {
  "malignant peripheral nerve sheath tumor": [
    "MPNST",
    "malignant peripheral nerve sheath tumour",
  ],
  "gastrointestinal stromal tumor": ["GIST", "gastrointestinal stromal tumour"],
  "solitary fibrous tumor": ["SFT", "solitary fibrous tumour"],
  "inflammatory myofibroblastic tumor": [
    "IMT",
    "inflammatory myofibroblastic tumour",
  ],
  "desmoid-type fibromatosis": ["desmoid tumor", "aggressive fibromatosis"],
  "well-differentiated liposarcoma": [
    "WDLPS",
    "atypical lipomatous tumor",
    "ALT",
  ],
  "dedifferentiated liposarcoma": ["DDLPS"],
  "myxoid liposarcoma": ["MLPS"],
  "pleomorphic liposarcoma": ["PLPS"],
  leiomyosarcoma: ["LMS"],
  rhabdomyosarcoma: ["RMS"],
  "synovial sarcoma": ["SS"],
  "undifferentiated pleomorphic sarcoma": [
    "UPS",
    "MFH",
    "malignant fibrous histiocytoma",
  ],
  "neuroendocrine tumor": ["NET"],
  "neuroendocrine carcinoma": ["NEC"],
  "gastrointestinal neuroendocrine tumor": ["GI NET"],
  "gastrointestinal neuroendocrine carcinoma": ["GI NEC"],
  "hepatocellular carcinoma": ["HCC"],
  cholangiocarcinoma: ["CCA"],
  "ductal carcinoma in situ": ["DCIS"],
  "invasive ductal carcinoma": ["IDC"],
  "invasive lobular carcinoma": ["ILC"],
  "papillary thyroid carcinoma": ["PTC"],
  "medullary thyroid carcinoma": ["MTC"],
  "follicular thyroid carcinoma": ["FTC"],
  "acute myeloid leukemia": ["AML"],
  "chronic lymphocytic leukemia": ["CLL"],
  "chronic myeloid leukemia": ["CML"],
  "myelodysplastic syndrome": ["MDS"],
  "myeloproliferative neoplasm": ["MPN"],
  "diffuse large B-cell lymphoma": ["DLBCL"],
  "follicular lymphoma": ["FL"],
  "mantle cell lymphoma": ["MCL"],
  "marginal zone lymphoma": ["MZL"],
  "extranodal marginal zone lymphoma": ["MALT lymphoma"],
  "small lymphocytic lymphoma": ["SLL"],
  "germinal center B-cell": ["GCB"],
  "microsatellite instability": ["MSI"],
  "mismatch repair deficiency": ["dMMR"],
  "programmed death-ligand 1": ["PD-L1", "PDL1"],
  "human epidermal growth factor receptor 2": ["HER2", "ERBB2"],
};

function normalize(value) {
  return String(value ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9+.-]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function humanize(segment) {
  if (sectionNames[segment]) return sectionNames[segment];
  return segment
    .split("-")
    .map((word) => {
      const upper = ["cns", "gist", "aml", "mpn", "mds", "dna", "rna"];
      return upper.includes(word.toLowerCase())
        ? word.toUpperCase()
        : word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function collectPageFiles(directory) {
  const found = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "api") found.push(...collectPageFiles(full));
    } else if (entry.isFile() && entry.name === "page.tsx") {
      found.push(full);
    }
  }
  return found;
}

function propertyName(property, source) {
  if (!property.name) return "";
  if (
    ts.isIdentifier(property.name) ||
    ts.isStringLiteral(property.name) ||
    ts.isNumericLiteral(property.name)
  ) {
    return property.name.text;
  }
  return property.name.getText(source).replace(/^['"]|['"]$/g, "");
}

function getProperty(objectNode, wanted, source) {
  return objectNode.properties.find(
    (property) =>
      ts.isPropertyAssignment(property) &&
      propertyName(property, source) === wanted,
  );
}

function staticText(node) {
  if (!node) return [];
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    return node.text.trim() ? [node.text.trim()] : [];
  }
  if (ts.isArrayLiteralExpression(node)) {
    return node.elements.flatMap((element) => staticText(element));
  }
  if (ts.isObjectLiteralExpression(node)) {
    return node.properties.flatMap((property) =>
      ts.isPropertyAssignment(property) ? staticText(property.initializer) : [],
    );
  }
  if (
    ts.isBinaryExpression(node) &&
    node.operatorToken.kind === ts.SyntaxKind.PlusToken
  ) {
    return [...staticText(node.left), ...staticText(node.right)];
  }
  return [];
}

function extractEntityRecords(source, entities) {
  const records = [];
  const candidateArrayNames = new Set([
    "entities",
    "diagnoses",
    "lesions",
    "tumors",
    "tumours",
    "conditions",
    "entitylist",
    // Adult breast papillary-lesion pages store diagnoses in comparisonRows.
    "comparisonrows",
  ]);

  function visit(node) {
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      candidateArrayNames.has(node.name.text.toLowerCase()) &&
      node.initializer &&
      ts.isArrayLiteralExpression(node.initializer)
    ) {
      for (const element of node.initializer.elements) {
        if (!ts.isObjectLiteralExpression(element)) continue;
        const nameProperty =
          getProperty(element, "name", source) ||
          getProperty(element, "title", source) ||
          getProperty(element, "diagnosis", source) ||
          getProperty(element, "entity", source);
        if (!nameProperty || !ts.isPropertyAssignment(nameProperty)) continue;
        const names = staticText(nameProperty.initializer);
        const name = names[0];
        if (!name || name.length > 140) continue;

        const fields = [];
        for (const property of element.properties) {
          if (!ts.isPropertyAssignment(property)) continue;
          const key = propertyName(property, source);
          if (["name", "title", "diagnosis", "entity"].includes(key)) continue;
          fields.push(...staticText(property.initializer));
        }
        const content = [...new Set(fields)]
          .join(" ")
          .replace(/\s+/g, " ")
          .trim();
        if (!entities.has(name)) entities.add(name);
        records.push({ name, content });
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(source);
  const seen = new Set();
  return records.filter((record) => {
    const key = normalize(record.name);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function extractSource(file, relative) {
  const sourceText = fs.readFileSync(file, "utf8");
  const source = ts.createSourceFile(
    file,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  const textParts = [];
  const entities = new Set();

  function visit(node) {
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      const parent = node.parent;
      const isImportPath =
        ts.isImportDeclaration(parent) || ts.isExportDeclaration(parent);
      const isPresentationAttribute =
        ts.isJsxAttribute(parent) &&
        [
          "className",
          "id",
          "role",
          "type",
          "href",
          "target",
          "rel",
          "aria-label",
        ].includes(parent.name.getText(source));
      const value = node.text.trim();
      if (
        value &&
        !isImportPath &&
        !isPresentationAttribute &&
        !value.startsWith("@/") &&
        !value.startsWith("./") &&
        !value.startsWith("../")
      )
        textParts.push(value);
    } else if (ts.isJsxText(node)) {
      const value = node.text.replace(/\s+/g, " ").trim();
      if (value) textParts.push(value);
    }

    if (
      ts.isPropertyAssignment(node) &&
      (propertyName(node, source) === "name" ||
        propertyName(node, source) === "entity") &&
      (ts.isStringLiteral(node.initializer) ||
        ts.isNoSubstitutionTemplateLiteral(node.initializer))
    ) {
      let ancestor = node.parent;
      let insideDifferential = false;
      while (ancestor && !ts.isSourceFile(ancestor)) {
        if (
          ts.isPropertyAssignment(ancestor) &&
          propertyName(ancestor, source).toLowerCase() === "differential"
        ) {
          insideDifferential = true;
          break;
        }
        ancestor = ancestor.parent;
      }
      const value = node.initializer.text.trim();
      if (!insideDifferential && value.length > 1 && value.length <= 120)
        entities.add(value);
    }
    ts.forEachChild(node, visit);
  }

  visit(source);
  const entityRecords = extractEntityRecords(source, entities);
  const parts = relative.split(path.sep);
  const routeParts = parts.slice(1, -1);
  const slug = routeParts[routeParts.length - 1];
  const title = slug ? humanize(slug) : "PathologyGPS";
  const section = routeParts.length
    ? sectionNames[routeParts[0]] || humanize(routeParts[0])
    : "Pathology";

  const entityList = [...entities];
  const aliases = [];
  for (const entity of entityList) {
    const knownAliases = entityAliases[normalize(entity)] || [];
    for (const alias of knownAliases) aliases.push(`${alias}::${entity}`);
  }

  return {
    title,
    section,
    group: title,
    href: "/" + routeParts.join("/"),
    content: [...new Set(textParts)].join(" ").replace(/\s+/g, " "),
    entities: entityList,
    entityRecords,
    aliases,
  };
}

const files = collectPageFiles(appDir).filter(
  (file) => path.relative(appDir, file) !== "page.tsx",
);
const pages = files
  .map((file) => {
    const relative = path.relative(root, file);
    return extractSource(file, relative);
  })
  .map((page, id) => ({ id, ...page }));

fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, JSON.stringify(pages));
const recordCount = pages.reduce(
  (n, page) => n + (page.entityRecords?.length ?? 0),
  0,
);
console.log(
  `Generated ${pages.length} page records, ${recordCount} entity content records, ${pages.reduce((n, p) => n + p.entities.length, 0)} named entities, and ${pages.reduce((n, p) => n + p.aliases.length, 0)} aliases.`,
);
console.log(`Output: ${path.relative(root, output)}`);

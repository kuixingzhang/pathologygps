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
        ["className", "id", "role", "type", "href", "target", "rel", "aria-label"].includes(
          parent.name.getText(source),
        );
      const value = node.text.trim();
      if (
        value &&
        !isImportPath &&
        !isPresentationAttribute &&
        !value.startsWith("@/") &&
        !value.startsWith("./") &&
        !value.startsWith("../")
      ) {
        textParts.push(value);
      }
    } else if (ts.isJsxText(node)) {
      const value = node.text.replace(/\s+/g, " ").trim();
      if (value) textParts.push(value);
    }

    if (
      ts.isPropertyAssignment(node) &&
      (node.name.getText(source) === "name" ||
        node.name.getText(source) === "entity") &&
      (ts.isStringLiteral(node.initializer) ||
        ts.isNoSubstitutionTemplateLiteral(node.initializer))
    ) {
      const value = node.initializer.text.trim();
      if (value.length > 1 && value.length <= 120) entities.add(value);
    }

    ts.forEachChild(node, visit);
  }

  visit(source);

  const parts = relative.split(path.sep);
  const routeParts = parts.slice(1, -1);
  const slug = routeParts[routeParts.length - 1];
  const title = slug ? humanize(slug) : "PathologyGPS";
  const section = routeParts.length
    ? sectionNames[routeParts[0]] || humanize(routeParts[0])
    : "Pathology";

  return {
    title,
    section,
    group: title,
    href: "/" + routeParts.join("/"),
    content: [...new Set(textParts)].join(" ").replace(/\s+/g, " "),
    entities: [...entities],
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
console.log(
  `Generated ${pages.length} page records and ${pages.reduce((n, p) => n + p.entities.length, 0)} named entities.`,
);
console.log(`Output: ${path.relative(root, output)}`);

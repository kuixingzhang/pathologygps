"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type SearchHighlightProps = {
  children: ReactNode;
};

/**
 * For a multi-word query, highlight only the complete contiguous phrase.
 * Do not fall back to highlighting individual words: that creates misleading
 * highlights for queries such as "Papillary DCIS".
 * A single-word query continues to highlight that word normally.
 */
function getHighlightPhrase(query: string): string {
  return query.trim().replace(/\s+/g, " ");
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightText(text: string, phrase: string): ReactNode {
  if (!phrase || !text) return text;

  // Treat one or more whitespace characters in the query as equivalent.
  const words = phrase.split(" ").filter(Boolean).map(escapeRegExp);
  const patternText = words.join("\\s+");
  const pattern = new RegExp(`(${patternText})`, "gi");
  const pieces = text.split(pattern);

  if (pieces.length === 1) return text;

  return pieces.map((piece, index) => {
    const matched = new RegExp(`^${patternText}$`, "i").test(piece);

    return matched ? (
      <mark
        key={`search-highlight-${index}`}
        className="rounded-sm bg-yellow-200 px-0.5 text-inherit"
      >
        {piece}
      </mark>
    ) : (
      piece
    );
  });
}

function highlightNode(node: ReactNode, phrase: string): ReactNode {
  if (typeof node === "string") return highlightText(node, phrase);
  if (typeof node === "number" || node == null) return node;

  return Children.map(node, (child) => {
    if (!isValidElement<{ children?: ReactNode }>(child)) return child;

    // Avoid changing form controls or SVG internals.
    const elementType = child.type;
    if (
      elementType === "input" ||
      elementType === "textarea" ||
      elementType === "select" ||
      elementType === "option" ||
      elementType === "svg"
    ) {
      return child;
    }

    return cloneElement(child, {
      ...child.props,
      children: highlightNode(child.props.children, phrase),
    });
  });
}

export default function SearchHighlight({ children }: SearchHighlightProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setQuery(params.get("gpsQuery") ?? "");
  }, []);

  const phrase = useMemo(() => getHighlightPhrase(query), [query]);

  return <>{highlightNode(children, phrase)}</>;
}

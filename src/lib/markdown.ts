import { marked, Renderer, type Tokens } from "marked";

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const renderer = new Renderer();
renderer.heading = function ({ tokens, depth }: Tokens.Heading) {
  const text = tokens.map((t) => ("text" in t ? t.text : "")).join("");
  const id = slugify(text);
  const html = this.parser.parseInline(tokens);
  return `<h${depth} id="${id}">${html}</h${depth}>\n`;
};

renderer.table = function (token: Tokens.Table) {
  const html = Renderer.prototype.table.call(this, token);
  return `<div class="overflow-x-auto">${html}</div>\n`;
};

marked.use({ renderer, gfm: true, breaks: false });

export function renderMarkdown(content: string): string {
  return marked.parse(content, { async: false });
}

export interface Heading {
  id: string;
  text: string;
  depth: number;
}

export function extractHeadings(content: string): Heading[] {
  const tokens = marked.lexer(content);
  return tokens
    .filter((t): t is Tokens.Heading => t.type === "heading" && t.depth === 2)
    .map((t) => ({ id: slugify(t.text), text: t.text, depth: t.depth }));
}

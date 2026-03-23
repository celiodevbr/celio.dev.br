import MarkdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";
import markdownItImplicitFigures from "./markdown-it-implicit-figures.js";

export default function (eleventyConfig) {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    breaks: true,
  })
    .use(markdownItAttrs)
    .use(markdownItImplicitFigures);

  eleventyConfig.setLibrary("md", md);
}


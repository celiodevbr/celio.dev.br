export default function markdownItImplicitFigures(md, options = {}) {
  const {
    getCaption = ({ alt, title }) => title || alt || "",
    figureClass = "",
    imgClass = "",
    figcaptionClass = "",
  } = options;

  const defaultImageRenderer =
    md.renderer.rules.image ??
    ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));

  const escapeHtml =
    md.utils?.escapeHtml ??
    ((str) =>
      String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;"));

  md.core.ruler.after("inline", "implicit_figures", (state) => {
    const tokens = [];

    for (let i = 0; i < state.tokens.length; i += 1) {
      const paragraphOpen = state.tokens[i];
      const inlineToken = state.tokens[i + 1];
      const paragraphClose = state.tokens[i + 2];

      const isStandaloneImageParagraph =
        paragraphOpen?.type === "paragraph_open" &&
        inlineToken?.type === "inline" &&
        paragraphClose?.type === "paragraph_close" &&
        inlineToken.children?.length === 1 &&
        inlineToken.children[0].type === "image";

      if (!isStandaloneImageParagraph) {
        tokens.push(state.tokens[i]);
        continue;
      }

      const imageToken = inlineToken.children[0];
      const src = imageToken.attrGet("src") || "";
      const title = imageToken.attrGet("title") || "";
      const alt = imageToken.content || "";

      if (!src) {
        tokens.push(paragraphOpen, inlineToken, paragraphClose);
        i += 2;
        continue;
      }

      if (imgClass) {
        imageToken.attrJoin("class", imgClass);
      }

      const imgHtml = defaultImageRenderer([imageToken], 0, state.md.options, state.env, state.md.renderer);
      const caption = getCaption({ token: imageToken, src, alt, title, env: state.env });
      const figureAttrs = figureClass ? ` class="${escapeHtml(figureClass)}"` : "";
      const figcaptionAttrs = figcaptionClass ? ` class="${escapeHtml(figcaptionClass)}"` : "";

      const figureToken = new state.Token("html_block", "", 0);
      figureToken.content = caption
        ? `<figure${figureAttrs}>\n${imgHtml}\n<figcaption${figcaptionAttrs}>${escapeHtml(caption)}</figcaption>\n</figure>`
        : `<figure${figureAttrs}>\n${imgHtml}\n</figure>`;

      tokens.push(figureToken);
      i += 2;
    }

    state.tokens = tokens;
  });
}
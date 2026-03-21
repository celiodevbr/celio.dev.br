import MarkdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';
import implicitFiguresPlugin from './implicitFigures-fork.js';

const markdownItOptions = {
    html: true,
    linkify: true,
    breaks: true
};

export default function (eleventyConfig) {
    const md = new MarkdownIt(markdownItOptions)
        .use(markdownItAttrs)
        .use(implicitFiguresPlugin);

    eleventyConfig.addFilter("markdownify", string => {
        return md.render(string)
    })

    eleventyConfig.setLibrary('md', md);
}
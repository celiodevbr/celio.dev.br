import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import pluginNavigation from "@11ty/eleventy-navigation";
import pluginMarkdown from "./utils/markdown.js";
import pluginFilters from "./utils/filters.js";
import pluginIcons from "eleventy-plugin-icons";

const CONTENT_GLOBS = {
	posts: 'content/blog/**/*.md',
};

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
	eleventyConfig.addPlugin(pluginNavigation);

	// Icons
	eleventyConfig.addPlugin(pluginIcons, {
		sources: [{ name: 'custom', path: 'icons' }]
	});

	// Markdown
	eleventyConfig.addPlugin(pluginMarkdown);

	// Filters
	eleventyConfig.addPlugin(pluginFilters);

	// CSS
	eleventyConfig.addPassthroughCopy("assets/");
	eleventyConfig.addWatchTarget("assets/");

	eleventyConfig.addNunjucksShortcode("infobox", function (type, content) {
		const types = {
			info: 'info',
			warning: 'warning',
			danger: 'danger'
		};

		const validType = types[type] || 'info'; // Default to info if type is invalid

		return `<div class="infobox infobox--${validType}"><p class="infobox__content">${content}</p></div>`;
	});

	// Collections: Posts
	eleventyConfig.addCollection('posts', function (collection) {
		const posts = collection
			.getFilteredByGlob(CONTENT_GLOBS.posts)
			.filter(post => post.fileSlug !== 'blog') // Exclude blog/index.md
			.sort((a, b) => new Date(b.date) - new Date(a.date));

		return posts;
	});

};

export const config = {
	// Control which files Eleventy will process
	// e.g.: *.md, *.njk, *.html, *.liquid
	templateFormats: [
		"md",
		"njk",
		"html",
		"11ty.js",
	],

	// Pre-process *.md files with: (default: `liquid`)
	markdownTemplateEngine: "njk",

	// Pre-process *.html files with: (default: `liquid`)
	htmlTemplateEngine: "njk",

	dir: {
		input: "content",
		includes: "../_includes",  // default: "_includes" (`input` relative)
		data: "../_data",          // default: "_data" (`input` relative)
		output: "public",
	}
}


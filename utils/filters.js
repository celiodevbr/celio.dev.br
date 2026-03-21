import { DateTime } from "luxon";

export default function(eleventyConfig) {
	eleventyConfig.addFilter("readableDate", (dateObj, format) => {
		return DateTime
			.fromJSDate(dateObj)
			.setLocale("pt-BR")
			.toFormat(format || "dd LLLL yyyy · H:mm");
	});

	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		return DateTime
			.fromJSDate(dateObj)
			.toFormat("yyyy-LL-dd");
	});

	eleventyConfig.addFilter("head", (array, n) => {
		if(!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if(n < 0) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	eleventyConfig.addFilter("min", (...numbers) => {
		return Math.min.apply(null, numbers);
	});

	eleventyConfig.addFilter("getKeys", target => {
		return Object.keys(target);
	});

	eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
		return (tags || []).filter(tag => ["all", "posts"].indexOf(tag) === -1);
	});
};
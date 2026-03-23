import { DateTime } from "luxon";

const SITE_TZ = "America/Sao_Paulo";

export default function(eleventyConfig) {
	eleventyConfig.addFilter("readableDate", (dateObj, format) => {
		return DateTime
		.fromJSDate(dateObj, { zone: "utc" })
		.setZone(SITE_TZ)
		.setLocale("pt-BR")
		.toFormat(format || "dd 'de' LLLL yyyy 'às' H:mm");
	});

	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		return DateTime
			.fromJSDate(dateObj, { zone: "utc" })
			.setZone(SITE_TZ)
			.toISO();
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

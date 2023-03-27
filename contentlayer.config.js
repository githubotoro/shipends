import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export const Guide = defineDocumentType(() => ({
	name: "Guide",
	filePathPattern: `**/*.json`,
	fields: {
		data: {
			type: "json",
			content: "Guiding json index",
			required: true,
		},
	},
	computedFields: {
		slug: {
			type: "string",
			resolve: (doc) => doc._raw.flattenedPath,
		},
	},
}));

export const Ship = defineDocumentType(() => ({
	name: "Ship",
	filePathPattern: `**/*.md`,
	contentType: "mdx",
	// fields: {
	// 	fieldName: {
	// 		type: "field type",
	// 		description: "field description",
	// 		required: true,
	// 	},
	// },
	computedFields: {
		slug: {
			type: "string",
			resolve: (doc) => doc._raw.flattenedPath,
		},
	},
}));

export default makeSource({
	contentDirPath: "ships",
	documentTypes: [Ship, Guide],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			[rehypeSlug],
			[
				rehypePrettyCode,

				{
					theme: "one-dark-pro",
					tokensMap: {
						fn: "entity.name.function",
						objKey: "meta.object-literal.key",
					},
					onVisitLine(node) {
						if (node.children.length === 0) {
							node.children = [{ type: "text", value: " " }];
						}
					},
					onVisitHighlightedLine(node) {
						node.properties.className.push("line--highlighted");
					},
					onVisitHighlightedWord(node) {
						console.log(node);
						node.properties.className.push("word--highlighted");
					},
				},
			],

			[
				rehypeAutolinkHeadings,
				{
					behavior: "wrap",
					properties: {
						className: [
							"before:content-['#'] before:absolute before:-ml-[1em] before:text-rose-100/0 hover:before:text-rose-100/50 pl-[1em] -ml-[1em]",
						],
					},
				},
			],
		],
	},
});

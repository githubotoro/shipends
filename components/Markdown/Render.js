import MDXComponents from "./MDXComponents";
import { MDXProvider } from "@mdx-js/react";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";

import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";

const Render = async ({ response }) => {
	const encodedMarkdownContent = response.data.content;
	const markdown = Buffer.from(encodedMarkdownContent, "base64");
	const { data: frontmatter, content } = matter(markdown);
	const source = await serialize(content, {
		mdxOptions: {
			rehypePlugins: [
				rehypeSlug,
				[rehypeAutolinkHeadings, { behavior: "wrap" }],
				rehypeHighlight,
			],
		},
	});

	return { frontmatter, source };
};

export default Render;

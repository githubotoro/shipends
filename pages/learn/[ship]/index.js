import { Fetch, Render } from "../../../components";

import { MDXRemote } from "next-mdx-remote";

export const getStaticProps = async (context) => {
	const { params } = context;

	const path = `${params.ship}/index.md`;
	const response = await Fetch({ path });
	const { frontmatter, source } = await Render({ response });

	return {
		props: {
			source: source,
		},
	};
};

export const getStaticPaths = async () => {
	const paths = [
		{
			params: {
				ship: "hardhat",
			},
		},
	];

	return {
		paths: paths,
		fallback: true,
	};
};

const Ship = ({ source }) => {
	return (
		<>
			<div className="flex flex-col w-full">
				<div className="border-2 border-platinum rounded-lg m-3 px-3 py-2">
					<article
						className="prose prose-sm
                prose-h1:p-0 prose-h1:m-0
                prose-h2:p-0 prose-h2:m-0
                prose-h3:p-0 prose-h3:m-0
                prose-h4:p-0 prose-h4:m-0
                prose-p0:p-0 prose-p:m-0
                prose-a:p-0 prose-a:m-0
                prose-blockquote:p-1 prose-blockquote:m-0 
                prose-ol:pl-6 prose-ol:py-0 prose-ol:pr-0 prose-ol:m-0
                prose-ul:pl-6 prose-ul:py-0 prose-ul:pr-0 prose-ul:m-0
                prose-li:pl-1 prose-li:m-0
            "
					>
						<MDXRemote {...source} />
					</article>
				</div>
			</div>
		</>
	);
};

export default Ship;

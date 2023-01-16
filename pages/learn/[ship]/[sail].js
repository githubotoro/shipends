import { Fetch, Render, MDXComponents } from "../../../components";

import { MDXRemote } from "next-mdx-remote";
import { MDXProvider } from "@mdx-js/react";

export const getStaticProps = async (context) => {
	const { params } = context;

	const path = `${params.ship}/${params.sail}.md`;
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
				sail: "2_writing_smart_contracts",
			},
		},
	];

	return {
		paths: paths,
		fallback: true,
	};
};

const Sail = ({ source }) => {
	return (
		<>
			<div className="flex flex-col items-center place-content-center w-full bg-white ">
				<div
					className="flex flex-col border border-borderDefault rounded-lg m-3 px-3 py-2
				text-fgDefault text-normal bg-white max-w-5xl font-sans
				"
				>
					<MDXRemote components={MDXComponents} {...source} />
				</div>
			</div>
		</>
	);
};

export default Sail;

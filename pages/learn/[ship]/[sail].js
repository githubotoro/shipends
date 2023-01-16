import {
	FetchIndex,
	Render,
	MDXComponents,
	FetchMarkdown,
} from "../../../components";

import { MDXRemote } from "next-mdx-remote";
import { MDXProvider } from "@mdx-js/react";

import { Octokit } from "octokit";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";

import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";

import Link from "next/link";
import { useRouter } from "next/router";

export const getStaticProps = async (context) => {
	const octokit = new Octokit({
		auth: process.env.NEXT_PUBLIC_GIT_TOKEN,
	});

	const { params } = context;

	const owner = `shipends`;
	const repo = `ships`;

	const pathMarkdown = `${params.ship}/${params.sail}.md`;
	const responseMarkdown = await octokit.request(
		"GET /repos/{owner}/{repo}/contents/{path}{?ref}",
		{
			owner: owner,
			repo: repo,
			path: pathMarkdown,
		}
	);

	const { frontmatter, source } = await Render({ responseMarkdown });

	const pathIndex = `${params.ship}/index.json`;
	const responseIndex = await octokit.request(
		"GET /repos/{owner}/{repo}/contents/{path}{?ref}",
		{
			owner: owner,
			repo: repo,
			path: pathIndex,
		}
	);

	const index = JSON.parse(Buffer.from(responseIndex.data.content, "base64"));

	const parent = index.parent;
	const sections = index.sections;

	return {
		props: {
			frontmatter: frontmatter,
			source: source,
			parent: parent,
			sections: sections,
		},
	};
};

export const getStaticPaths = async () => {
	const paths = [
		{
			params: {
				ship: "hardhat",
				sail: "prologue",
			},
		},
		{
			params: {
				ship: "hardhat",
				sail: "1_setting_up_hardhat",
			},
		},
		{
			params: {
				ship: "hardhat",
				sail: "2_writing_smart_contracts",
			},
		},

		{
			params: {
				ship: "hardhat",
				sail: "3_testing_contracts",
			},
		},
		{
			params: {
				ship: "hardhat",
				sail: "4_intro_to_artifacts_and_cache",
			},
		},
		{
			params: {
				ship: "hardhat",
				sail: "5_calling_contract_functions",
			},
		},
		{
			params: {
				ship: "hardhat",
				sail: "6_going_live",
			},
		},
		{
			params: {
				ship: "hardhat",
				sail: "7_verifying_on_etherscan",
			},
		},
		{
			params: {
				ship: "hardhat",
				sail: "epilogue",
			},
		},
	];

	return {
		paths: paths,
		fallback: false,
	};
};

const Sail = ({ frontmatter, source, parent, sections }) => {
	const Router = useRouter();

	return (
		<>
			<div className="flex flex-col p-3 lg:flex-row items-start place-content-center w-full bg-bgSubtle">
				<div
					className="flex lg:flex flex-col border border-borderDefault rounded-md mr-3
				text-fgMuted text-normal bg-bgSubtle w-60"
				>
					<div
						className="mb-1 -mt-[1px] -ml-[1px] -mr-[1px] py-1 px-2 bg-bgInset text-fgDefault font-bold rounded-t-md
					border border-borderDefault text-2xl text-center"
					>
						{parent.charAt(0).toUpperCase() + parent.slice(1)}
					</div>
					{sections.map((section, index) => {
						return (
							<Link
								key={index}
								href={{
									pathname: "/learn/[ship]/[sail]",
									query: { ship: parent, sail: section.path },
								}}
							>
								<div
									className={`truncate rounded-md py-1 px-2 cursor-pointer mb-1
								transition ease-in-out delay-50 duration-200 mx-1
								${
									section.path === Router.query.sail
										? "bg-accentSubtle text-accentEmphasis font-normal"
										: "bg-bgSubtle hover:bg-bgInset hover:text-fgDefault"
								}`}
								>
									{section.title}
								</div>
							</Link>
						);
					})}
				</div>

				<div
					className="flex flex-col lg:ml-0 border border-borderDefault rounded-md
				             text-fgDefault text-normal bg-bgSubtle w-full lg:min-w-[900px] lg:max-w-[900px]"
				>
					<div
						className="-ml-[1px] -mr-[1px] -mt-[1px] py-1 px-2 bg-bgInset text-fgDefault font-bold rounded-t-md
					border border-borderDefault text-2xl text-center"
					>
						{frontmatter.title}&nbsp;&nbsp;
						<span className="text-accentEmphasis bg-accentSubtle rounded-lg text-xl py-1 px-2">
							--takes {frontmatter.takes} min.
						</span>
					</div>
					<div className="my-2 mx-3">
						<MDXRemote components={MDXComponents} {...source} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Sail;

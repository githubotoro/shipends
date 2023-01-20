import Link from "next/link";
import { useRouter } from "next/router";

import { Octokit } from "octokit";
import { MDXRemote } from "next-mdx-remote";

import { Constants, Render, MDXComponents, Loading } from "../../../components";

export const getStaticProps = async (context) => {
	const octokit = new Octokit({
		auth: process.env.NEXT_PUBLIC_GIT_TOKEN,
	});

	const { params } = context;

	const owner = Constants.owner;
	const repo = Constants.repo;
	const pathMarkdown = `${params.ship}/${params.sail}.md`;

	let responseMarkdown;

	try {
		responseMarkdown = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}{?ref}", {
			owner: owner,
			repo: repo,
			path: pathMarkdown,
		});
	} catch (err) {
		return {
			notFound: true,
		};
	}

	const { frontmatter, source } = await Render({ responseMarkdown });

	const pathIndex = `${params.ship}/index.json`;
	const responseIndex = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}{?ref}", {
		owner: owner,
		repo: repo,
		path: pathIndex,
	});

	const index = JSON.parse(Buffer.from(responseIndex.data.content, "base64"));

	return {
		props: {
			frontmatter: frontmatter,
			source: source,
			index: index,
		},
		revalidate: 86400,
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
	];

	return {
		paths: paths,
		fallback: true,
	};
};

const Sail = ({ frontmatter, source, index }) => {
	const Router = useRouter();

	if (Router.isFallback) {
		return <Loading />;
	}

	return (
		<>
			<div className="flex flex-col w-full">
				<div className="flex w-full bg-isWhite p-[12px] pb-[0px] place-content-center items-center">
					<div
						className="flex flex-row bg-isGreySubtle border-[1px] border-isGreyMuted 
					rounded-lg md:rounded-xl lg:rounded-2xl py-[6px] px-[6px] w-full max-w-[1408px] justify-between"
					>
						<Link
							href={`https://github.com/${Constants.owner}/${Constants.repo}/blob/main/${Router.query.ship}/${Router.query.sail}.md`}
							target="_blank"
							rel="noreferrer noopener"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="w-6 h-6 md:h-7 md:w-7 lg:h-8 lg:w-8
								fill-isGhost stroke-none hover:fill-isZeus "
							>
								<title>Edit on GitHub</title>
								<path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
							</svg>
						</Link>
						<Link
							href={`https://github.com/${Constants.owner}/${Constants.repo}/blob/main/${Router.query.ship}/${Router.query.sail}.md`}
							target="_blank"
							rel="noreferrer noopener"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="w-6 h-6 md:h-7 md:w-7 lg:h-8 lg:w-8
								fill-isGhost stroke-none hover:fill-isZeus "
							>
								<title>Edit on GitHub</title>
								<path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
							</svg>
						</Link>
					</div>
				</div>

				<div
					className="w-full flex flex-col place-content-center items-start bg-isWhite p-[12px]
            text-xs md:text-sm lg:text-md md:p-[10px]  lg:flex-row"
				>
					{/* NAVIGATION PANEL */}
					<div
						className="mr-[12px] hidden lg:flex min-w-[200px] max-w-[200px] flex-col rounded-lg md:rounded-xl lg:rounded-2xl
						border-[1px] border-isGreyMuted bg-isWhite text-isGrey"
					>
						<div
							className="-mx-[1px] -mt-[1px] rounded-t-lg md:rounded-t-xl lg:rounded-t-2xl border-[1px] border-transparent 
						bg-gradient-to-br from-isGhost to-isGhost font-black text-isWhite text-center
						text-md md:text-lg lg:text-xl py-[6px] mb-[8px]"
						>
							{index.parent.charAt(0).toUpperCase() + index.parent.slice(1)}
						</div>

						{index.sections.map((section, sectionIndex) => {
							return (
								<div key={sectionIndex} className="grid content-center grid-cols-8">
									<Link
										className="col-span-8"
										href={{
											pathname: "/learn/[ship]/[sail]",
											query: {
												ship: index.parent,
												sail: index[section].path,
											},
										}}
									>
										<div
											className={`delay-50 mx-[8px] mb-[8px] cursor-pointer truncate 
								rounded-md py-[4px] px-[8px] transition duration-200 ease-in-out text-md
								text-isGrey
								${
									index[section].path === Router.query.sail
										? "bg-isAzureSubtle text-isAzure"
										: "hover:bg-isGreySubtle hover:text-isZeus"
								}`}
										>
											{index[section].title}{" "}
										</div>
									</Link>
								</div>
							);
						})}
					</div>
					{/* NAVIGATION PANEL */}

					{/* MARKDOWN PAGE */}
					<div
						className="flex w-full flex-col border-[1px] rounded-lg md:rounded-xl lg:rounded-2xl  
				             border-isGreyMuted bg-isWhite text-isZeus lg:ml-0 lg:max-w-[1200px]"
					>
						<div
							className="-mx-[1px] -mt-[1px] rounded-t-lg md:rounded-t-xl lg:rounded-t-2xl border-[1px] border-transparent 
					bg-gradient-to-br from-isAzure to-isAzure font-black text-isWhite text-center
					text-md md:text-lg lg:text-xl py-[6px]
					"
						>
							{frontmatter.title}&nbsp;&nbsp;
							<span
								className="rounded-lg font-extrabold bg-isWhite text-isAzure
						py-[2px] px-[4px] md:py-[3px] md:px-[6px] lg:py-[4px] lg:px-[8px]  "
							>
								--takes {frontmatter.takes} min.
							</span>
						</div>

						<div
							className="mx-[14px] md:mx-[20px] lg:mx-[26px]
						text-xs md:text-sm lg:text-md"
						>
							<MDXRemote components={MDXComponents} {...source} />
						</div>
					</div>
					{/* MARKDOWN PAGE */}
				</div>
			</div>
		</>
	);
};

export default Sail;

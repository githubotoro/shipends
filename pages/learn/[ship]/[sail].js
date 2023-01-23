import Link from "next/link";
import { useRouter } from "next/router";

import { Octokit } from "octokit";
import { MDXRemote } from "next-mdx-remote";

import { Constants, Render, MDXComponents, Loading } from "../../../components";

import { useState } from "react";

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
		responseMarkdown = await octokit.request(
			"GET /repos/{owner}/{repo}/contents/{path}{?ref}",
			{
				owner: owner,
				repo: repo,
				path: pathMarkdown,
			}
		);
	} catch (err) {
		return {
			notFound: true,
		};
	}

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

	const nextIndex = index[frontmatter.section.toString()].nextIndex;
	const prevIndex = index[frontmatter.section.toString()].prevIndex;

	const nextSection =
		index[index[frontmatter.section.toString()].nextIndex].path;
	const prevSection =
		index[index[frontmatter.section.toString()].prevIndex].path;

	// const [openSectionMenu, setOpenSectionMenu] = useState(false);

	return (
		<>
			<div className="flex flex-col w-full min-h-screen bg-isGrayLightEmphasis6 place-content-start items-center">
				<div className="w-full h-full lg:max-w-[1200px] flex flex-col p-[12px] ">
					<div className="flex flex-col w-full mb-[12px] place-content-center items-center">
						<div
							className="flex flex-row bg-isGreySubtle border-[1px] border-isGrayLightEmphasis4 bg-isWhite
					rounded-lg md:rounded-xl lg:rounded-2xl py-[6px] px-[6px] w-full max-w-[1208px] justify-between"
						>
							<div
								className="relative inline-block text-left"
								// onMouseEnter={() => {
								// 	setOpenSectionMenu(true);
								// }}
								// onMouseLeave={() => {
								// 	setOpenSectionMenu(false);
								// }}
							>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										className="w-6 h-6 md:h-7 md:w-7 lg:h-8 lg:w-8 inline-flex
								fill-isGreenDark stroke-none hover:fill-isGreenDarkEmphasis 
								"
									>
										<title>View Contents</title>
										<path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
									</svg>
								</div>

								<div
									className={`hidden focus-within:flex  absolute left-0 z-10 w-[200px] bg-isGrayLight6 mt-[12px] 
								rounded-lg md:rounded-xl lg:rounded-2xl drop-shadow-md  flex-col
								
								`}
								>
									<div className="flex flex-col my-[8px] font-medium w-full">
										{index.sections.map(
											(section, sectionIndex) => {
												return (
													<div
														key={sectionIndex}
														className="grid content-center grid-cols-8"
													>
														{sectionIndex === 0 ? (
															<></>
														) : (
															<div className="col-span-8 border-t-[1px] border-isGrayLightEmphasis4 w-full" />
														)}

														<Link
															className="col-span-8"
															href={{
																pathname:
																	"/learn/[ship]/[sail]",
																query: {
																	ship: index.parent,
																	sail: index[
																		section
																	].path,
																},
															}}
														>
															<div
																className={`delay-50 cursor-pointer truncate 
								 px-[12px] transition duration-200 ease-in-out text-xs md:text-md lg:text-md py-[2px]
								
								${
									index[section].path === Router.query.sail
										? "bg-isGreenDark text-isWhite"
										: "text-isGrayDarkEmphasis4 hover:bg-isWhite hover:text-isBlack"
								}`}
															>
																{
																	index[
																		section
																	].title
																}{" "}
															</div>
														</Link>
													</div>
												);
											}
										)}
									</div>
								</div>
							</div>

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
								fill-isIndgioDark stroke-none hover:fill-isIndgioDarkEmphasis "
								>
									<title>Edit on GitHub</title>
									<path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
								</svg>
							</Link>
						</div>
					</div>

					{/* MARKDOWN PAGE */}
					<div
						className="w-full rounded-t-lg md:rounded-t-xl lg:rounded-t-2xl
					bg-isBlueDark font-extrabold text-isWhite text-center
					text-md md:text-lg lg:text-xl py-[6px]
					"
					>
						{frontmatter.title}&nbsp;&nbsp;
						<span
							className="rounded-lg font-extrabold bg-isWhite text-isBlueDark
									py-[2px] px-[4px] md:py-[3px] md:px-[6px] lg:py-[4px] lg:px-[8px]  "
						>
							--takes {frontmatter.takes} min.
						</span>
					</div>
					<div className="w-full flex flex-col place-content-center items-start text-xs md:text-sm lg:text-md">
						{/* NAVIGATION PANEL */}
						{/* <div
						className="mr-[12px] hidden lg:flex min-w-[200px] max-w-[200px] flex-col rounded-lg md:rounded-xl lg:rounded-2xl
						border-[1px] border-isGrayLightEmphasis4 bg-isWhite text-isGrey"
					>
						<div
							className="-mx-[1px] -mt-[1px] rounded-t-lg md:rounded-t-xl lg:rounded-t-2xl border-[1px] border-transparent 
						bg-gradient-to-br from-isGhost to-isGhost font-black text-isWhite text-center
						text-md md:text-lg lg:text-xl py-[6px] mb-[8px]"
						>
							{index.parent.charAt(0).toUpperCase() +
								index.parent.slice(1)}
						</div>

						{index.sections.map((section, sectionIndex) => {
							return (
								<div
									key={sectionIndex}
									className="grid content-center grid-cols-8"
								>
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
					</div> */}
						{/* NAVIGATION PANEL */}

						<div
							className="flex w-full flex-col border-[1px] rounded-b-lg md:rounded-b-xl lg:rounded-b-2xl  
				             border-isGrayLightEmphasis4 border-t-[0px] bg-isWhite text-isGrayDarkEmphasis6 "
						>
							<div className="px-[14px] md:px-[20px] lg:px-[26px] text-xs md:text-sm lg:text-md break-words">
								<MDXRemote
									components={MDXComponents}
									{...source}
								/>
							</div>
						</div>
					</div>
					{/* MARKDOWN PAGE */}
				</div>
			</div>

			<div
				className="z-50 flex flex-col w-full place-content-center items-center sticky bottom-0
				 bg-isGrayDarkEmphasis6 text-center py-[8px] px-[12px] bg-opacity-90 backdrop-blur-lg"
			>
				<div className="flex flex-row w-full max-w-[1182px] justify-between">
					{prevIndex === "-1" ? (
						<div></div>
					) : (
						<Link
							href={{
								pathname: "/learn/[ship]/[sail]",
								query: {
									ship: index.parent,
									sail: prevSection,
								},
							}}
							target="_self"
							rel="noopener noreferrer"
						>
							<div
								className="px-[10px] md:px-[13px] lg:px-[16px] rounded-lg text-lg md:text-xl lg:text-2xl
                                    delay-50 transition duration-300 ease-in-out tracking-tight font-bold
									bg-isBlueDark text-isGrayLightEmphasis6 
									hover:bg-isBlueDarkEmphasis hover:text-isWhite flex flex-row items-center
									"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									className="mr-[6px] md:mr-[9px] lg:mr-[12px] w-full h-full fill-isGrayLightEmphasis6 
									stroke-[1px] md:stroke-[1.5px] lg:stroke-[2px] stroke-isGrayLightEmphasis6"
								>
									<title>Prev</title>
									<path d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" />
								</svg>
								Prev
							</div>
						</Link>
					)}

					{nextIndex === "-1" ? (
						<div></div>
					) : (
						<Link
							href={{
								pathname: "/learn/[ship]/[sail]",
								query: {
									ship: index.parent,
									sail: nextSection,
								},
							}}
							target="_self"
							rel="noopener noreferrer"
						>
							<div
								className="px-[10px] lg:px-[16px] rounded-lg text-lg md:text-xl lg:text-2xl
                                    delay-50 transition duration-300 ease-in-out tracking-tight font-bold
									bg-isBlueDark text-isGrayLightEmphasis6 
									hover:bg-isBlueDarkEmphasis hover:text-isWhite flex flex-row items-center
									"
							>
								Next
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									className="ml-[6px] md:ml-[9px] lg:ml-[12px] w-full h-full fill-isGrayLightEmphasis6 
									stroke-[1px] md:stroke-[1.5px] lg:stroke-[2px] stroke-isGrayLightEmphasis6"
								>
									<title>Next</title>
									<path d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" />
								</svg>
							</div>
						</Link>
					)}
				</div>
			</div>
		</>
	);
};

export default Sail;

import { useRouter } from "next/router";
import { Octokit } from "octokit";
import { Constants } from "../../../components";
import Link from "next/link";
import Image from "next/image";
import { BigHead } from "@bigheads/core";

export const getStaticProps = async (context) => {
	const octokit = new Octokit({
		auth: process.env.NEXT_PUBLIC_GIT_TOKEN,
	});

	const { params } = context;

	const owner = Constants.owner;
	const repo = Constants.repo;

	const pathIndex = `${params.ship}/index.json`;
	const responseIndex = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}{?ref}", {
		owner: owner,
		repo: repo,
		path: pathIndex,
	});

	const index = JSON.parse(Buffer.from(responseIndex.data.content, "base64"));

	return {
		props: {
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
			},
		},
	];

	return {
		paths: paths,
		fallback: true,
	};
};

const Ship = ({ index }) => {
	const Router = useRouter();

	if (Router.isFallback) {
		return <>Loading...</>;
	}

	return (
		<>
			<div className="flex flex-col items-center w-full min-h-screen bg-isGrayLightEmphasis6 place-content-start">
				<div className="w-full h-full lg:max-w-[1200px] flex flex-col p-[12px] space-y-[12px] ">
					<div className="w-full -mt-[16px] relative">
						<img
							src={index.banner}
							alt={`${index.parent} banner`}
							layout={"fill"}
							className="mt-[12px] blur-2xl absolute w-full object-cover object-center rounded-md md:rounded-lg lg:rounded-xl h-[150px] md:h-[200px] lg:h-[250px]"
						/>
						<div
							className="absolute place-content-center h-[150px] md:h-[200px] lg:h-[250px] z-[2] flex flex-col items-center w-full
                        mt-[12px] text-5xl md:text-8xl lg:text-11xl font-black text-isWhite drop-shadow-lg capitalize"
						>
							{index.parent}
						</div>
					</div>

					<img
						src={index.banner}
						alt={`${index.parent} banner`}
						layout={"fill"}
						className="z-[1] w-full object-cover object-center rounded-md md:rounded-lg lg:rounded-xl h-[150px] md:h-[200px] lg:h-[250px]
						"
					/>

					{index.sections.map((section, key) => {
						return (
							<Link
								href={`${index.parent}/${index[section].path}`}
								key={key}
								passHref
								className="z-[3] group"
							>
								<div
									className="w-full rounded-md bg-isWhite transition duration-300 ease-in-out delay-50 group-hover:bg-isBlueDark md:rounded-lg lg:rounded-xl
                                shadow-sm flex flex-col p-[15px] md:p-[20px] lg:p-[25px] "
								>
									<div className="text-lg font-bold leading-3 transition duration-300 ease-in-out group-hover:text-isWhite group-hover:text-is md:text-xl lg:text-2xl text-isGrayDarkEmphasis4 delay-50">
										{index[section].title}
									</div>
									<div
										className="mt-[4px] text-xs font-medium md:text-sm lg:text-md text-isGrayDark2
                                     group-hover:text-isWhite transition duration-300 ease-in-out delay-50 flex flex-row items-center"
									>
										<div className="flex flex-row items-center -mt-[8px] ">
											<BigHead className="z-50 w-4 h-4 p-0 md:h-6 md:w-6 lg:h-8 lg:w-8 drop-shadow-lg " />
											<BigHead className="z-40 lg:-ml-[14px] md:-ml-[12px] -ml-[10px] w-4 h-4 p-0 md:h-6 md:w-6 lg:h-8 lg:w-8 drop-shadow-lg" />
											<BigHead className="z-30 lg:-ml-[14px] md:-ml-[12px] -ml-[10px] w-4 h-4 p-0 md:h-6 md:w-6 lg:h-8 lg:w-8 drop-shadow-lg" />
											{/* <BigHead className="z-20 lg:-ml-[14px] md:-ml-[12px] -ml-[10px] w-4 h-4 p-0 md:h-6 md:w-6 lg:h-8 lg:w-8 drop-shadow-lg" />
											<BigHead className="z-10 lg:-ml-[14px] md:-ml-[12px] -ml-[10px] w-4 h-4 p-0 md:h-6 md:w-6 lg:h-8 lg:w-8 drop-shadow-lg" /> */}
										</div>
										&nbsp;
										{Math.floor(Math.random() * 100 + 100)}+ Shippers &nbsp;--&nbsp;
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											className="w-3 h-3 transition duration-300 ease-in-out md:h-4 md:w-4 lg:h-5 lg:w-5 fill-isRedLight group-hover:fill-isRedDark stroke-none delay-50"
										>
											<path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
										</svg>
										&nbsp;
										{Math.floor(Math.random() * 100 + 100)}
										&nbsp;--&nbsp;
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											className="w-3 h-3 transition duration-300 ease-in-out md:h-4 md:w-4 lg:h-5 lg:w-5 fill-isGreenLight group-hover:fill-isGreenDark stroke-none delay-50"
										>
											<path
												fillRule="evenodd"
												d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
												clipRule="evenodd"
											/>
										</svg>
										&nbsp;
										{index[section].takes} min
									</div>
									<hr className="mt-[4px] w-full transition duration-300 ease-in-out delay-50 border-isGrayLightEmphasis4 group-hover:border-isWhite" />
									<div
										className="leading-5 text-sm font-medium md:text-md lg:text-lg mt-[10px] md:mt-[15px] lg:mt-[20px] text-isGrayDarkEmphasis
                                    group-hover:text-isWhite transition duration-300 ease-in-out delay-50"
									>
										{index[section].description}
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Ship;

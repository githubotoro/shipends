import Link from "next/link";
import styled from "@emotion/styled";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

import Image from "next/image";
import { Octokit } from "octokit";

import { Constants } from "../../components";

export const getStaticProps = async () => {
	const octokit = new Octokit({
		auth: process.env.NEXT_PUBLIC_GIT_TOKEN,
	});

	const owner = Constants.owner;
	const repo = Constants.repo;
	const path = "index.json";

	const response = await octokit.request(
		"GET /repos/{owner}/{repo}/contents/{path}{?ref}",
		{
			owner: owner,
			repo: repo,
			path: path,
		}
	);

	const json = JSON.parse(Buffer.from(response.data.content, "base64"));
	const ships = json.ships;

	return {
		props: {
			ships: ships,
		},
	};
};

const Learn = ({ ships }) => {
	const bannerLoader = () => {
		return (
			<div
				className="w-full h-full rounded-t-lg md:rounded-t-xl lg:rounded-t-2xl
			border-[1px] border-isGrayLightEmphasis4 bg-isWhite p-[20px]"
			>
				<div
					className="animate-pulse w-full h-full bg-isGreyMuted
					rounded-lg md:rounded-xl lg:rounded-2xl"
				></div>
			</div>
		);
	};

	return (
		<>
			<div className="flex min-h-screen text-xs font-normal place-content-center bg-isGrayLightEmphasis6 md:text-sm ">
				<div className="-mt-[12px] mx-auto max-w-7xl flex-1 p-[12px]">
					<div
						className="mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[50px] mb-[20px] w-full text-isGrayDarkEmphasis6
					bg-clip-text text-center text-xl font-black md:text-2xl lg:text-3xl leading-tighter"
					>
						choose your&nbsp;
						<span
							className="rounded-md md:rounded-lg lg:rounded-xl drop-shadow-md
						bg-gradient-to-br from-isBlueLight to-isBlueDark
						py-[0px] px-[6px] font-extrabold text-isGrayLightEmphasis6 md:py-[1px] md:px-[8px] lg:py-[2px] lg:px-[10px]"
						>
							next
						</span>
						&nbsp;
						<span className=" font-black text-isGrayDarkEmphasis6">
							superpower!
						</span>
					</div>
					<div className="grid grid-cols-1 gap-[12px] sm:grid-cols-2 md:grid-cols-3">
						{ships.map((ship, index) => {
							return (
								<div
									key={index}
									className="flex flex-col h-full w-full"
								>
									<div className="flex flex-col w-full h-[120px] md:h-[140px] lg:h-[160px]  ">
										<div className="relative w-full h-full">
											<Image
												src={ship.banner}
												layout={"fill"}
												className="object-cover object-center rounded-t-lg md:rounded-t-xl lg:rounded-t-2xl
											border-transparent"
											/>
											{/* {bannerLoader()} */}
										</div>
									</div>

									<div
										className="flex w-full grow flex-col rounded-b-lg md:rounded-b-xl lg:rounded-b-2xl border-[1px]
									border-t-[0px] border-isGrayLightEmphasis4 text-isGrayDarkEmphasis6 bg-isWhite"
									>
										<div className="my-[12px] mx-[12px] flex flex-row items-center">
											<div className="flex flex-col w-6 h-6 md:h-7 md:w-7 lg:h-8 lg:w-8 ">
												<div className="relative w-full h-full">
													<Image
														src={ship.logo}
														alt={`${ship.name} banner`}
														layout={"fill"}
														className="object-cover object-center rounded-md md:rounded-lg lg:rounded-xl 
														drop-shadow-md"
													/>
												</div>
											</div>

											<div className="ml-[12px] text-lg font-bold md:text-xl lg:text-2xl">
												{ship.name}
											</div>
										</div>

										<hr className="border-t-[1px] border-isGrayLightEmphasis4" />

										<div className="m-[12px] text-xs md:text-sm lg:text-md leading-4 text-isGrayLight md:m-[12px] ">
											{ship.description}
										</div>

										<div className="mt-auto mb-[12px] mr-[12px] flex flex-col items-end">
											<Link
												href={`/learn/${ship.path}/prologue`}
												passHref
											>
												{ship.status === "active" ? (
													<button
														className="delay-50 rounded-lg md:rounded-xl lg:rounded-2xl  py-[4px]
                                                    px-[10px] text-sm font-bold text-isGrayDark3 transition duration-200 ease-in-out
                                                    bg-isGrayLightEmphasis5 hover:bg-isGrayLight hover:text-isGrayLightEmphasis6 md:text-md lg:text-lg
                                                	"
													>
														Let&apos;s Ship!
													</button>
												) : (
													<button
														disabled
														className="delay-50 cursor-not-allowed rounded-lg md:rounded-xl lg:rounded-2xl  py-[4px]
                                                    px-[10px] text-sm font-bold text-isGrayDark3 transition duration-200 ease-in-out
                                                    bg-isGrayLightEmphasis5 hover:bg-isGrayLight hover:text-isGrayLightEmphasis6 md:text-md lg:text-lg
                                                	"
													>
														Coming Soon.
													</button>
												)}
											</Link>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Learn;

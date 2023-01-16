import Link from "next/link";
import styled from "@emotion/styled";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

import { Image } from "next/image";
import { RepeatOneSharp } from "@mui/icons-material";

import { Fetch } from "../../components";

export const getStaticProps = async () => {
	const path = "index.json";

	const response = await Fetch({ path });

	const ships = JSON.parse(
		Buffer.from(response.data.content, "base64")
	).ships;

	return {
		props: {
			ships: ships,
		},
	};
};

const Learn = ({ ships }) => {
	return (
		<>
			<div className="min-h-screen flex place-content-center bg-white">
				<div className="flex-1 max-w-7xl mx-auto p-3">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
						{ships.map((ship, index) => {
							return (
								<div
									key={index}
									className="flex flex-col py-1 px-2 w-full h-full border border-platinum rounded-lg text-zeus"
								>
									<div className="h-36 -mt-1 -mx-2 mb-1 bg-aqua rounded-t-md text-md"></div>
									<div className="flex flex-row items-center">
										<div className="bg-violet w-6 h-6 rounded-md" />
										<div className="ml-2 text-dune text-lg font-bold">
											{ship.name}
										</div>
									</div>

									<hr className="bg-platinum -mx-2 my-1" />

									<div className="mb-1 text-xs text-hurricane font-normal">
										{ship.description}
									</div>
									<div className="mt-auto mb-1 flex flex-col items-end">
										<Link
											href={`/learn/${ship.path}/prologue`}
											passHref
										>
											{ship.status === "active" ? (
												<button
													className={`transition ease-in-out delay-100 duration-200
                                                     rounded-lg py-1 px-2 text-sm text-flint hover:text-dune
                                                bg-linen hover:bg-silver font-semibold
                                                `}
												>
													Let&apos;s Ship!
												</button>
											) : (
												<button
													disabled
													className={`transition ease-in-out delay-100 duration-200
                                                    cursor-not-allowed rounded-lg py-1 px-2 text-sm text-flint
                                                bg-linen hover:bg-silver font-semibold
                                                `}
												>
													Coming Soon.
												</button>
											)}
										</Link>
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

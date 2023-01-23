import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const ShipCard = ({ ship }) => {
	const [loading, setLoading] = useState(true);

	const LoadingImage = () => {
		return (
			<>
				<div
					className={`w-full h-full border-[1px] border-isGrayLightEmphasis4
					rounded-t-lg md:rounded-t-xl lg:rounded-t-2xl bg-isWhite p-[12px]
					${loading ? "block" : "hidden"}`}
				>
					<div className="w-full h-full rounded-lg bg-isGrayLightEmphasis5 md:rounded-xl lg:rounded-2xl animate-pulse"></div>
				</div>
			</>
		);
	};

	return (
		<>
			<div className="flex flex-col w-full h-full">
				<div className="flex flex-col w-full h-[120px] md:h-[140px] lg:h-[160px]  ">
					<div className="relative w-full h-full">
						<LoadingImage />
						<Image
							src={ship.banner}
							alt={`${ship.name} banner`}
							layout={"fill"}
							className={`object-cover object-center border-transparent rounded-t-lg md:rounded-t-xl lg:rounded-t-2xl`}
							onLoadingComplete={() => {
								setLoading(false);
							}}
						/>
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
									alt={`${ship.name} logo`}
									layout={"fill"}
									className="object-cover object-center rounded-md shadow-md md:rounded-lg lg:rounded-xl"
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
						<Link href={`/learn/${ship.path}/prologue`} passHref>
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
		</>
	);
};

export default ShipCard;

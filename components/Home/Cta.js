import Image from "next/image";
import styled from "@emotion/styled";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import Link from "next/link";

const Cta = () => {
	const cssConfig = resolveConfig(tailwindConfig);

	const ResponsiveFontSize = styled.div`
		font-size: 8vw;

		@media only screen and (min-width: 640px) {
			font-size: 7vw;
		}

		@media only screen and (min-width: 768px) {
			font-size: 6vw;
		}

		@media only screen and (min-width: 1024px) {
			font-size: 52px;
		}
	`;
	return (
		<>
			<div className="flex flex-col bg-top bg-isWhite">
				<div className="flex flex-col items-center w-full min-h-screen text-center place-content-start">
					{/* TAGLINE */}
					<ResponsiveFontSize>
						<div
							className="mt-[30px] md:mt-[40px] lg:mt-[50px]
				 w-full max-w-5xl flex flex-col font-black place-content-center"
						>
							<div className="flex flex-col px-1 text-transparent bg-gradient-to-r from-isGolden to-isMagenta bg-clip-text">
								ship cool products
							</div>
							<div
								className="-mt-[12px] sm:-mt-[16px] md:-mt-[16px] lg:-mt-[20px] flex flex-col px-1
								italic text-transparent
				bg-gradient-to-br from-isGrayDarkEmphasis6 to-isGrayDarkEmphasis6 bg-clip-text"
							>
								without reading docs
							</div>
						</div>
					</ResponsiveFontSize>
					{/* TAGLINE */}

					{/* THEME BANNER */}
					<div className="p-[12px] flex flex-col w-full max-w-4xl h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px]">
						<div className="relative w-full h-full">
							<Image
								src={"https://i.imgur.com/xKRjivO.jpg"}
								alt={"Shipends Theme Banner"}
								layout={"fill"}
								className="object-cover object-center shadow-sm rounded-xl md:rounded-xl lg:rounded-3xl"
							/>
						</div>
					</div>
					{/* THEME BANNER */}

					{/* DESCRIPTION */}
					<div
						className="py-[12px] px-[12px] font-bold text-isGrayDark2
						text-md md:text-lg lg:text-xl tracking-tight"
					>
						We go through Web3 docs, simplify them and create notes, so you can start shipping{" "}
						<div className="italic font-extrabold text-isGrayDarkEmphasis6">-- within 5 min.</div>
					</div>
					{/* DESCRIPTION */}

					{/* GET STARTED */}
					<Link href="/learn" className="pt-[4px]">
						<div
							className="border-animate
							px-[12px] py-[4px] rounded-lg md:rounded-xl lg:rounded-xl
							bg-gradient-to-br from-isWater to-isAzure shadow-md
							hover:from-isAzure hover:to-isBlueDarkEmphasis
							delay-50 transition duration-300 ease-in-out
							"
						>
							<div className="text-xl font-black text-transparent md:text-2xl bg-gradient-to-br from-isWhite to-isWhite bg-clip-text">
								Lesgoo!
							</div>
						</div>
					</Link>
					{/* GET STARTED */}
				</div>
			</div>
		</>
	);
};

export default Cta;

import styled from "@emotion/styled";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
	const cssConfig = resolveConfig(tailwindConfig);

	const Neon = styled.span`
		text-shadow: 0 0 5px ${cssConfig.theme.colors.bianca};
	`;

	return (
		<>
			{/* TAGLINE */}
			<div className="z-50 flex flex-col -space-y-4 p-3 text-[40px] font-black md:-space-y-10 md:text-[80px]">
				<div className="text-transparent bg-gradient-to-r from-golden to-magenta bg-clip-text">
					Ship Cool Products
				</div>
				<div>
					{/* <span className="italic text-grey">@</span>&nbsp; */}

					<span className="mt-5 italic text-transparent bg-gradient-to-br from-isZeus to-isZeus bg-clip-text">
						without reading docs
					</span>
				</div>
			</div>
			{/* TAGLINE */}

			<img
				className="rounded-xl w-full max-w-4xl h-[250px] object-cover object-center"
				src="https://i.imgur.com/xKRjivO.jpg"
				alt="Shipends Theme Banner"
			/>

			{/* <Image
				className="rounded-xl -mt-[100px]"
				src="https://i.imgur.com/WXIZUdJ.png"
				alt="Shipends Theme Banner"
				width={`w-full`}
				height={500}
			/> */}

			{/* DESCRIPTION */}
			<div
				className="mt-5 max-w-xl p-3 font-bold text-isGrey
			 md:max-w-4xl text-md lg:text-3xl -leading-[10] tracking-tight"
			>
				{/* We simplify Web3 docs that you can explain your mum + ship with
				her together. */}
				We go through Web3 docs, simplify them and create notes, so you can start shipping{" "}
				<span className="italic text-isZeus font-extrabold">-- within 5 min.</span>
			</div>
			{/* DESCRIPTION */}

			{/* GET STARTED */}
			<Link href="/learn">
				<div className="px-3 py-1 mt-4 rounded-xl bg-gradient-to-r from-golden to-magenta md:mt-6 md:py-2 md:px-4">
					<div className="text-2xl font-extrabold text-transparent bg-gradient-to-br from-bianca to-white bg-clip-text md:text-4xl">
						{/* Get Started */}
						Lesgoo!
					</div>
				</div>
			</Link>
			{/* GET STARTED */}
		</>
	);
};

export default Header;

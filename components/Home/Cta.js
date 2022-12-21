import styled from "@emotion/styled";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const Cta = () => {
	const cssConfig = resolveConfig(tailwindConfig);

	const Neon = styled.span`
		text-shadow: 0 0 5px ${cssConfig.theme.colors.bianca};
	`;

	return (
		<>
			<div
				className="flex flex-col items-center text-center min-h-screen w-full place-content-center
                           bg-gradient-to-br from-black to-zeus"
			>
				<div className="flex flex-col p-3 font-black text-[40px] md:text-[80px] drop-shadow-lg -space-y-4 md:-space-y-10">
					<div className="text-transparent bg-clip-text bg-gradient-to-r from-golden to-magenta">
						Learn Web3 Tools
					</div>
					<div>
						<span className="italic text-grey">@</span>&nbsp;
						<Neon>
							<span className="italic text-transparent bg-clip-text bg-gradient-to-br from-bianca to-white">
								Lightspeed.
							</span>
						</Neon>
					</div>
				</div>
				<div className="p-3 mt-2 md:mt-3 text-amour font-bold text-[25px] md:text-[40px] max-w-xl md:max-w-4xl leading-[30px] md:leading-[50px]">
					We simplify Web3 docs that you can explain your mum + ship
					with her together.
				</div>
				<div className="mt-4 md:mt-6 flex flex-row space-x-6">
					<a
						href="https://twitter.com/shipendsHQ"
						target="_blank"
						rel="noreferrer noopener"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							className="stroke-none hover:fill-white h-8 w-8 md:h-10 md:w-10 fill-azure drop-shadow-md"
						>
							<title>Twitter</title>
							<path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
						</svg>
					</a>
					<a
						href="mailto: shipends@gmail.com"
						target="_blank"
						rel="noreferrer noopener"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							className="stroke-none hover:fill-white h-8 w-8 md:h-10 md:w-10 fill-ruddy drop-shadow-md"
						>
							<title>Email</title>
							<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
						</svg>
					</a>
					<a
						href="https://github.com/shipends"
						target="_blank"
						rel="noreferrer noopener"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							className="stroke-none hover:fill-white h-8 w-8 md:h-10 md:w-10 fill-grey drop-shadow-md"
						>
							<title>GitHub</title>
							<path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
						</svg>
					</a>
				</div>
			</div>
		</>
	);
};

export default Cta;

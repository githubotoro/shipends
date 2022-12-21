import styled from "@emotion/styled";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";

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
				<div className="mt-3 md:mt-5 flex flex-row space-x-3">
					<a
						href="https://twitter.com/shipendsHQ"
						target="_blank"
						rel="noreferrer noopener"
					>
						<IconButton>
							<TwitterIcon className="stroke-none hover:fill-white h-8 w-8 md:h-10 md:w-10 fill-azure drop-shadow-md" />
						</IconButton>
					</a>
					<a
						href="mailto: shipends@gmail.com"
						target="_blank"
						rel="noreferrer noopener"
					>
						<IconButton>
							<EmailIcon className="stroke-none hover:fill-white h-8 w-8 md:h-10 md:w-10 fill-ruddy drop-shadow-md" />
						</IconButton>
					</a>
					<a
						href="https://github.com/shipends"
						target="_blank"
						rel="noreferrer noopener"
					>
						<IconButton>
							<GitHubIcon className="stroke-none hover:fill-white h-8 w-8 md:h-10 md:w-10 fill-grey drop-shadow-md" />
						</IconButton>
					</a>
				</div>
			</div>
		</>
	);
};

export default Cta;

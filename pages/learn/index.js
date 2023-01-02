import Link from "next/link";
import styled from "@emotion/styled";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

import { Image } from "next/image";

const Learn = () => {
	const ships = [
		{
			name: "Push Protocol",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",

			path: "push-protocol",
		},
		{
			name: "Push Protocol",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",

			path: "push-protocol",
		},
		{
			name: "Push Protocol",
			description: `Lorem Ipsum is simply dummy text`,
			path: "push-protocol",
		},
	];

	return (
		<>
			<div className="flex flex-col w-full min-h-screen bg-zeus place-content-start items-center">
				<div className="flex flex-col max-w-4xl w-full space-y-3 p-3">
					{ships.map((ship, index) => {
						return (
							<div
								key={index}
								className="flex flex-col w-full px-4 py-2 rounded-lg bg-bianca"
							>
								<div className="flex flex-row items-center">
									<img
										src={`/assets/logos/${ship.path}.png`}
										alt={`${ship.name} Logo`}
										className="w-10 rounded-lg p-2"
									/>
									<div className="ml-1 font-black text-lg text-zeus">
										{ship.name}
									</div>
								</div>

								<div className="font-normal text-md text-shuttle">
									{ship.description}
								</div>
								<div className="flex flex-col items-end -mr-1 mb-1 mt-2">
									<Link href={`/learn/${ship.path}`}>
										<button
											className="px-3 py-1 rounded-lg text-md 
									bg-gradient-to-br from-azure to-aqua text-bianca font-black
									border-animate shadow-[0_0_0_0px_#99EBFF] hover:shadow-[0_0_0_5px_#99EBFF] border-opacity-20"
										>
											Let&apos;s Ship!
										</button>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Learn;

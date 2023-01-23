import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getActive } from "./Active";
import { routes } from "./Routes";

const Navigation = () => {
	const router = useRouter();
	const [isActive, setIsActive] = useState("");

	useEffect(() => {
		const currActive = getActive(router.asPath);
		setIsActive(currActive);
	}, [router]);

	return (
		<>
			<div
				className="z-50 flex flex-col w-full place-content-center items-center sticky top-0
				text-center py-[8px] px-[12px]
            "
			>
				<div
					className={`flex flex-row w-full max-w-[1182px] justify-between 
					rounded-md md:rounded-lg lg:rounded-xl shadow-md
					${router.asPath === "/" ? "bg-isGrayLightEmphasis6" : "bg-isWhite"} bg-opacity-50 backdrop-blur-md p-[12px]`}
				>
					{routes.map((route, index) => {
						return (
							<Link href={`${route.path}`} key={index}>
								<div
									id={`${route.id}`}
									className={`px-[10px] md:px-[13px] lg:px-[16px] rounded-lg text-lg md:text-xl lg:text-2xl
                                    delay-50 transition duration-300 ease-in-out tracking-tight font-bold 
                                    ${
										isActive === route.id
											? "text-isWhite bg-isGrayDarkEmphasis6 "
											: "text-isGrayDarkEmphasis6 hover:bg-isGrayDarkEmphasis hover:text-isWhite"
									}`}
								>
									{route.display}
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Navigation;

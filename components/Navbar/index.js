import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getIcon } from "./Icon";
import { getActive } from "./Active";
import { routes } from "./Routes";

const Navbar = () => {
	const router = useRouter();
	const [isActive, setIsActive] = useState("");

	useEffect(() => {
		const currActive = getActive(router.asPath);
		setIsActive(currActive);
	}, [router]);

	return (
		<>
			{/* <div className="sticky bottom-0 flex flex-col items-center place-content-center bg-transparent -mt-[90px]">
                <div className="p-3 flex flex-col w-full max-w-2xl items-center place-content-center">
                    <div
                        className="p-2 flex flex-row w-full bg-bianca items-center place-content-center rounded-lg
					space-x-6 bg-opacity-100"
                    >
                        {routes.map((route, index) => {
                            return (
                                <Link href={`${route.path}`} key={index}>
                                    <div
                                        id={`${route.id}`}
                                        className={`p-2 rounded-lg ${
                                            isActive === route.id
                                                ? "bg-azure"
                                                : "bg-none"
                                        }`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className={`w-8 h-8 ${
                                                isActive === route.id
                                                    ? "fill-bianca"
                                                    : "fill-indigo"
                                            }`}
                                        >
                                            {getIcon(route.id)}
                                        </svg>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div> */}

			<div
				className="z-50 flex flex-col w-full place-content-center items-center sticky top-0 bg-isGrayDarkEmphasis6 text-center
                py-[8px] px-[12px] 
            "
			>
				<div className="flex flex-row w-full max-w-[1182px] justify-between">
					{routes.map((route, index) => {
						return (
							<Link href={`${route.path}`} key={index}>
								<div
									id={`${route.id}`}
									className={`px-[10px] md:px-[13px] lg:px-[16px] rounded-lg text-lg md:text-xl lg:text-2xl
                                    delay-50 transition duration-300 ease-in-out tracking-tight font-bold 
                                    ${
										isActive === route.id
											? "text-isGrayDarkEmphasis6 bg-isGrayLightEmphasis6 "
											: "text-isGrayLightEmphasis6 hover:bg-isGrayLightEmphasis6 hover:text-isGrayDarkEmphasis6"
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

export default Navbar;

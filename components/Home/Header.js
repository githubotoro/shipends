import styled from "@emotion/styled";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import Link from "next/link";

const Header = () => {
    const cssConfig = resolveConfig(tailwindConfig);

    const Neon = styled.span`
        text-shadow: 0 0 5px ${cssConfig.theme.colors.bianca};
    `;

    return (
        <>
            {/* TAGLINE */}
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
            {/* TAGLINE */}

            {/* DESCRIPTION */}
            <div className="p-3 mt-2 md:mt-3 text-amour font-bold text-[25px] md:text-[40px] max-w-xl md:max-w-4xl leading-[30px] md:leading-[50px]">
                We simplify Web3 docs that you can explain your mum + ship with
                her together.
            </div>
            {/* DESCRIPTION */}

            {/* GET STARTED */}
            <Link href="/learn">
                <div className="bg-gradient-to-r from-golden to-magenta py-1 px-3 md:py-2 md:px-4 rounded-xl mt-4 md:mt-6">
                    <div
                        className="text-transparent bg-clip-text bg-gradient-to-br from-bianca to-white font-extrabold
			text-2xl md:text-5xl "
                    >
                        Get Started
                    </div>
                </div>
            </Link>
            {/* GET STARTED */}
        </>
    );
};

export default Header;

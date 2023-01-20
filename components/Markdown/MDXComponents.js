// Definitions -- https://mdxjs.com/table-of-components/

import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const MDXComponents = {
    h1: (props) => {
        return (
            <></>
            // <h1
            // 	className="pb-1 md:pb-3 mt-1 mb-3 border-b-[1px] border-borderMuted
            //     text-2xl md:text-3xl font-bold"
            // 	{...props}
            // />
        );
    },
    h2: (props) => {
        return (
            <h2
                className="mt-[6px] md:mt-[8px] mb-[8px] md:mb-[10px] border-b-[1px] border-isGreyMuted
	            text-lg md:text-lg font-semibold"
                {...props}
            />
        );
    },
    h3: (props) => {
        return (
            <h3
                className="mb-[6px] md:mb-[8px] 
                text-md md:text-lg font-semibold"
                {...props}
            />
        );
    },
    // h4: (props) => {
    //     return (
    //         <h4
    //             className="mb-3
    //             text-md md:text-md font-semibold"
    //             {...props}
    //         />
    //     );
    // },
    // h5: (props) => {
    //     return (
    //         <h5
    //             className="mb-3
    //             text-sm md:text-md font-semibold"
    //             {...props}
    //         />
    //     );
    // },
    p: (props) => {
        return <div className="mb-[6px] md:mb-[8px]" {...props} />;
    },
    em: (props) => {
        return <span className="italic" {...props} />;
    },
    strong: (props) => {
        return <span className="font-semibold" {...props} />;
    },
    a: (props) => {
        const GetRouter = () => {
            const Router = useRouter();
            return Router;
        };

        const Router = GetRouter();

        if (props.href.slice(0, 2) === "./") {
            return (
                <Link
                    className="text-isBlueLight hover:border-b hover:border-isBlueLight hover:cursor-pointer"
                    href={{
                        pathname: "/learn/[ship]/[sail]",
                        query: {
                            ship: Router.query.ship,
                            sail: props.href.slice(2, -3),
                        },
                    }}
                >
                    {props.children}
                </Link>
            );
        } else if (props.href.charAt(0) === "#") {
            return (
                <div className="group flex flex-row">
                    <Link
                        target="_self"
                        rel="noopener noreferrer"
                        passHref
                        {...props}
                    />
                    &nbsp;
                    <div className="hidden group-hover:block font-black text-isPurple">
                        #
                    </div>
                </div>
            );
        } else {
            return (
                <Link
                    className="text-isBlueLight hover:border-b hover:border-isBlueLight hover:cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                    passHref
                    {...props}
                />
            );
        }
    },
    blockquote: (props) => {
        return (
            <blockquote
                className="mb-[6px] md:mb-[8px] py-[4px] px-[6px] md:px-[10px] md:py-[8px] border-l-[5px] md:border-l-[6px]
             border-isGreyMuted tracking-wide bg-isGreySubtle rounded-r-lg leading-tight"
            >
                <div
                    className="mt-[6px] ml-[6px] mr-[6px] text-isZeus "
                    {...props}
                />
            </blockquote>
        );
    },
    li: (props) => {
        return <li className="mb-[4px] md:mb-[6px] leading-tight" {...props} />;
    },
    ul: (props) => {
        return (
            <div className="mb-[6px] ml-[15px] md:ml-[20px] list-disc leading-tight">
                <div className="mb-[4px] md:mb-[6px]" {...props} />
            </div>
        );
    },
    ol: (props) => {
        return (
            <div className="mb-[6px] ml-[15px] md:ml-[20px] list-decimal leading-tight">
                <div className="mb-[4px] md:mb-[6px]" {...props} />
            </div>
        );
    },
    img: (props) => {
        return <Image {...props} alt="image" className="rounded-lg" />;
    },
    code: (props) => {
        return (
            <span
                className="inline-block align-middle bg-isGreySubtle text-isGrey font-mono py-[0.5px] px-[3px] md:py-[1px] md:px-[5px] rounded-md"
                {...props}
            />
        );
    },
    pre: (props) => {
        return (
            <pre className="mb-[6px] md:mb-[8px] py-[6px] px-[12px] md:py-[8px] md:px-[16px] bg-isGreySubtle rounded-md overflow-x-auto text-xs md:text-sm">
                <code className="font-mono " {...props} />
            </pre>
        );
    },
};

export default MDXComponents;

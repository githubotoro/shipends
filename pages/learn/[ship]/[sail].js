import Link from "next/link";
import { useRouter } from "next/router";

import { Octokit } from "octokit";
import { MDXRemote } from "next-mdx-remote";

import { Constants, Render, MDXComponents, Loading } from "../../../components";

export const getStaticProps = async (context) => {
    const octokit = new Octokit({
        auth: process.env.NEXT_PUBLIC_GIT_TOKEN,
    });

    const { params } = context;

    const owner = Constants.owner;
    const repo = Constants.repo;
    const pathMarkdown = `${params.ship}/${params.sail}.md`;

    let responseMarkdown;

    try {
        responseMarkdown = await octokit.request(
            "GET /repos/{owner}/{repo}/contents/{path}{?ref}",
            {
                owner: owner,
                repo: repo,
                path: pathMarkdown,
            }
        );
    } catch (err) {
        return {
            notFound: true,
        };
    }

    const { frontmatter, source } = await Render({ responseMarkdown });

    const pathIndex = `${params.ship}/index.json`;
    const responseIndex = await octokit.request(
        "GET /repos/{owner}/{repo}/contents/{path}{?ref}",
        {
            owner: owner,
            repo: repo,
            path: pathIndex,
        }
    );

    const index = JSON.parse(Buffer.from(responseIndex.data.content, "base64"));

    return {
        props: {
            frontmatter: frontmatter,
            source: source,
            index: index,
        },
        revalidate: 86400,
    };
};

export const getStaticPaths = async () => {
    const paths = [
        {
            params: {
                ship: "hardhat",
                sail: "prologue",
            },
        },
    ];

    return {
        paths: paths,
        fallback: true,
    };
};

const Sail = ({ frontmatter, source, index }) => {
    const Router = useRouter();

    if (Router.isFallback) {
        return <Loading />;
    }

    return (
        <>
            <div
                className="py-[4px] px-[4px] md:py-[6px] md:px-[8px] flex flex-col items-center place-content-center w-full
            bg-bgSubtle text-xs md:text-sm font-normal"
            >
                <div
                    className="flex flex-col border border-isGreyMuted rounded-lg
				             text-isZeus text-normal bg-bgInset w-full lg:max-w-[1412px]"
                >
                    Some Content
                </div>
            </div>

            {/* NAVIGATION PANEL */}
            <div
                className="flex flex-col p-[6px] md:p-[10px] lg:flex-row items-start place-content-center w-full
            bg-isWhite text-xs md:text-sm lg:text-md font-normal"
            >
                <div
                    className="hidden lg:flex flex-col border border-isGreyMuted rounded-md mr-[12px]
					text-isGrey bg-isWhite min-w-[200px] max-w-[200px]"
                >
                    <div
                        className="-ml-[1px] -mr-[1px] -mt-[1px] py-[4px] px-[4px] md:py-[6px] md:px-[8px]
						font-black bg-gradient-to-br from-isZeus to-isZeus text-isWhite rounded-t-md
					border border-isGreyMuted text-lg md:text-xl lg:text-2xl text-center mb-[8px]"
                    >
                        {index.parent.charAt(0).toUpperCase() +
                            index.parent.slice(1)}
                    </div>

                    {index.sections.map((section, sectionIndex) => {
                        return (
                            <div
                                key={sectionIndex}
                                className="grid grid-cols-8 content-center"
                            >
                                <Link
                                    className="col-span-8"
                                    href={{
                                        pathname: "/learn/[ship]/[sail]",
                                        query: {
                                            ship: index.parent,
                                            sail: index[section].path,
                                        },
                                    }}
                                >
                                    <div
                                        className={` truncate rounded-md py-[4px] px-[8px] cursor-pointer 
								transition ease-in-out delay-50 duration-200 mx-[6px] mb-[6px] lg:mx-[8px] lg:mb-[8px]
								${
                                    index[section].path === Router.query.sail
                                        ? "bg-isAzureSubtle text-isAzure font-normal"
                                        : "hover:bg-isSilverSubtle hover:text-isZeus"
                                }`}
                                    >
                                        {index[section].title}{" "}
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
                {/* NAVIGATION PANEL */}

                {/* MARKDOWN PAGE */}
                <div
                    className="flex flex-col lg:ml-0 border border-isGreyMuted rounded-lg
				             text-isZeus text-normal bg-isWhite w-full lg:max-w-[1200px]"
                >
                    <div
                        className="-ml-[1px] -mr-[1px] -mt-[1px] py-[4px] px-[4px] md:py-[6px] md:px-[8px]
						font-black bg-gradient-to-br from-isAzure to-isAzure text-isWhite rounded-t-md
					border border-isGreyMuted text-lg md:text-xl lg:text-2xl text-center"
                    >
                        {frontmatter.title}&nbsp;&nbsp;
                        <span className="text-isAzure bg-isWhite rounded-lg text-md md:text-lg py-[2px] px-[4px] md:py-[4px] md:px-[8px]">
                            --takes {frontmatter.takes} min.
                        </span>
                    </div>
                    <div className="my-[4px] mx-[12px] md:my-[10px] md:mx-[24px] lg:my-[16px] lg:mx-[36px]">
                        <MDXRemote components={MDXComponents} {...source} />
                    </div>
                </div>
                {/* MARKDOWN PAGE */}
            </div>
        </>
    );
};

export default Sail;

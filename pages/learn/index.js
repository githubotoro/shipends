import Link from "next/link";
import styled from "@emotion/styled";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

import { Image } from "next/image";
import { Octokit } from "octokit";

import { Constants } from "../../components";

export const getStaticProps = async () => {
    const octokit = new Octokit({
        auth: process.env.NEXT_PUBLIC_GIT_TOKEN,
    });

    const owner = Constants.owner;
    const repo = Constants.repo;
    const path = "index.json";

    const response = await octokit.request(
        "GET /repos/{owner}/{repo}/contents/{path}{?ref}",
        {
            owner: owner,
            repo: repo,
            path: path,
        }
    );

    const json = JSON.parse(Buffer.from(response.data.content, "base64"));
    const ships = json.ships;

    return {
        props: {
            ships: ships,
        },
    };
};

const Learn = ({ ships }) => {
    return (
        <>
            <div className="min-h-screen flex place-content-center bg-bgSubtle text-xs md:text-sm font-normal">
                <div className="flex-1 max-w-7xl mx-auto p-[6px] md:p-[12px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[6px] md:gap-[12px]">
                        {ships.map((ship, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col w-full h-full border border-borderDefault rounded-lg text-fgDefault"
                                >
                                    <div className="h-36 -mt-[1px] -mx-[1px] bg-aqua rounded-t-lg border-[1px] border-b-[0px] border-borderDefault" />

                                    <div className="flex flex-row items-center my-[6px] mx-[6px]">
                                        <div className="bg-violet w-6 h-6 rounded-md" />
                                        <div className="ml-[8px] text-lg font-bold">
                                            {ship.name}
                                        </div>
                                    </div>

                                    <hr className="bg-borderDefault border-borderDefault" />

                                    <div className="m-[6px] text-fgSubtle">
                                        {ship.description}
                                    </div>

                                    <div className="mt-auto mb-[6px] mr-[6px] flex flex-col items-end">
                                        <Link
                                            href={`/learn/${ship.path}/prologue`}
                                            passHref
                                        >
                                            {ship.status === "active" ? (
                                                <button
                                                    className={`transition ease-in-out delay-50 duration-200
                                                     rounded-lg py-[4px] px-[10px] text-fgMuted hover:text-bgSubtle
                                                bg-borderSubtle hover:bg-neutralEmphasis font-bold
                                                `}
                                                >
                                                    Let&apos;s Ship!
                                                </button>
                                            ) : (
                                                <button
                                                    disabled
                                                    className={`transition ease-in-out delay-50 duration-200
                                                     rounded-lg py-[4px] px-[10px] text-fgMuted hover:text-bgSubtle
                                                bg-borderSubtle hover:bg-neutralEmphasis font-bold cursor-not-allowed
                                                `}
                                                >
                                                    Coming Soon.
                                                </button>
                                            )}
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Learn;

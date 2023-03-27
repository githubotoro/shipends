export const revalidate = 24 * 60 * 60; // 24 hours

import { allGuides } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Display, Stats } from "@/app/components/ui";
import { Tweet, Back } from "@/app/components/buttons";

const getContent = async ({ slug }) => {
  const content = allGuides.find((guide) => guide.slug === slug);
  return content;
};

const getMetaContent = async () => {
  const content = allGuides.find((guide) => guide.slug === "sea");
  return content;
};

export const generateStaticParams = async () => {
  const paths = [
    {
      ship: "hardhat",
    },
  ];
  return paths;
};

const Ship = async ({ params }) => {
  const slug = `${params.ship}/guide`;
  const content = await getContent({ slug });
  if (!content) return notFound();

  const metaContent = await getMetaContent();
  if (!metaContent) return notFound();

  return (
    <main className="flex flex-col items-center w-full px-3">
      <div className="relative flex flex-col items-center w-full max-w-4xl mb-3 drop-shadow-sm place-content-center h-52">
        <h1 className="text-3xl text-center font-800 text-isSystemLightPrimary">
          {metaContent.data[params.ship].title}
        </h1>
        <p className="text-lg italic leading-tight text-center font-500 text-isLabelDarkSecondary">
          "{metaContent.data[params.ship].description}"
        </p>

        <div className="absolute top-0 flex flex-row justify-between w-full font-mono">
          <Back href={`/sea`} />
          <Tweet content="Hello%20world" />
        </div>
      </div>

      <hr className="w-full max-w-4xl pb-2 border-t-2 border-isSeparatorDarkTransparent" />

      <div className="grid w-full max-w-4xl grid-cols-1 gap-3 pb-3">
        {content.data.sections.map((section, sectionIndex) => {
          return (
            <Link
              scroll={true}
              target="_self"
              rel="noopener noreferrer"
              key={sectionIndex}
              href={`/sea/${content.data.parent}/${section}`}
            >
              <div className="grid w-full grid-cols-12 gap-3 p-5 transition-all duration-300 ease-in-out group rounded-3xl bg-isSystemDarkTertiary/60 hover:bg-isSystemDarkTertiary">
                <div className="w-full col-span-12 h-fit md:col-span-10">
                  <h2 className="text-[1.3rem] font-700 leading-snug transition-all duration-300 text-isSystemLightPrimary/90 group-hover:text-isWhite line-clamp-2">
                    {content.data[section].title}{" "}
                    <span className="leading-none shadow-sm px-2 pt-[0.2rem] pb-[0.1rem] text-[1.1rem] inline-block ml-2 rounded-lg bg-isGreenDark/70 group-hover:bg-isGreenDark transition-all duration-300 ease-in-out text-isSystemLightPrimary">
                      {content.data[section].takes} min.
                    </span>
                  </h2>

                  <h3 className="font-600 flex flex-row items-center text-isSystemLightTertiary pt-2 font-mono text-[0.9rem] sm:items-center tabular-nums sm:text-[1rem] ">
                    <div className="pr-1  py-[0.1rem] leading-none">
                      {content.data[section].publishedAt}
                    </div>
                    <Stats
                      className="flex flex-row items-center"
                      parent={content.data.parent}
                      id={section}
                      type="GET"
                    />
                  </h3>

                  <p className="mt-3 leading-tight tracking-wide text-md font-500 line-clamp-2 text-isSystemLightSecondary">
                    {content.data[section].description}
                  </p>
                </div>

                <div className="relative hidden w-full h-full transition-all duration-300 ease-in-out col-span-0 md:flex md:col-span-2 drop-shadow-sm opacity-70 group-hover:opacity-100">
                  <div className="absolute w-full h-full">
                    <Display image={content.data[section].banner} />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Ship;

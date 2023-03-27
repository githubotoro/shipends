export const revalidate = 24 * 60 * 60; // 24 hours

import { allGuides } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Display, SeaViews } from "@/app/components/ui";
import { RightArrow } from "@/app/components/icons";
import Link from "next/link";
import { Text } from "@/app/components/common";

const getContent = async () => {
  const content = allGuides.find((guide) => guide.slug === "sea");
  return content;
};

const Sea = async () => {
  const content = await getContent();
  if (!content) return notFound();

  return (
    <>
      <main className="flex flex-col items-center w-full px-3 font-400">
        <h1 className="py-8 text-4xl text-center font-800 text-isLabelDarkTertiary drop-shadow-sm">
          choose your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-isSystemLightPrimary to-isSystemLightSecondary">
            next
          </span>{" "}
          superpower
        </h1>

        <div className="grid w-full max-w-4xl grid-cols-1 py-3 min-[500px]:grid-cols-2 md:grid-cols-3 gap-3">
          {content.data.sections.map((section, sectionIndex) => {
            return (
              <Link
                key={sectionIndex}
                href={`sea/${section}`}
                target="_self"
                rel="noopener noreferrer"
                scroll={true}
              >
                <div
                  key={sectionIndex}
                  className="relative flex flex-col items-center w-full transition-all duration-300 ease-in-out bg-gradient-to-b from-isSystemDarkTertiary to-isSystemDarkPrimary rounded-2xl group"
                >
                  <div className="relative w-full h-40 transition-all duration-300 ease-in-out opacity-70 group-hover:opacity-100">
                    <Display
                      rounded="rounded-lg"
                      image={content.data[section].banner}
                    />
                  </div>

                  <div className="absolute top-0 flex flex-row items-center justify-between w-full px-1 py-0 transition-all duration-300 ease-in-out rounded-lg shadow-sm bg-gradient-to-b from-isSystemDarkTertiary to-isSystemDarkSecondary">
                    <div className="relative w-[1.2rem] h-[1.2rem] transition-all duration-300 ease-in-out opacity-80 group-hover:opacity-100">
                      <Display
                        rounded="rounded-md"
                        loadingBackground="bg-transparent"
                        image={content.data[section].logo}
                      />
                    </div>

                    <Text
                      tag="h2"
                      content={content.data[section].title}
                      props={{
                        size: "lg",
                        weight: "800",
                        color: "lightTertiary",
                        animate: "default",
                        className: "z-40 group-hover:text-isWhite",
                      }}
                    />
                    <div />
                  </div>

                  <div className="absolute bottom-0 flex flex-row items-center justify-between w-full px-3 py-1 transition-all duration-300 ease-in-out rounded-lg shadow-md text-isSystemDarkSecondary bg-gradient-to-b from-isWhite/30 to-isWhite/60 group-hover:bg-isWhite/40 backdrop-blur-sm">
                    <div className="flex flex-row items-center space-x-1">
                      <SeaViews parent={section} type="GET" />
                    </div>

                    <RightArrow classes="h-5 w-5 fill-isSystemDarkTertiary stroke-8 stroke-isSystemDarkSecondary" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Sea;

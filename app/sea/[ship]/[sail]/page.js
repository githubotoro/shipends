export const revalidate = 24 * 60 * 60; // 24 hours

import Link from "next/link";
import { allShips, allGuides } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Github, Twitter, BackCircle } from "@/app/components/icons";
import { getMDXComponents, Display, Stats } from "@/app/components/ui";
import { Tweet, Back, Edit } from "@/app/components/buttons";

const getContent = async ({ slug }) => {
  const content = allShips.find((ship) => ship.slug === slug);
  return content;
};

const getMetaContent = async ({ slug, section }) => {
  const content = allGuides.find((guide) => guide.slug === slug);
  return content.data[section];
};

export const generateStaticParams = async () => {
  const paths = [
    {
      ship: "hardhat",
      sail: "set-up-hardhat",
    },
  ];

  return paths;
};

const Render = ({ props, params }) => {
  const MDXComponents = getMDXComponents({ params });
  const Component = useMDXComponent(props.body.code);

  return (
    <div className="flex flex-col w-full max-w-4xl pb-3 space-y-9 text-isSystemLightTertiary ">
      <Component components={{ ...MDXComponents }} />
    </div>
  );
};

const Sail = async ({ params }) => {
  const slug = `${params.ship}/${params.sail}`;
  const content = await getContent({ slug });
  if (!content) return notFound();

  const metaSlug = `${params.ship}/guide`;
  const metaContent = await getMetaContent({
    slug: metaSlug,
    section: params.sail,
  });
  if (!metaContent) return notFound();

  return (
    <main id="top" className="flex flex-col items-center w-full px-3">
      <div className="relative flex flex-col items-center w-full max-w-4xl place-content-center h-52">
        <h1 className="text-3xl text-center font-700 text-isLabelDarkPrimary">
          {metaContent.title}
        </h1>
        <h2 className="px-1 mt-2 text-2xl leading-none text-center rounded-lg shadow-sm tabular-nums font-800 text-isSystemDarkSecondary bg-isSystemLightSecondary">
          ~ {metaContent.takes} min.
        </h2>

        <div className="absolute top-0 flex flex-row justify-between w-full font-mono">
          <Back href={`/sea/${params.ship}`} />
          <Tweet content="Hello%20world" />
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-full max-w-4xl pb-0 mb-2 -mt-1 font-mono text-xs border-b-2 font-500 md:text-lg tabular-nums text-isLabelDarkSecondary border-isSeparatorDarkTransparent">
        <div className="flex flex-row items-center">
          <div className="pr-1 text-isSystemLightTertiary py-[0.1rem] leading-none">
            {metaContent.publishedAt}
          </div>
          <Stats parent={params.ship} id={params.sail} type="POST" />
        </div>

        <Edit
          href={`https://github.com/shipends/next-app/blob/main/ships/${params.ship}/${params.sail}.md`}
        />
      </div>

      <div className="relative z-10 w-full h-40 max-w-4xl -mb-5 bg-isSystemDarkPrimary drop-shadow-sm">
        <Display image={metaContent.banner} />
      </div>

      <Render props={content} params={params} />
    </main>
  );
};

export default Sail;

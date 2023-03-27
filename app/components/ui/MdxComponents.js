import Link from "next/link";
import Image from "next/image";
import { CopyCodeButton } from "./CopyCodeButton";

export const getMDXComponents = ({ params }) => {
  return {
    a: (props) => {
      const Href = props.href;

      if (Href.startsWith(".")) {
        return (
          <Link
            className="inline-block transition duration-300 ease-in-out border-b-2 border-transparent cursor-pointer text-isGreenDark hover:border-isGreenDarkEmphasis"
            href={`/sea/${params.ship}/${Href.slice(2, Href.length - 3)}`}
          >
            {props.children}
          </Link>
        );
      } else if (Href.startsWith("#")) {
        return (
          <div className="flex flex-row items-center cursor-pointer group">
            <div className="absolute left-0 -mt-[0.3rem] -ml-[1.7rem] font-sans font-black transition-all duration-300 ease-in-out opacity-0 text-isLabelDarkSecondary group-hover:opacity-100">
              #
            </div>
            <a target="_self" rel="noopener noreferrer" {...props} />
          </div>
        );
      } else {
        return (
          <a
            className="relative inline-block transition-all duration-300 ease-in-out border-b-2 border-transparent cursor-pointer text-isBlueDarkEmphasis hover:border-isBlueDarkEmphasis"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        );
      }
    },
    p: (props) => {
      return <p className="leading-relaxed" {...props} />;
    },
    h1: (props) => {
      return <></>;
    },
    h2: (props) => {
      return (
        <h3
          className="relative mt-3 text-xl transition-all duration-300 ease-in-out border-t-2 font-700 hover:text-isLabelDarkPrimary border-isSeparatorDarkTransparent pt-9 text-isSystemLightTertiary sm:text-2xl"
          {...props}
        />
      );
    },
    h3: (props) => {
      return (
        <h4
          className="text-xl font-medium text-isLabelDarkPrimary"
          {...props}
        />
      );
    },
    h4: (props) => {
      return (
        <h5
          className="text-lg font-medium text-isLabelDarkPrimary"
          {...props}
        />
      );
    },
    hr: (props) => {
      return (
        <hr
          className="relative border-t-2 border-isSeparatorDark pt-9 sm:pt-10"
          {...props}
        />
      );
    },
    em: (props) => {
      return <span className="italic " {...props} />;
    },
    strong: (props) => {
      return <strong className="font-700" {...props} />;
    },
    blockquote: (props) => {
      return (
        <blockquote
          className="shadow-sm border-l-[6px] border-isBlueDark hover:border-isGreenDark pl-4 bg-isSystemDarkTertiary hover:bg-isWhite hover:bg-opacity-10
					transition-all duration-300 ease-in-out py-2 rounded-r-xl italic xl:!col-start-2 xl:!col-end-3 pr-3"
          {...props}
        />
      );
    },
    del: (props) => {
      return (
        <del className="line-through text-isLabelDarkSecondary" {...props} />
      );
    },
    li: (props) => {
      return <li className=" sm:ml-2" {...props} />;
    },
    ul: (props) => {
      return (
        <div
          className=" space-y-3 md:space-y-1 [li>&]:mt-3 [&>li]:relative [&>li]:pl-0 before:[&>li]:absolute before:[&>li]:left-1 before:[&>li]:top-3 before:[&>li]:h-1.5 before:[&>li]:w-1.5 before:[&>li]:rounded-full before:[&>li]:bg-transparent"
          {...props}
        />
      );
    },
    ol: (props) => {
      return <div className="pl-10 space-y-3 list-decimal " {...props} />;
    },
    img: (props) => {
      return (
        <img
          {...props}
          className="object-cover rounded-md md:rounded-lg lg:rounded-xl"
        />
      );
    },
    code: (props) => {
      return (
        <code
          className="leading-tight shadow-sm text-[0.85rem] border border-isFillLightPrimary inline-block bg-isSystemDarkTertiary px-2 rounded-lg text-isSystemLightTertiary hover:bg-isSystemDarkSecondary hover:text-isSystemLightPrimary transition-all duration-300 ease-in-out"
          {...props}
        />
      );
    },
    pre: (props) => {
      let code = ``;

      for (let i = 0; i < props.children.props.children.length; i++) {
        if (typeof props.children.props.children[i] === "string") {
          code += props.children.props.children[i];
        } else {
          if (
            typeof props.children.props.children[i].props.children === "string"
          ) {
            code += props.children.props.children[i].props.children;
          } else if (
            props.children.props.children[i].props.children.length === undefined
          ) {
            code +=
              props.children.props.children[i].props.children.props.children;
          } else {
            for (
              let j = 0;
              j < props.children.props.children[i].props.children.length;
              j++
            ) {
              if (
                typeof props.children.props.children[i].props.children[j] ===
                "string"
              ) {
                code += props.children.props.children[i].props.children[j];
              } else {
                code +=
                  props.children.props.children[i].props.children[j].props
                    .children;
              }
            }
          }
        }
      }

      return (
        <>
          <div className="absolute top-0 right-0 mt-[0.15rem] mr-1 drop-shadow-sm">
            <CopyCodeButton code={code} />
          </div>
          <pre
            className="py-2 overflow-x-auto font-mono text-xs leading-6 shadow-sm bg-isSystemDarkSecondary sm:text-sm"
            {...props}
          />
        </>
      );
    },
  };
};

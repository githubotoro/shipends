import Link from "next/link";
import { cx } from "class-variance-authority";
import { BackCircle, Twitter, Github } from "@/app/components/icons";

const buttonClasses =
  "shadow-sm hover:bg-isSystemLightPrimary transition-all duration-300 ease-in-out flex flex-row items-center space-x-1 text-xs font-500 tracking-tight text-isSystemDarkTertiary md:text-lg bg-isSystemLightTertiary px-[0.4rem] py-[0.2rem] rounded-md";
const iconClasses = "h-3 w-3 md:w-4 md:h-4 fill-isSystemDarkTertiary";

export const Tweet = ({ content }) => {
  return (
    <a
      href={`https://twitter.com/intent/tweet?text=${content}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className={cx(buttonClasses)}>
        <div className="leading-none">tweet</div>
        <Twitter classes={cx(iconClasses)} />
      </button>
    </a>
  );
};

export const Back = ({ href }) => {
  return (
    <Link href={href} scroll={true}>
      <button className={cx(buttonClasses)}>
        <BackCircle classes={cx(iconClasses)} />
        <div className="leading-none">back</div>
      </button>
    </Link>
  );
};

export const Edit = ({ href }) => {
  return (
    <a
      href={href}
      className="flex flex-row items-center space-x-1 group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="leading-none transition-all duration-300 ease-in-out text-isSystemLightTertiary group-hover:text-isSystemLightPrimary">
        edit
      </div>
      <Github classes="h-6 w-6 p-[0.15rem] fill-isSystemLightTertiary group-hover:fill-isSystemLightPrimary transition-all duration-300 ease-in-out" />
    </a>
  );
};

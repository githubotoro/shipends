import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "./MDXComponents";

const Content = ({ frontmatter, source }) => {
	return (
		<>
			<div
				className="w-full rounded-t-lg md:rounded-t-xl lg:rounded-t-2xl
					bg-isBlueDark font-extrabold text-isWhite text-center
					text-md md:text-lg lg:text-xl py-[6px]
					"
			>
				{frontmatter.title}&nbsp;&nbsp;
				<span
					className="rounded-lg font-extrabold bg-isWhite text-isBlueDark
									py-[2px] px-[4px] md:py-[3px] md:px-[6px] lg:py-[4px] lg:px-[8px]"
				>
					--takes {frontmatter.takes} min.
				</span>
			</div>
			<div className="flex flex-col items-start w-full text-xs place-content-center md:text-sm lg:text-md">
				<div
					className="flex w-full flex-col border-[1px] rounded-b-lg md:rounded-b-xl lg:rounded-b-2xl  
				             border-isGrayLightEmphasis4 border-t-[0px] bg-isWhite text-isGrayDarkEmphasis4 "
				>
					<div className="px-[14px] md:px-[20px] lg:px-[26px] text-xs md:text-sm lg:text-md break-words">
						<MDXRemote components={MDXComponents} {...source} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Content;

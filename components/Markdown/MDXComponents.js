// Definitions -- https://mdxjs.com/table-of-components/

import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const MDXComponents = {
	h1: (props) => {
		return <></>;
	},
	h2: (props) => {
		return (
			<h2
				className="mt-[8px] md:mt-[12px] lg:mt-[16px] mb-[8px] md:mb-[12px] lg:mb-[16px]
				border-b-[1px] border-isGrayLightEmphasis4 text-lg md:text-xl lg:text-2xl
				font-semibold"
				{...props}
			/>
		);
	},
	h3: (props) => {
		return (
			<h3
				className="flex flex-col items-center mt-[8px] md:mt-[12px] lg:mt-[16px] mb-[8px] md:mb-[12px] lg:mb-[16px]
				text-md md:text-lg lg:text-xl
				font-bold text-center"
				{...props}
			/>
		);
	},
	p: (props) => {
		return (
			<div className="mb-[8px] md:mb-[12px] lg:mb-[16px]" {...props} />
		);
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
					className="text-isBlueDarkEmphasis hover:cursor-pointer hover:border-b-[2px] hover:border-isBlueDarkEmphasis"
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
				<div className="flex flex-row group">
					<Link
						target="_self"
						rel="noopener noreferrer"
						passHref
						{...props}
					/>
					&nbsp;
					<div className="hidden font-bold text-isGrayDark2 group-hover:block">
						#
					</div>
				</div>
			);
		} else {
			return (
				<Link
					className="text-isBlueDarkEmphasis hover:cursor-pointer hover:border-b-[2px] hover:border-isBlueDarkEmphasis"
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
				className="mb-[8px] md:mb-[12px] lg:mb-[16px] rounded-r-lg border-l-[5px]
				border-isGrayLightEmphasis4 bg-isGrayLightEmphasis6 py-[4px] px-[6px] leading-tight
                 tracking-wide  md:border-l-[6px] lg:border-l-[8px] md:px-[10px] md:py-[8px]"
			>
				<div
					className="mt-[6px] md:mt-[8px] lg:mt-[12px] ml-[6px] mr-[6px] text-isGhost"
					{...props}
				/>
			</blockquote>
		);
	},
	li: (props) => {
		return <li className="mb-[4px] leading-tight md:mb-[6px]" {...props} />;
	},
	ul: (props) => {
		return (
			<div className="mb-[8px] md:mb-[12px] lg:mb-[16px] ml-[15px] list-disc leading-tight md:ml-[20px]">
				<div
					className="mb-[8px] md:mb-[12px] lg:mb-[16px]"
					{...props}
				/>
			</div>
		);
	},
	ol: (props) => {
		return (
			<div className="mb-[8px] md:mb-[12px] lg:mb-[16px] ml-[15px] list-decimal leading-tight md:ml-[20px]">
				<div
					className="mb-[8px] md:mb-[12px] lg:mb-[16px]"
					{...props}
				/>
			</div>
		);
	},
	img: (props) => {
		return (
			<Image
				{...props}
				alt="image"
				className="rounded-md md:rounded-lg lg:rounded-xl"
			/>
		);
	},
	code: (props) => {
		return (
			<span
				className="inline-block align-middle
				 rounded-md bg-isGrayLightEmphasis5 font-mono text-isGrayDarkEmphasis4
				 py-[0.5px] px-[4px] md:py-[1px] md:px-[5px] lg:[1.5px] lg:px-[6px] font-medium
				 text-2xs md:text-xs lg:text-sm"
				{...props}
			/>
		);
	},
	pre: (props) => {
		return (
			<pre
				className="mb-[8px] md:mb-[12px] lg:mb-[16px] md:py-[8px] md:px-[16px]
			 overflow-x-auto rounded-md md:rounded-lg lg:rounded-xl bg-isGrayLightEmphasis6 py-[6px] px-[12px]
			 text-2xs md:text-xs lg:text-sm"
			>
				<code className="font-mono" {...props} />
			</pre>
		);
	},
};

export default MDXComponents;

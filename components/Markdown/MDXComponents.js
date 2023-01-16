// Definitions -- https://mdxjs.com/table-of-components/
import Link from "next/link";

const MDXComponents = {
	h1: (props) => {
		return (
			<h1
				className="pb-1 md:pb-3 mt-1 mb-3 border-b-[1px] border-borderMuted
	            text-2xl md:text-3xl font-bold"
				{...props}
			/>
		);
	},
	h2: (props) => {
		return (
			<h2
				className="pb-1 mb-3 border-b-[1px] border-borderMuted
	            text-xl md:text-2xl font-semibold"
				{...props}
			/>
		);
	},
	h3: (props) => {
		return (
			<h3
				className="mb-3
                text-lg md:text-xl font-bold"
				{...props}
			/>
		);
	},
	h4: (props) => {
		return (
			<h4
				className="mb-3
                text-md md:text-lg font-bold"
				{...props}
			/>
		);
	},
	h5: (props) => {
		return (
			<h5
				className="mb-3
                text-sm md:text-md font-bold"
				{...props}
			/>
		);
	},
	p: (props) => {
		return <p className="mb-3 text-md" {...props} />;
	},
	em: (props) => {
		return <span className="italic" {...props} />;
	},
	strong: (props) => {
		return <span className="font-semibold" {...props} />;
	},
	a: (props) => {
		if (props.href.charAt(0) === "#") {
			return (
				<Link
					target="_self"
					rel="noopener noreferrer"
					passHref
					{...props}
				/>
			);
		} else {
			return (
				<Link
					className="text-accentEmphasis hover:border-b hover:border-accentEmphasis hover:cursor-pointer"
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
			<blockquote className="mb-3 border-l-4 border-borderDefault tracking-wide bg-canvasInset rounded-r-lg py-2">
				<p className="mt-2 ml-3 text-fgMuted mr-3" {...props} />
			</blockquote>
		);
	},
	li: (props) => {
		return <li className="mb-2 ml-5" {...props} />;
	},
	ul: (props) => {
		return (
			<div className="mb-3 ml-3 list-disc">
				<div className="mb-3" {...props} />
			</div>
		);
	},
	ol: (props) => {
		return (
			<div className="mb-3 ml-3 list-decimal">
				<div className="mb-3" {...props} />
			</div>
		);
	},
	img: (props) => {
		return <img {...props} className="rounded-lg" />;
	},
	code: (props) => {
		return (
			<span
				className="bg-neutralMuted text-fgMuted font-mono py-1 px-2 rounded-md"
				{...props}
			/>
		);
	},
	pre: (props) => {
		return (
			<pre className="mb-3 bg-canvasInset py-2 px-4 rounded-md">
				<code className="font-mono" {...props} />
			</pre>
		);
	},
};

export default MDXComponents;

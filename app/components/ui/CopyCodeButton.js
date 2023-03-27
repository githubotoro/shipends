"use client";

import { useState, useEffect } from "react";
import { cx } from "class-variance-authority";
import { Tailwind } from "@/app/components/utilities";
import { Copy, Check } from "@/app/components/icons";

export const CopyCodeButton = ({ code }) => {
	const [isCopied, setIsCopied] = useState(false);

	const iconButton = new Tailwind({
		classes:
			"p-[0.25rem] drop-shadow-sm rounded-lg cursor-pointer h-6 bg-transparent backdrop-blur-sm transition-all duration-300 ease-in-out",
	});

	useEffect(() => {
		if (isCopied) {
			setTimeout(() => {
				setIsCopied(false);
			}, "2000");
		}
	}, [isCopied]);

	return (
		<div
			onClick={async () => {
				await navigator.clipboard.writeText(code);
				setIsCopied(true);
			}}
			className={cx(
				"flex flex-col transition-all duration-300 ease-in-out",
				isCopied
					? "rotate-[-360deg] fill-isGreenDark hover:fill-isGreenDarkEmphasis"
					: "fill-isSystemLightTertiary hover:fill-isSystemLightPrimary"
			)}
		>
			{isCopied ? <Check classes={iconButton.classes} /> : <Copy classes={iconButton.classes} />}
		</div>
	);
};

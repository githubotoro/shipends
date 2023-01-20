const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	variants: {
		extend: {
			display: ["group-hover"],
		},
	},
	theme: {
		extend: {
			fontFamily: {
				// Roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
				RobotoFlex: ["Roboto Flex", ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				"2xs": "10px",
				xs: "12px",
				sm: "14px",
				md: "16px",
				lg: "18px",
				xl: "20px",
				"2xl": "24px",
				"3xl": "28px",
				"4xl": "32px",
				"5xl": "36px",
				"6xl": "40px",
				"7xl": "48px",
				"8xl": "56px",
				"9xl": "64px",
				"10xl": "72px",
				"11xl": "80px",
				"12xl": "96px",
			},
			fontWeight: {
				ultralight: "100",
				extralight: "200",
				light: "300",
				normal: "400",
				medium: "500",
				semibold: "600",
				bold: "700",
				extrabold: "800",
				black: "900",
			},
			letterSpacing: {
				tighest: "-0.08em",
				tighter: "-0.04em",
				tight: "-0.02em",
				normal: "0",
				wide: "0.02em",
				wider: "0.04em",
				widest: "0.08em",
			},
			lineHeight: {
				1: "1",
				2: "1.1",
				3: "1.2",
				4: "1.3",
				5: "1.4",
				6: "1.5",
				7: "1.6",
				8: "1.7",
				9: "1.8",
				10: "1.9",
				11: "2",
				12: "2.1",
				13: "2.2",
				14: "2.3",
				15: "2.4",
				16: "2.5",
				none: "1",
				tighest: "1.125",
				tighter: "1.25",
				tight: "1.375",
				normal: "1.5",
				loose: "1.625",
				looser: "1.75",
				loosest: "1.875",
			},
			colors: {
				// google

				gPale: "#E7E6DD",
				gBlack: "#1A1A1A",
				gNight: "#333333",
				gGhost: "#4D4D4D",
				gGravel: "#666666",
				gSilver: "#808080",
				gGrey: "#999999",
				gPlatinum: "#B3B3B3",
				gCotton: "#CCCCCC",
				gWater: "#E6E6E6",
				gWhite: "#F2F2F2",

				// google

				mercury: "#E9E9E9",

				black: "#000000",
				mirage: "#1A1A1A",
				zeus: "#202124",
				dune: "#333333",
				gravel: "#4D4D4D",
				flint: "#666666",
				hurricane: "#808080",
				dusty: "#999999",
				silk: "#B3B3B3",
				ghost: "#CCCCCC",
				silver: "#DADADA",
				platinum: "#E6E6E6",
				linen: "#E8E8E8",
				water: "#F2F2F2",

				davy: "#555555",
				concord: "#777777",
				grey: "#999999",
				amour: "#EEEEEE",
				bianca: "#FAFAFA",
				white: "#FFFFFF",
				golden: "#FFAA00",
				pumpkin: "#FD7702",
				folly: "#FF0066",
				ruddy: "#FE0222",
				magenta: "#FF00EE",
				violet: "#9900FF",
				indigo: "#6600FF",
				ultramarine: "#1300FF",
				azure: "#0099FF",
				aqua: "#00CCFF",
				cyan: "#22DDDD",
				gainsboro: "#DADCE0",
				shuttle: "#5F6368",

				// Framer

				// Black to White
				isBlack: "rgb(0, 0, 0)",
				isZeus: "rgb(34, 34, 34)",
				isGhost: "rgb(85, 85, 85)",
				isGrey: "rgb(119, 119, 119)",
				isSilver: "rgb(153, 153, 153)",
				isBianca: "rgb(238, 238, 238)",
				isLight: "rgb(250, 250, 250)",
				isWhite: "rgb(255, 255, 255)",

				isZeusSubtle: "rgba(34, 34, 34, 0.1)",

				isGreyMuted: "rgba(119, 119, 119, 0.3)",
				isGreySubtle: "rgba(119, 119, 119, 0.1)",

				isSilverSubtle: "rgba(153, 153, 153, 0.1)",

				isOcur: "rgb(255, 170, 0)",
				isGolden: "rgb(255, 187, 0)",
				isOrange: "rgb(253, 119, 2)",
				isPink: "rgb(255, 0, 238)",
				isFolly: "rgb(255, 0, 102)",
				isRed: "rgb(254, 2, 34)",

				isPurple: "rgb(153, 0, 255)",
				isPurpleSubtle: "rgba(153, 0, 255, 0.1)",

				isViolet: "rgb(102, 0, 255)",
				isVioletSubtle: "rgba(102, 0, 255, 0.1)",

				isBlue: "rgb(19, 0, 255)",
				isBlueLight: "rgba(19, 0, 255, 0.8)",

				isBlueSubtle: "rgba(19, 0, 255, 0.1)",

				isAzure: "rgb(0, 136, 255)",
				isAzureSubtle: "rgba(0, 136, 255, 0.1)",

				isWater: "rgb(0, 204, 255)",
				isWaterSubtle: "rgba(0, 204, 255, 0.1)",

				isCyan: "rgb(34, 221, 221)",

				isLink: "#0969da",
				isLinkMuted: "rgba(84,174,255,0.4)",
				isLinkSubtle: "#ddf4ff",

				// Github
				fgDefault: "#24292f",
				fgMuted: "#57606a",
				fgSubtle: "#6e7781",
				fgOnEmphasis: "#ffffff",

				borderDefault: "#d0d7de",
				borderMuted: "hsla(210,18%,87%,1)",
				borderSubtle: "rgba(27,31,36,0.15)",

				bgDefault: "#24292f",
				bgInset: "#f6f8fa",
				bgSubtle: "#ffffff",

				canvasDefault: "#ffffff",
				canvasInset: "#f6f8fa",

				neutralEmphasisPlus: "#24292f",
				neutralEmphasis: "#6e7781",
				neutralMuted: "rgba(175,184,193,0.2)",
				neutralSubtle: "rgba(234,238,242,0.5)",

				accentEmphasis: "#0969da",
				accentMuted: "rgba(84,174,255,0.4)",
				accentSubtle: "#ddf4ff",

				openEmphasis: "#2da44e",
				openMuted: "rgba(74,194,107,0.4)",
				openSubtle: "#dafbe1",

				doneEmphasis: "#8250df",
				doneMuted: "rgba(194,151,255,0.4)",
				doneSubtle: "#fbefff",

				monokai: "#272822",

				// monokai
				monoBlack: "#272822",
				monoZeus: "#34352f",
				monoPale: "#414339",
				monoCoffee: "#75715e",
				monoGrey: "#b2b3ad",
				monoLight: "#f8f8f2",
				monoCyan: "#66d9ef",
				monoBlue: "#179fff",
				monoPink: "#f92672",
				monoPurple: "#da70d6",
				monoViolet: "#9a74de",
				monoGreen: "#a6e22e",
				monoYellow: "#ffd700",
				monoOcur: "#e6db74",
				monoOrange: "#fd8921",
				monoRed: "#f14c4c",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};

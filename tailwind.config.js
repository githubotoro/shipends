const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				Roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
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

				// Github
				fgDefault: "#24292f",
				fgMuted: "#57606a",
				fgSubtle: "#6e7781",
				fgEmphasis: "#ffffff",

				borderDefault: "#d0d7de",
				borderMuted: "hsla(210,18%,87%,1)",
				borderSubtle: "rgba(27,31,36,0.15)",

				canvasDefault: "#ffffff",
				canvasInset: "#f6f8fa",

				accentEmphasis: "#0969da",
				accentMuted: "rgba(84,174,255,0.4)",
				accentSubtle: "#ddf4ff",

				neutralEmphasisPlus: "#24292f",
				neutralEmphasis: "#6e7781",
				neutralMuted: "rgba(175,184,193,0.2)",
				neutralSubtle: "rgba(234,238,242,0.5)",

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

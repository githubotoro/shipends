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
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};

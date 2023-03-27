/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./ships/**/*.{js,ts,jsx,tsx,json,md,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-robotoSans)"],
        mono: ["var(--font-robotoMono)"],
      },
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: ({ theme }) => ({
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      }),
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": {
              content: "none",
            },
            "blockquote p:first-of-type::after": {
              content: "none",
            },
          },
        },
      },
      colors: {
        isBlack: "rgb(0, 0, 0)",
        isWhite: "rgb(255, 255, 255)",

        isRedDark: "rgb(255, 69, 48)",
        isOrangeDark: "rgb(255, 159, 10)",
        isYellowDark: "rgb(255, 214, 10)",
        isGreenDark: "rgb(48, 209, 88)",
        isMintDark: "rgb(99, 230, 226)",
        isTealDark: "rgb(64, 200, 224)",
        isCyanDark: "rgb(100, 210, 255)",
        isBlueDark: "rgb(10, 132, 255)",
        isIndgioDark: "rgb(94, 92, 230)",
        isPurpleDark: "rgb(191, 90, 242)",
        isPinkDark: "rgb(255, 55, 95)",
        isBrownDark: "rgb(172, 142, 104)",

        isRedDarkEmphasis: "rgb(215, 105, 97)",
        isOrangeDarkEmphasis: "rgb(255, 179, 64)",
        isYellowDarkEmphasis: "rgb(255, 212, 38)",
        isGreenDarkEmphasis: "rgb(48, 219, 91)",
        isMintDarkEmphasis: "rgb(102, 212, 207)",
        isTealDarkEmphasis: "rgb(93, 230, 255)",
        isCyanDarkEmphasis: "rgb(112, 215, 255)",
        isBlueDarkEmphasis: "rgb(64, 156, 255)",
        isIndgioDarkEmphasis: "rgb(125, 122, 255)",
        isPurpleDarkEmphasis: "rgb(218, 143, 255)",
        isPinkDarkEmphasis: "rgb(255, 100, 130)",
        isBrownDarkEmphasis: "rgb(181, 148, 105)",

        isGrayDark: "rgb(142, 142, 147)",
        isGrayDark2: "rgb(99, 99, 102)",
        isGrayDark3: "rgb(72, 72, 74)",
        isGrayDark4: "rgb(58, 58, 60)",
        isGrayDark5: "rgb(44, 44, 46)",
        isGrayDark6: "rgb(28, 28, 30)",

        isGrayDarkEmphasis: "rgb(174, 174, 178)",
        isGrayDarkEmphasis2: "rgb(124, 124, 128)",
        isGrayDarkEmphasis3: "rgb(84, 84, 86)",
        isGrayDarkEmphasis4: "rgb(68, 68, 70)",
        isGrayDarkEmphasis5: "rgb(54, 54, 56)",
        isGrayDarkEmphasis6: "rgb(36, 36, 38)",

        isBaseDarkPrimary: "rgba(0, 0, 0, 1)",
        isBaseDarkSecondary: "rgba(28, 28, 30, 1)",
        isBaseDarkTertiary: "rgba(44, 44, 46, 1)",

        isSystemDarkPrimary: "rgba(28, 28, 30, 1)",
        isSystemDarkSecondary: "rgba(44, 44, 46, 1)",
        isSystemDarkTertiary: "rgba(58, 58, 60, 1)",

        isFillDarkPrimary: "rgba(120, 120, 128, 0.36)",
        isFillDarkSecondary: "rgba(120, 120, 128, 0.32)",
        isFillDarkTertiary: "rgba(118, 118, 128, 0.24)",
        isFillDarkQuaternary: "rgba(116, 116, 128, 0.18)",

        isLabelDarkPrimary: "rgba(255, 255, 255, 1)",
        isLabelDarkSecondary: "rgba(235, 235, 245, 0.6)",
        isLabelDarkTertiary: "rgba(235, 235, 245, 0.3)",
        isLabelDarkQuaternary: "rgba(235, 235, 245, 0.16)",

        isSeparatorDark: "rgba(56, 56, 58, 1)",
        isSeparatorDarkTransparent: "rgba(84, 84, 88, 0.6)",

        isRedLight: "rgb(255, 59, 48)",
        isOrangeLight: "rgb(255, 149, 0)",
        isYellowLight: "rgb(255, 204, 0)",
        isGreenLight: "rgb(52, 199, 89)",
        isMintLight: "rgb(0, 199, 190)",
        isTealLight: "rgb(48, 176, 199)",
        isCyanLight: "rgb(50, 173, 230)",
        isBlueLight: "rgb(0, 122, 255)",
        isIndgioLight: "rgb(88, 86, 214)",
        isPurpleLight: "rgb(175, 82, 222)",
        isPinkLight: "rgb(255, 45, 85)",
        isBrownLight: "rgb(162, 132, 94)",

        isRedLightEmphasis: "rgb(215, 0, 21)",
        isOrangeLightEmphasis: "rgb(201, 52, 0)",
        isYellowLightEmphasis: "rgb(178, 138, 61)",
        isGreenLightEmphasis: "rgb(36, 138, 61)",
        isMintLightEmphasis: "rgb(12, 129, 123)",
        isTealLightEmphasis: "rgb(0, 130, 153)",
        isCyanLightEmphasis: "rgb(0, 113, 164)",
        isBlueLightEmphasis: "rgb(0, 64, 221)",
        isIndgioLightEmphasis: "rgb(54, 54, 163)",
        isPurpleLightEmphasis: "rgb(137, 68, 171)",
        isPinkLightEmphasis: "rgb(211, 15, 69)",
        isBrownLightEmphasis: "rgb(127, 101, 69)",

        isGrayLight: "rgb(142, 142, 147)",
        isGrayLight2: "rgb(174, 174, 178)",
        isGrayLight3: "rgb(199, 199, 204)",
        isGrayLight4: "rgb(209, 209, 214)",
        isGrayLight5: "rgb(229, 229, 234)",
        isGrayLight6: "rgb(242, 242, 247)",

        isGrayLightEmphasis: "rgb(108, 108, 112)",
        isGrayLightEmphasis2: "rgb(142, 142, 147)",
        isGrayLightEmphasis3: "rgb(174, 174, 178)",
        isGrayLightEmphasis4: "rgb(188, 188, 192)",
        isGrayLightEmphasis5: "rgb(216, 216, 220)",
        isGrayLightEmphasis6: "rgb(235, 235, 240)",

        isBaseLightPrimary: "rgba(0, 0, 0, 1)",
        isBaseLightSecondary: "rgba(28, 28, 30, 1)",
        isBaseLightTertiary: "rgba(44, 44, 46, 1)",

        isSystemLightPrimary: "rgba(255, 255, 255, 1)",
        isSystemLightSecondary: "rgba(242, 242, 247, 1)",
        isSystemLightTertiary: "rgba(209, 209, 214, 1)",

        isFillLightPrimary: "rgba(120, 120, 128, 0.2)",
        isFillLightSecondary: "rgba(120, 120, 128, 0.16)",
        isFillLightTertiary: "rgba(118, 118, 128, 0.12)",
        isFillLightQuaternary: "rgba(116, 116, 128, 0.08)",

        isLabelLightPrimary: "rgba(0, 0, 0, 1)",
        isLabelLightSecondary: "rgba(60, 60, 67, 0.6)",
        isLabelLightTertiary: "rgba(60, 60, 67, 0.3)",
        isLabelLightQuaternary: "rgba(60, 60, 67, 0.18)",

        isSeparatorLight: "rgba(198, 198, 200, 1)",
        isSeparatorLightTransparent: "rgba(60, 60, 67, 0.29)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};

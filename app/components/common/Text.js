import React from "react";
import { cx, cva } from "class-variance-authority";

export const Text = ({ content, tag, props }) => {
  const classes = cva("", {
    variants: {
      font: {
        sans: "font-sans",
        mono: "font-mono",
      },
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
        "6xl": "text-6xl",
        "7xl": "text-7xl",
        "8xl": "text-8xl",
        "9xl": "text-9xl",
        none: "",
      },
      weight: {
        100: "font-100",
        200: "font-200",
        300: "font-300",
        400: "font-400",
        500: "font-500",
        600: "font-600",
        700: "font-700",
        800: "font-800",
        900: "font-900",
        none: "",
      },
      reset: {
        both: "leading-none tracking-none",
        leading: "leading-none",
        tracking: "tracking-none",
        none: "",
      },
      animate: {
        default: "transition-all duration-300 ease-in-out",
        none: "",
      },
      color: {
        darkPrimary: "text-isSystemDarkPrimary",
        darkSecondary: "text-isSystemDarkSecondary",
        darkTertiary: "text-isSystemDarkTertiary",
        lightPrimary: "text-isSystemLightPrimary",
        lightSecondary: "text-isSystemLightSecondary",
        lightTertiary: "text-isSystemLightTertiary",
        green: "text-isGreenLight",
        mint: "text-isMintLight",
        teal: "text-isTealLight ",
        cyan: "text-isCyanLight ",
        blue: "text-isBlueLight ",
        indigo: "text-isIndgioLight",
        purple: "text-isPurpleLight rk",
        pink: "text-isPinkLight ",
        red: "text-isRedLight",
        orange: "text-isOrangeLight",
        yellow: "text-isYellowLight",
        none: "",
      },
    },
    defaultVariants: {
      font: "sans",
      size: "md",
      weight: 400,
      reset: "none",
      animate: "none",
      color: "darkSecondary",
    },
  });

  return React.createElement(
    tag,
    { className: cx(classes({ ...props })) },
    content
  );
};

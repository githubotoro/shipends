"use client";

import Image from "next/image";
import { cx, cva } from "class-variance-authority";
import { useEffect, useState } from "react";

export const Display = ({
  classes,
  image,
  rounded = "rounded-2xl",
  loadingBackground = "bg-isSystemDarkPrimary",
  pulseColor = "bg-isSystemDarkTertiary",
}) => {
  const animate = "transition-all duration-200 ease-in-out";
  const full = "w-full h-full";
  const [imageLoading, setImageLoading] = useState(true);
  const [hide, setHide] = useState("");

  useEffect(() => {
    if (imageLoading === false) {
      setHide("hidden");
    }
  }, [imageLoading]);

  return (
    <>
      <div
        className={cx(
          "absolute z-10",
          imageLoading ? "opacity-100" : "opacity-0",
          loadingBackground,
          rounded,
          animate,
          full,
          hide
        )}
      />
      <div
        className={cx(
          "absolute z-20",
          imageLoading ? cx("animate-pulse", pulseColor) : "bg-transparent",
          rounded,
          animate,
          full,
          hide
        )}
      />

      <Image
        src={image.src}
        alt={image.alt}
        fill={true}
        className={cx(
          "relative object-cover",
          imageLoading ? "opacity-0" : "opacity-100",
          rounded,
          classes,
          animate
        )}
        onLoadingComplete={() => {
          setImageLoading(false);
        }}
      />
    </>
  );
};

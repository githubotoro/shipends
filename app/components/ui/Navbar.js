"use client";

import Link from "next/link";
import { cx } from "class-variance-authority";
import { usePathname } from "next/navigation";
import { Tailwind } from "@/app/components/utilities";
import { Home, Map, Rocket } from "@/app/components/icons";
import { useEffect } from "react";

export const Navbar = () => {
  const pathname = usePathname();

  const iconButton = new Tailwind({
    classes:
      "shadow-sm drop-shadow-sm transition duration-300 ease-in-out cursor-pointer h-9 fill-isBlueLight",
  });

  const routes = [
    {
      name: "home",
      icon: Home,
      isActive: () => {
        if (pathname === "/") {
          return true;
        } else {
          return false;
        }
      },
      pathname: "/",
    },
    {
      name: "sea",
      icon: Map,
      isActive: () => {
        if (pathname.length >= 4 && pathname.slice(0, 4) === "/sea") {
          return true;
        } else {
          return false;
        }
      },
      pathname: "/sea",
    },
    {
      name: "ships",
      icon: Rocket,
      isActive: () => {
        if (pathname.length >= 6 && pathname.slice(0, 6) === "/ships") {
          return true;
        } else {
          return false;
        }
      },
      pathname: "/ships",
    },
  ];

  return (
    <div className="sticky top-0 z-50 flex flex-col items-center w-full place-content-center ">
      <div className="flex flex-col items-center w-full p-3">
        <div className="grid justify-center w-full max-w-4xl grid-cols-3 py-2 shadow-sm h-fit rounded-xl bg-gradient-to-b from-isWhite/20 to-isWhite/10 backdrop-blur-md">
          {routes.map((route, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center w-full place-content-center"
              >
                <Link href={route.pathname}>
                  <route.icon
                    classes={cx(
                      iconButton.classes,
                      route.isActive()
                        ? "fill-isSystemLightPrimary"
                        : "fill-isGrayLight hover:fill-isSystemLightPrimary"
                    )}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

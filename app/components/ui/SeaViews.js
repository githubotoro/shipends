"use client";

import { cx } from "class-variance-authority";
import { useState, useEffect } from "react";
import { Eye } from "../icons";

export const SeaViews = ({ parent, type }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [currOpacity, setCurrOpacity] = useState("bg-transparent");
  const [views, setViews] = useState(0);

  useEffect(() => {
    const makeViewsRequest = async () => {
      try {
        let res;

        if (type === "GET") {
          res = await fetch(`/api/v1/getSeaViews?parent=${parent}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
        }

        const data = await res.json();

        if (data.code === 201) {
          setViews(data.views);
        }

        setIsFetching(false);
      } catch (err) {
        setIsFetching(false);
      }
    };

    makeViewsRequest();
  }, []);

  useEffect(() => {
    if (isFetching === false && views !== 0) {
      setCurrOpacity("bg-isWhite");

      setTimeout(() => {
        setCurrOpacity("bg-transparent");
      }, 300);
    }
  }, [isFetching]);

  return (
    <>
      {views !== 0 ? (
        <>
          <Eye classes="h-5 w-5 fill-isSystemDarkTertiary" />
          <div
            className={cx(
              "font-mono font-800 tracking-none tabular-nums transition-all duration-1000 ease-in-out rounded-md px-1 py-[0.1rem] leading-none",
              currOpacity
            )}
          >
            {views}
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

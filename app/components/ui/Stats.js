"use client";

import { cx } from "class-variance-authority";
import { useState, useEffect } from "react";

export const Stats = ({ parent, id, type }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [currOpacity, setCurrOpacity] = useState("bg-transparent");
  const [views, setViews] = useState(0);

  useEffect(() => {
    const makeStatsRequest = async () => {
      try {
        let res;

        if (type === "GET") {
          res = await fetch(`/api/v1/getStats?parent=${parent}&id=${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
        } else if (type === "POST") {
          res = await fetch("/api/v1/postStats", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              parent: parent,
              id: id,
            }),
          });
        }

        const data = await res.json();

        if (data.code === 201) {
          setViews(data.stats.views);
        }

        setIsFetching(false);
      } catch (err) {
        console.log(err);
        setIsFetching(false);
      }
    };

    makeStatsRequest();
  }, []);

  useEffect(() => {
    if (isFetching === false && views !== 0) {
      setCurrOpacity("bg-isSystemLightPrimary/50");

      setTimeout(() => {
        setCurrOpacity("bg-transparent");
      }, 300);
    }
  }, [isFetching]);

  return (
    <>
      {views !== 0 ? (
        <>
          <div className="w-1 h-1 mx-1 rounded-full md:w-2 md:h-2 md:mx-2 bg-isSystemLightTertiary" />
          <div
            className={cx(
              "text-isSystemLightTertiary transition-all duration-1000 ease-in-out rounded-md px-1 py-[0.1rem] leading-none",
              currOpacity
            )}
          >
            {views} views
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

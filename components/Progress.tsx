"use client";

import styles from "@/styles/Progress.module.css";
import { useEffect, useState } from "react";

export default function Progress() {
  const [scroll, setScroll] = useState<number>(0);
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        setScroll(window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
      },
      false
    );
    console.log(scroll);
  });
  return (
    <div
      className={`${styles.progress} bg-sky-600`}
      style={{
        animationPlayState: "paused",
        animationDelay: `calc(${scroll} * -1s)`,
        animationIterationCount: 1,
        animationFillMode: "both",
      }}
    ></div>
  );
}

"use client";import React, { useEffect, useRef } from "react";

const FitText: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const resizeText = () => {
      const container = containerRef.current;
      const text = textRef.current;

      if (!container || !text) {
        return;
      }

      const containerWidth = container.offsetWidth;
      let min = 1;
      let max = 2500;

      while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        (text as HTMLSpanElement).style.fontSize = mid + "px";

        if ((text as HTMLSpanElement).offsetWidth <= containerWidth) {
          min = mid + 1;
        } else {
          max = mid - 1;
        }
      }

      (text as HTMLSpanElement).style.fontSize = max + "px";
    };

    resizeText();

    const handleResize = () => {
      resizeText();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="mx-auto lg:max-w-screen-2xl flex w-full items-center overflow-hidden bg-slate-950"
      ref={containerRef}
    >
      <span
        className="relative bottom-0 left-0 mx-auto whitespace-nowrap text-center font-bold uppercase text-slate-700"
        ref={textRef}
      >
        © VEDANT MUTE
      </span>
    </div>
  );
};

export default FitText;

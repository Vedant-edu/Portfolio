"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0 text-center"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };
  return (
    <>
    
    <div className={cn("w-640", className)}>
      <div className="mt-4 mx-1">
        <div className=" dark:text-white text-justify p-3 text-black text-sm lg:text-lg leading-snug">
          {renderWords()}
        </div>
      </div>
    </div></>
  );
};

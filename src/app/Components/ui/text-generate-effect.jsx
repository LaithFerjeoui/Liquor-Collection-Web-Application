"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/app/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  quote,
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
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
              className="opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("", className)}>
      <div className="mt-4">
        <div
          className={`${
            quote ? "font-italianno text-3xl text-center mb-2" : "font-playfair text-lg md:text-xl mt-6"
          } text-white max-w-3xl`}
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

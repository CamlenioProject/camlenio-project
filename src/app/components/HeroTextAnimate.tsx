"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

export interface HeroTextAnimateProps {
  words?: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
  animationDuration?: number;
  paddingLeft?: string;
  paddingRight?: string;
}

export function HeroTextAnimate({
  words = ["Fintech Custom Solutions", "Digital Transformation"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
  paddingLeft = "0.8rem",
  paddingRight = "0.8rem",
}: HeroTextAnimateProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Find longest word for consistent width
  const longestWord = useMemo(
    () => words.reduce((a, b) => (a.length > b.length ? a : b)),
    [words]
  );

  // Auto-change words
  useEffect(() => {
    const id = setInterval(
      () => setCurrentWordIndex((i) => (i + 1) % words.length),
      interval
    );
    return () => clearInterval(id);
  }, [words, interval]);

  // Calculate fixed width including padding
  const fixedWidth = useMemo(() => {
    if (!containerRef.current) return "auto";
    const span = document.createElement("span");
    const style = getComputedStyle(containerRef.current);
    Object.assign(span.style, {
      fontSize: style.fontSize,
      fontWeight: style.fontWeight,
      fontFamily: style.fontFamily,
      position: "absolute",
      visibility: "hidden",
    });
    span.innerText = longestWord;
    document.body.appendChild(span);
    const width = span.offsetWidth;
    document.body.removeChild(span);
    // Add manual padding
    const left = parseFloat(paddingLeft) || 0;
    const right = parseFloat(paddingRight) || 0;
    return width + left + right;
  }, [longestWord, paddingLeft, paddingRight]);

  return (
    <motion.div
      ref={containerRef}
      animate={{ width: fixedWidth }}
      transition={{ duration: 0.4 }}
      className={cn(
        "relative inline-block rounded-lg text-center font-bold text-gray-50 text-2xl md:text-3xl lg:text-4xl",
        "[background:linear-gradient(to_bottom,#f97316,#f97316)]",
        className
      )}
    >
      <motion.div
        key={words[currentWordIndex]}
        className={cn("inline-block", textClassName)}
        style={{ paddingLeft, paddingRight }}
      >
        {words[currentWordIndex].split("").map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              delay: i * 0.03,
              duration: animationDuration / 2000,
              ease: "easeOut",
            }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

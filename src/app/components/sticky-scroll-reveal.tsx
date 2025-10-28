"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../../../lib/utils";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export const StickyScrollGSAP = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    imageSrc?: string;
  }[];
  contentClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rightCardRef = useRef<HTMLDivElement | null>(null);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = containerRef.current.querySelectorAll(".scroll-section");

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveCard(index),
        onEnterBack: () => setActiveCard(index),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [content]);

  return (
    <div
      ref={containerRef}
      className="relative max-w-7xl mx-auto flex justify-center space-x-20 rounded-md p-10"
    >
      {/* Left text content */}
      <div className="flex flex-col items-start px-4 max-w-2xl">
        {content.map((item, index) => (
          <div key={index} className="scroll-section my-10">
            <h2
              className={cn(
                "text-2xl font-bold transition-opacity duration-500",
                activeCard === index
                  ? "opacity-100"
                  : "opacity-30 text-gray-900"
              )}
            >
              {item.title}
            </h2>
            <p
              className={cn(
                "mt-4 max-w-sm transition-opacity duration-500",
                activeCard === index
                  ? "opacity-100 text-gray-500"
                  : "opacity-30"
              )}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div
        ref={rightCardRef}
        className={cn(
          "sticky top-[20%] hidden lg:block h-[480px] w-[680px] overflow-hidden rounded-3xl shadow-lg",
          contentClassName
        )}
      >
        {content[activeCard]?.imageSrc && (
          <Image
            src={content[activeCard].imageSrc}
            alt={content[activeCard].title}
            width={600}
            height={500}
            className="w-full h-full object-fill rounded-md "
          />
        )}
      </div>
    </div>
  );
};

"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhatFintech() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const bgRef1 = useRef<HTMLDivElement>(null);
  const bgRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        headingRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
        .fromTo(
          descriptionRef.current,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          buttonsRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          imageRef.current,
          { scale: 1.2, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2 },
          "-=0.8"
        )
        .fromTo(
          [bgRef1.current, bgRef2.current],
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 0.2, duration: 1, stagger: 0.2 },
          "-=0.8"
        );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-gray-950"
    >
      <div className="relative flex flex-col lg:flex-row w-full min-h-screen">
        <div className="w-full lg:w-1/2 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 lg:py-0 flex items-center justify-center z-10">
          <div className="max-w-xl w-full">
            <h1
              ref={headingRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight opacity-0"
            >
              Transform Your
              <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Digital Vision
              </span>
            </h1>
            <p
              ref={descriptionRef}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed opacity-0"
            >
              Create stunning experiences that captivate your audience. We blend
              creativity with cutting-edge technology to bring your ideas to
              life.
            </p>
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0"
            >
              <button
                type="button"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Get Started
              </button>
              <button
                type="button"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div
          ref={imageRef}
          className="w-full lg:w-1/2 h-[50vh] sm:h-[60vh] lg:h-screen relative opacity-0 overflow-hidden"
        >
          <Image
            src="https://res.cloudinary.com/dxpbriwey/image/upload/v1761981351/muha-ajjan-xTHcNZAQzbM-unsplash_11zon_ehckfj.jpg"
            alt="Modern architecture at night"
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-32 lg:h-full lg:inset-y-0 lg:left-0 lg:w-32 bg-gradient-to-t lg:bg-gradient-to-r from-black to-transparent"></div>
        </div>
      </div>

      <div
        ref={bgRef1}
        className="hidden md:block absolute top-10 sm:top-20 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-0"
      ></div>
      <div
        ref={bgRef2}
        className="hidden md:block absolute bottom-10 sm:bottom-20 right-20 sm:right-40 w-48 h-48 sm:w-72 sm:h-72 bg-gray-500 rounded-full mix-blend-multiply filter blur-3xl opacity-0"
      ></div>
    </div>
  );
}

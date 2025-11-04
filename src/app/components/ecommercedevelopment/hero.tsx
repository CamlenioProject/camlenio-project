"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import { cn } from "../../../../lib/utils";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const taglineRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1.2 },
        delay: 0.3,
      });

      gsap.fromTo(
        ".bg-blob",
        { opacity: 0, scale: 0.85, y: 40 },
        {
          opacity: 0.4,
          scale: 1,
          y: 0,
          duration: 2.2,
          ease: "power2.out",
          stagger: 0.5,
        }
      );

      // Tagline fade
      tl.from(taglineRef.current, {
        opacity: 0,
        y: 20,
        filter: "blur(6px)",
      });

      // Title cinematic reveal
      tl.from(
        titleRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.95,
          filter: "blur(10px)",
          duration: 1.2,
        },
        "-=0.8"
      );

      // Subtitle smooth fade
      tl.from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 25,
          filter: "blur(6px)",
          duration: 1.1,
        },
        "-=0.9"
      );

      // Animate buttons container
      if (buttonsRef.current) {
        tl.from(
          buttonsRef.current,
          {
            opacity: 0,
            y: 25,
            scale: 0.95,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.9"
        );
      }

      // Image parallax float
      if (imageRef.current) {
        tl.from(
          imageRef.current,
          {
            opacity: 0,
            y: 50,
            scale: 1.05,
            rotateX: 8,
            transformOrigin: "center bottom",
            duration: 1.5,
            ease: "power2.out",
          },
          "-=1"
        );
      }

      // Background gentle floating motion
      gsap.to(".bg-blob", {
        x: "random(-25, 25)",
        y: "random(-35, 35)",
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 2,
          from: "random",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove overflow-hidden scroll-smooth"
    >
      {/* Background Grid */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:50px_50px]",
          "[background-image:linear-gradient(to_right,rgba(251,146,60,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(251,146,60,0.4)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,rgba(251,146,60,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(251,146,60,0.25)_1px,transparent_1px)]"
        )}
      />

      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dxpbriwey/image/upload/v1762160535/622_uhajfi.jpg')] bg-cover bg-center opacity-30" />

      {/* Radial Mask */}
      <div className="absolute inset-0 z-0 flex items-center justify-center bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black)]"></div>

      {/* Floating Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-blob absolute top-20 left-1/4 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-40" />
        <div className="bg-blob absolute bottom-20 right-1/4 w-72 h-72 bg-gray-200 rounded-full blur-3xl opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-3xl mx-auto">
        {/* Tagline */}
        <div
          ref={taglineRef}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <ShoppingBag className="text-orange-500" size={26} />
          <p className="text-sm font-medium tracking-wide text-orange-600 uppercase font-sans">
            E-Commerce Reinvented
          </p>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-gray-900 leading-tight mb-6 drop-shadow-[0_2px_3px_rgba(0,0,0,0.2)]"
        >
          Build, Scale & <span className="text-orange-500">Sell Smarter</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-base md:text-xl text-gray-800 leading-relaxed max-w-2xl mx-auto mb-10 font-sans"
        >
          Empower your brand with cutting-edge e-commerce solutions that drive
          sales, speed, and seamless customer experiences — all powered by
          Camlenio’s modern tech stack.
        </p>

        <div ref={buttonsRef} className="flex flex-wrap justify-center gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-[1.03]">
            Get Started <ArrowRight size={18} />
          </button>
          <button className="shadow-[inset_0_0_0_2px_#616467]  hover:bg-gray-900 hover:text-white px-8 py-3.5 rounded-full font-semibold text-gray-900 bg-transparent transition-all duration-200">
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
}

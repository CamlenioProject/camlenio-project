"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShieldCheck,
  Lock,
  Server,
  Headphones,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  title: string;
  points: string[];
  icon: React.ReactNode;
}

const SecureAePSSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const desc = descRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (!section || !heading || !desc || cards.length === 0) return;

    ScrollTrigger.normalizeScroll(true);
    ScrollTrigger.config({
      ignoreMobileResize: true,
    });

    // Create smooth timeline with power3.out easing
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 65%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        markers: false,
      },
    });

    // Animate heading from bottom
    tl.fromTo(
      heading,
      {
        y: 80,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    )
      // Animate description
      .fromTo(
        desc,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      )
      // Animate cards with stagger
      .fromTo(
        cards,
        {
          y: 100,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.25,
        },
        "-=0.6"
      );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const features: Feature[] = [
    {
      title: "End-to-End Security",
      points: [
        "Enterprise-grade data encryption",
        "Biometric authentication support",
        "AI-based fraud detection",
        "Regular compliance audits",
      ],
      icon: <ShieldCheck className="text-orange-500 w-full h-full" />,
    },
    {
      title: "Robust Infrastructure",
      points: [
        "Firewall and network protection",
        "Vulnerability management tools",
        "Uptime monitoring and alerts",
        "Secure server implementation",
      ],
      icon: <Server className="text-orange-500 w-full h-full" />,
    },
    {
      title: "Continuous Support & Maintenance",
      points: [
        "24/7 technical assistance",
        "One-to-one onboarding support",
        "Dedicated ticketing system",
        "Ongoing updates & enhancements",
      ],
      icon: <Headphones className="text-orange-500 w-full h-full" />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden"
    >
      {/* Diagonal gradient stripes background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-gray-800/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-700/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000,transparent)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading with badge */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4 sm:mb-6">
            <Lock className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-xs sm:text-sm font-semibold">
              ENTERPRISE SECURITY
            </span>
          </div>

          <h2
            ref={headingRef}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 opacity-0 leading-tight"
          >
            <span className="text-white">Completely </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Secure Platform
              </span>
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
            </span>
            <br />
            <span className="text-white">for Your AePS Business</span>
          </h2>

          <p
            ref={descRef}
            className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto opacity-0 leading-relaxed"
          >
            Camlenio ensures your AePS business is protected with
            next-generation security, reliable infrastructure, and ongoing
            expert support.
          </p>
        </div>

        {/* Cards Grid - Horizontal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group relative opacity-0"
            >
              {/* Card with side accent */}
              <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 sm:p-8 border border-gray-800 overflow-hidden transition-all duration-500 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10">
                {/* Left vertical accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

                {/* Floating icon badge */}
                <div className="relative mb-6 sm:mb-8">
                  <div className="inline-flex relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex justify-center items-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/5 border border-orange-500/20 p-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <div className="w-full h-full">{feature.icon}</div>
                    </div>
                    {/* Pulse ring on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-orange-500/20 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 blur-md"></div>
                  </div>
                </div>

                {/* Title with arrow */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-transparent rounded-full"></div>
                </div>

                {/* Points with animated checkmarks */}
                <ul className="space-y-3 sm:space-y-4">
                  {feature.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-400 text-sm sm:text-base group-hover:text-gray-300 transition-colors duration-300"
                    >
                      <div className="relative flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-5 h-5 text-orange-400" />
                        <div className="absolute inset-0 bg-orange-400 rounded-full opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
                      </div>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-orange-500/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Number badge */}
              <div className="absolute -top-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/50 group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecureAePSSection;

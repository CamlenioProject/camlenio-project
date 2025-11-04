"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Search,
  PenTool,
  Code,
  Bug,
  Rocket,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <Search className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Discovery & Strategy",
    description:
      "Understand your business goals and create a roadmap for success.",
  },
  {
    icon: <PenTool className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Design & Prototyping",
    description: "UI/UX wireframes & mockups tailored to your brand.",
  },
  {
    icon: <Code className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Development",
    description:
      "Scalable backend + optimized frontend built with best practices.",
  },
  {
    icon: <Bug className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Testing & QA",
    description: "Bug-free & secure launch with comprehensive testing.",
  },
  {
    icon: <Rocket className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Deployment & Support",
    description: "Continuous updates & growth with ongoing maintenance.",
  },
  {
    icon: <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8" />,
    title: "Optimization & Growth",
    description:
      "Data-driven improvements, performance tuning, and scaling for long-term success.",
  },
];

export default function OurProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);

        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const validSteps = stepsRef.current.filter(Boolean);

        // Set initial states
        gsap.set([titleRef.current, subtitleRef.current], {
          opacity: 0,
          y: 40,
        });
        gsap.set(validSteps, { opacity: 0, y: 40, scale: 0.8 });

        setIsLoaded(true);

        // Master timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });

        // Animate header
        tl.to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        })
          .to(
            subtitleRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
            },
            "-=0.5"
          )
          // Animate steps in wave pattern
          .to(
            validSteps,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.12,
              ease: "back.out(1.4)",
            },
            "-=0.3"
          );

        // Hover effects
        validSteps.forEach((step) => {
          if (!step) return;

          const icon = step.querySelector(".process-icon");
          const arrow = step.querySelector(".hover-arrow");
          const number = step.querySelector(".step-number");

          step.addEventListener("mouseenter", () => {
            gsap.to(step, {
              y: -10,
              scale: 1.03,
              boxShadow: "0 25px 50px -12px rgba(249, 115, 22, 0.3)",
              duration: 0.4,
              ease: "power2.out",
            });
            gsap.to(icon, {
              scale: 1.15,
              rotate: 10,
              duration: 0.4,
              ease: "back.out(1.7)",
            });
            gsap.to(arrow, {
              x: 5,
              opacity: 1,
              duration: 0.3,
            });
            gsap.to(number, {
              scale: 1.2,
              duration: 0.3,
            });
          });

          step.addEventListener("mouseleave", () => {
            gsap.to(step, {
              y: 0,
              scale: 1,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              duration: 0.4,
              ease: "power2.out",
            });
            gsap.to(icon, {
              scale: 1,
              rotate: 0,
              duration: 0.4,
              ease: "back.out(1.7)",
            });
            gsap.to(arrow, {
              x: 0,
              opacity: 0.6,
              duration: 0.3,
            });
            gsap.to(number, {
              scale: 1,
              duration: 0.3,
            });
          });
        });

        return () => {
          if (tl.scrollTrigger) {
            tl.scrollTrigger.kill();
          }
          tl.kill();
        };
      } catch (error) {
        console.error("Failed to load GSAP:", error);
        setIsLoaded(true);
      }
    };

    loadGSAP();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 overflow-hidden"
    >
      {/* Decorative Elements - Orange Theme */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-200/40 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-200/40 to-transparent rounded-full blur-3xl"></div>

      {/* Floating Dots Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-[15%] w-3 h-3 bg-orange-500 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-32 left-[20%] w-2 h-2 bg-orange-400 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-48 right-[25%] w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-5 px-5 py-2.5 bg-orange-100 rounded-full border border-orange-200">
            <Rocket className="w-4 h-4 text-orange-600" />
            <span className="text-orange-600 text-xs sm:text-sm font-bold tracking-wider uppercase">
              Our Workflow
            </span>
          </div>

          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            style={{ opacity: isLoaded ? undefined : 0 }}
          >
            How We Build Your{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Digital Success
              </span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-orange-200/50 -z-10"></span>
            </span>
          </h2>

          <p
            ref={subtitleRef}
            className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed font-sans"
            style={{ opacity: isLoaded ? undefined : 0 }}
          >
            A transparent, collaborative approach that transforms your vision
            into reality through five proven stages.
          </p>
        </div>

        {/* Process Steps - Zigzag Pattern */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Path - Desktop */}
          <svg
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.3 }}
          >
            <path
              d="M 200 100 Q 400 150 600 100 T 1000 100 Q 1200 150 1400 100"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="8 8"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fb923c" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>
            </defs>
          </svg>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  stepsRef.current[index] = el;
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group will-change-transform"
                style={{
                  opacity: isLoaded ? undefined : 0,
                  gridColumn:
                    index === steps.length - 1 && steps.length % 3 !== 0
                      ? "span 1"
                      : undefined,
                }}
              >
                {/* Card Container */}
                <div className="relative h-full bg-[#FEF3E6] rounded-3xl p-6 sm:p-7 shadow-xl border border-orange-100 overflow-hidden">
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Step Number Circle */}
                  <div className="step-number absolute -top-3 -left-3 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg z-10">
                    <span className="text-white font-bold text-lg sm:text-xl">
                      {index + 1}
                    </span>
                  </div>

                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="process-icon flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 mb-5 sm:mb-6 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg ml-auto mr-0">
                      {step.icon}
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight group-hover:text-orange-600 transition-colors duration-300">
                          {step.title}
                        </h3>
                        <ArrowRight className="hover-arrow w-5 h-5 text-orange-500 opacity-60 flex-shrink-0 mt-1" />
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-100/60 to-transparent rounded-tr-3xl"></div>

                  {/* Glow Effect */}
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-32 w-40 rounded-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></span>
                </div>

                {/* Connecting Line Indicator - Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <span className="font-semibold text-sm sm:text-base">
              Ready to Start Your Project?
            </span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}

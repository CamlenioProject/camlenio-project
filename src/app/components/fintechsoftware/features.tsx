"use client";
import React, { useEffect, useRef, forwardRef, useState } from "react";
import {
  Building2,
  Lightbulb,
  ScreenShare,
  Trophy,
  User,
  User2,
} from "lucide-react";

interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  position?: "left" | "right";
}

const leftFeatures: FeatureItem[] = [
  {
    icon: Building2,
    title: "Taught by Professionals",
    description:
      "Learn directly from top engineers and founders with real-world experience.",
    position: "left",
  },
  {
    icon: User2,
    title: "Coding Hostels",
    description:
      "Join virtual hostels to study, collaborate, and vibe with fellow learners.",
    position: "left",
  },
  {
    icon: Trophy,
    title: "Bounties",
    description:
      "Win rewards for solving challenges, contributing to projects, and helping peers.",
    position: "left",
  },
];

const rightFeatures: FeatureItem[] = [
  {
    icon: ScreenShare,
    title: "Revision Classes",
    description:
      "Stay sharp with weekly revision sessions and topic refreshers.",
    position: "right",
  },
  {
    icon: User,
    title: "Peer Code Reviews",
    description:
      "Improve faster with feedback from mentors and batchmate on your actual code.",
    position: "right",
  },
  {
    icon: Lightbulb,
    title: "Leet Lab",
    description:
      "Ace coding interviews with daily DSA problems, contests, and tracking.",
    position: "right",
  },
];

const FeatureCard = forwardRef<
  HTMLDivElement,
  { feature: FeatureItem; index: number }
>(({ feature, index }, ref) => {
  const Icon = feature.icon;

  return (
    <div
      ref={ref}
      className="relative rounded-2xl sm:rounded-3xl px-5 sm:px-6 pt-5 sm:pt-6 pb-6 sm:pb-7 bg-gradient-to-br from-orange-50 to-white border border-orange-200/50 shadow-lg will-change-transform group overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#FEF3E6]  group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl">
          <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
        </div>

        <h3 className="text-gray-900 mb-3 sm:mb-3.5 text-lg sm:text-xl md:text-2xl font-bold leading-tight group-hover:text-orange-600 transition-colors duration-300">
          {feature.title}
        </h3>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          {feature.description}
        </p>
      </div>

      <span className="absolute bottom-0 left-1/2 h-[2px] w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-70 rounded-full" />

      <span className="absolute inset-0 bg-[radial-gradient(40%_15%_at_50%_110%,rgba(255,145,0,0.2)_0%,transparent_100%)] pointer-events-none" />

      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-28 sm:h-36 w-36 sm:w-44 rounded-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 blur-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 pointer-events-none"></span>

      <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-bl from-orange-200/30 to-transparent rounded-full"></div>
    </div>
  );
});

FeatureCard.displayName = "FeatureCard";

export default function Feature() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const leftCardsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightCardsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadGSAP = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);

        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const leftCards = leftCardsRefs.current.filter(Boolean);
        const rightCards = rightCardsRefs.current.filter(Boolean);

        gsap.set([titleRef.current, subtitleRef.current], {
          opacity: 0,
          y: 30,
        });
        gsap.set(leftCards, { x: -120, opacity: 0, rotateY: -15 });
        gsap.set(rightCards, { x: 120, opacity: 0, rotateY: 15 });

        setIsLoaded(true);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 70%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        });

        tl.to([titleRef.current, subtitleRef.current], {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
        })
          .to(
            leftCards,
            {
              x: 0,
              opacity: 1,
              rotateY: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
            },
            "-=0.4"
          )
          .to(
            rightCards,
            {
              x: 0,
              opacity: 1,
              rotateY: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
            },
            "<"
          );

        const allCards = [...leftCards, ...rightCards];
        allCards.forEach((card) => {
          if (!card) return;

          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              y: -12,
              scale: 1.03,
              duration: 0.4,
              ease: "power2.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
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
    <section
      ref={sectionRef}
      className="relative pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 bg-gradient-to-br from-gray-100 via-orange-100 to-gray-50 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-72 sm:w-96 md:w-[500px] h-72 sm:h-96 md:h-[500px] bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 md:w-[500px] h-72 sm:h-96 md:h-[500px] bg-gradient-to-tl from-orange-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 md:hidden text-center">
          <div className="inline-block mb-3 px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-50 rounded-full border border-orange-200">
            <span className="text-orange-600 text-xs font-bold tracking-wider uppercase">
              Features
            </span>
          </div>
          <h2
            ref={titleRef}
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight"
            style={{ opacity: isLoaded ? undefined : 0 }}
          >
            Core Features of <br />
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              FinTech Software
            </span>
          </h2>
          <p
            ref={subtitleRef}
            className="text-gray-700 mx-auto max-w-sm text-sm leading-relaxed"
            style={{ opacity: isLoaded ? undefined : 0 }}
          >
            Cohorts are the best way to learn because you finish the course in a
            timely manner.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-7 md:grid-cols-3 md:gap-6 lg:gap-8">
          <div className="flex flex-col gap-6 sm:gap-7">
            {leftFeatures.map((feature, index) => (
              <FeatureCard
                key={`left-feature-${index}`}
                feature={feature}
                index={index}
                ref={(el) => {
                  leftCardsRefs.current[index] = el;
                }}
              />
            ))}
          </div>

          <div className="hidden md:flex relative self-center">
            <div className="text-center w-full py-8">
              <span className="absolute inset-0 mx-auto h-40 w-56 top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 blur-3xl opacity-30 pointer-events-none"></span>

              <h2
                ref={titleRef}
                className="text-gray-900 mb-5 text-center text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight relative z-10"
                style={{ opacity: isLoaded ? undefined : 0 }}
              >
                Core Features of <br />
                <span className="relative inline-block mt-1">
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    FinTech Software
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-orange-200/40 -z-10"></span>
                </span>
              </h2>

              <p
                ref={subtitleRef}
                className="text-gray-700 mx-auto max-w-xs lg:max-w-sm text-sm lg:text-base leading-relaxed relative z-10"
                style={{ opacity: isLoaded ? undefined : 0 }}
              >
                Cohorts are the best way to learn because you finish the course
                in a timely manner.
              </p>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-orange-200/30 rounded-full animate-ping"></div>
            </div>
          </div>

          <div className="flex flex-col gap-6 sm:gap-7">
            {rightFeatures.map((feature, index) => (
              <FeatureCard
                key={`right-feature-${index}`}
                feature={feature}
                index={index}
                ref={(el) => {
                  rightCardsRefs.current[index] = el;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

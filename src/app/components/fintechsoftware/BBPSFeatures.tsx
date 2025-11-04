"use client";
import React, { useEffect, useRef, useState } from "react";
import { Smartphone, TrendingUp } from "lucide-react";

interface Feature {
  title: string;
  points: string[];
  icon: React.ReactNode;
}

const userPanel: Feature = {
  title: "User Panel Benefits",
  icon: <Smartphone className="text-orange-500 w-6 h-6 sm:w-8 sm:h-8" />,
  points: [
    "Seamless access to BBPS services for all utility bill payments anytime, anywhere.",
    "Instant confirmation of every transaction via SMS or email.",
    "Multiple secure payment gateway options integrated into one platform.",
    "Transactions powered by the NPCI network with transparent, real-time receipts.",
  ],
};

const adminPanel: Feature = {
  title: "Admin Panel Advantages",
  icon: <TrendingUp className="text-orange-500 w-6 h-6 sm:w-8 sm:h-8" />,
  points: [
    "Simple and accessible interface – no technical expertise required.",
    "Empower agents to grow revenue by serving more customers from one platform.",
    "Connects billers, payment providers, and agents through a unified BBPS ecosystem.",
    "Transparent transaction tracking for all customer payments.",
    "Active fraud prevention and risk mitigation systems built in.",
    "Supports e-bills to reduce operational costs and enhance sustainability.",
  ],
};

const BBPSFeatures: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadGSAP = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);

        gsap.set([titleRef.current, subtitleRef.current], {
          opacity: 0,
          y: 30,
        });
        gsap.set(cardsRef.current, { opacity: 0, y: 60 });

        setIsLoaded(true);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        });

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
            "-=0.4"
          )
          .to(
            cardsRef.current.filter(Boolean),
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.15,
              ease: "power2.out",
            },
            "-=0.3"
          );

        cardsRef.current.forEach((card) => {
          if (!card) return;

          const glow = card.querySelector(".glow-effect");

          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              y: -12,
              scale: 1.02,
              duration: 0.4,
              ease: "power2.out",
            });
            gsap.to(glow, {
              opacity: 0.7,
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
            gsap.to(glow, {
              opacity: 0.4,
              duration: 0.4,
              ease: "power2.out",
            });
          });
        });
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
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-r from-gray-100 via-orange-100 to-gray-50 bg-[length:200%_200%] animate-gradientMove overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2
            ref={titleRef}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight px-4"
            style={{ opacity: isLoaded ? undefined : 0 }}
          >
            BBPS Payment Portal –{" "}
            <span className="text-orange-500 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text ">
              Smarter, Safer & Scalable
            </span>
          </h2>
          <p
            ref={subtitleRef}
            className="text-gray-600 mt-4 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-4 leading-relaxed"
            style={{ opacity: isLoaded ? undefined : 0 }}
          >
            Camlenio&apos;s BBPS platform provides a unified and secure way to
            manage payments for users, agents, and administrators. Built for
            performance, transparency, and growth.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
          {[userPanel, adminPanel].map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="relative bg-[#FEF3E6] backdrop-blur-sm border border-orange-200/50 shadow-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 transition-shadow duration-300 hover:shadow-2xl will-change-transform"
              style={{ opacity: isLoaded ? undefined : 0 }}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4 sm:mb-6 w-12 h-12 sm:w-14 sm:h-14 mx-auto bg-orange-100 rounded-full">
                  {feature.icon}
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center">
                  {feature.title}
                </h3>

                <ul className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 group/item">
                      <span className="w-2 h-2 mt-2 bg-orange-500 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-orange-200/20 to-transparent rounded-bl-full"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0%,
          100% {
            transform: translateX(0%) translateY(0%);
          }
          50% {
            transform: translateX(5%) translateY(-5%);
          }
        }
      `}</style>
    </section>
  );
};

export default BBPSFeatures;

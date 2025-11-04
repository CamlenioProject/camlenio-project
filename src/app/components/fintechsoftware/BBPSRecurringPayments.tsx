"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Droplets,
  Flame,
  Zap,
  Shield,
  CreditCard,
  Tv,
  Phone,
  Wifi,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const services: Service[] = [
  {
    title: "Water Bill",
    description:
      "Pay your monthly water bills instantly through Camlenio's BBPS portal with complete security and transparency. Track all payments anytime.",
    icon: <Droplets className="w-8 h-8" />,
    color: "from-orange-400 to-orange-600",
  },
  {
    title: "Gas Bill",
    description:
      "Settle your gas bills online in seconds — select your provider, enter your ID, and make payments securely without delays or penalties.",
    icon: <Flame className="w-8 h-8" />,
    color: "from-orange-400 to-orange-600",
  },
  {
    title: "Electricity Bill",
    description:
      "Experience quick and effortless electricity bill payments with instant confirmations and multiple payment gateway options.",
    icon: <Zap className="w-8 h-8" />,
    color: "from-orange-400 to-orange-600",
  },
  {
    title: "Insurance Payment",
    description:
      "Renew or pay your insurance premiums seamlessly through our trusted BBPS integration — safe, simple, and always reliable.",
    icon: <Shield className="w-8 h-8" />,
    color: "from-orange-400 to-orange-600",
  },
  {
    title: "Loan Repayment",
    description:
      "Repay your loans securely in just two steps. Enter your policy number, amount, and process payments through Camlenio's BBPS gateway.",
    icon: <CreditCard className="w-8 h-8" />,
    color: "from-orange-400 to-orange-600",
  },
  {
    title: "DTH Recharge",
    description:
      "Recharge any DTH service instantly. Select operator, amount, and enjoy uninterrupted entertainment with instant confirmation.",
    icon: <Tv className="w-8 h-8" />,
    color: "from-orange-400 to-orange-600",
  },
  {
    title: "Landline Bill",
    description:
      "Manage your landline payments effortlessly. Choose operator, enter your number, and pay securely with Camlenio's BBPS system.",
    icon: <Phone className="w-8 h-8" />,
    color: "from-orange-400 to-orange-600",
  },
  {
    title: "Data Card Recharge",
    description:
      "Stay connected with easy online data card recharges. Use the Camlenio BBPS portal for seamless top-ups and 24×7 access.",
    icon: <Wifi className="w-8 h-8" />,
    color: "from-orange-400 to-orange-600",
  },
];

const BBPSRecurringPayments: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);

        // Set initial states
        gsap.set([titleRef.current, subtitleRef.current], {
          opacity: 0,
          y: 40,
        });
        gsap.set(cardRefs.current, { opacity: 0, scale: 0.8, y: 30 });

        setIsLoaded(true);

        // Create staggered timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "top 25%",
            toggleActions: "play none none reverse",
          },
        });

        tl.to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.7,
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
            cardRefs.current.filter(Boolean),
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.6,
              stagger: {
                amount: 0.8,
                grid: "auto",
                from: "start",
              },
              ease: "back.out(1.2)",
            },
            "-=0.3"
          );

        cardRefs.current.forEach((card) => {
          if (!card) return;

          const iconContainer = card.querySelector(".icon-container");
          const contentArea = card.querySelector(".content-area");
          const glow = card.querySelector(".glow-effect");

          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              y: -8,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              duration: 0.3,
              ease: "power2.out",
            });
            gsap.to(iconContainer, {
              scale: 1.1,
              rotate: 5,
              boxShadow: "0 10px 20px -5px rgba(234, 88, 12, 0.4)",
              duration: 0.3,
              ease: "back.out(1.7)",
            });
            gsap.to(glow, {
              opacity: 0.15,
              scale: 1.5,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              y: 0,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              duration: 0.3,
              ease: "power2.out",
            });
            gsap.to(iconContainer, {
              scale: 1,
              rotate: 0,
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              duration: 0.3,
              ease: "back.out(1.7)",
            });
            gsap.to(glow, {
              opacity: 0,
              scale: 1,
              duration: 0.3,
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
      className="relative py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tl from-orange-200/30 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block mb-4 px-4 py-2 bg-orange-100 rounded-full">
            <span className="text-orange-500 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Payment Solutions
            </span>
          </div>

          <h2
            ref={titleRef}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight px-4 mb-4 sm:mb-6"
            style={{ opacity: isLoaded ? undefined : 0 }}
          >
            One-Stop Destination for{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                All Recurring Payments
              </span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-orange-200/50 -z-10"></span>
            </span>
          </h2>

          <p
            ref={subtitleRef}
            className="text-gray-600 mt-4 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-4 leading-relaxed"
            style={{ opacity: isLoaded ? undefined : 0 }}
          >
            Manage all your essential payments in one place with Camlenio&apos;s
            secure, automated BBPS system. Simplify your life with seamless
            transactions for utilities, insurance, and recharges.
          </p>
        </div>

        {/* Service Cards Grid - New Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
              className="relative bg-white/50 backdrop-blur-md border border-orange-200/50 rounded-3xl shadow-lg overflow-hidden cursor-pointer will-change-transform group"
              style={{ opacity: isLoaded ? undefined : 0 }}
            >
              {/* Background Glow Effect */}
              <div className="glow-effect absolute -inset-1/2 bg-gradient-to-br from-orange-400 to-orange-600 opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-2xl -z-10"></div>

              {/* Card Content */}
              <div className="relative z-10 p-6 sm:p-7 md:p-8 flex flex-col h-full">
                {/* Icon Container */}
                <div
                  className={`icon-container inline-flex items-center justify-center w-16 h-16 mb-5 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-md`}
                >
                  {service.icon}
                </div>

                {/* Content Area */}
                <div className="content-area flex-grow flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p
                    className={`text-gray-600 text-xs sm:text-sm leading-relaxed transition-all duration-500 ease-in-out overflow-hidden ${
                      activeCard === index ? "max-h-40" : "max-h-12"
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Read More Indicator */}
                  <div className="mt-auto pt-3">
                    <button className="text-orange-500 text-xs sm:text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      {activeCard === index ? "Show less" : "Learn more"}
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeCard === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BBPSRecurringPayments;

"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Service {
  title: string;
  desc: string;
  image: string;
}

const services: Service[] = [
  {
    title: "eCommerce Website Development",
    desc: "We build lightning-fast, high-performing online stores that showcase your brand and convert visitors into customers — all day, every day.",
    image:
      "https://res.cloudinary.com/dxpbriwey/image/upload/v1762154846/shoper-i9CxbB1HlfM-unsplash_un4ol8.jpg",
  },
  {
    title: "eCommerce App Development",
    desc: "Experience mobile-first performance with Camlenio's AI-optimized eCommerce apps offering seamless UX across all devices.",
    image:
      "https://res.cloudinary.com/dxpbriwey/image/upload/v1762154934/piggybank-vbGnCn_4Pdo-unsplash_nkhoa6.jpg",
  },
  {
    title: "eCommerce Portal Development",
    desc: "Comprehensive portals with real-time dashboards, product management, and customer analytics — all tailored for scalability.",
    image:
      "https://res.cloudinary.com/dxpbriwey/image/upload/v1762154990/piggybank-LYLDANKDE8g-unsplash_swzqys.jpg",
  },
  {
    title: "Online Marketplace Development",
    desc: "Launch your own Amazon-style multi-vendor marketplace with secure payment systems and flexible vendor controls.",
    image:
      "https://res.cloudinary.com/dxpbriwey/image/upload/v1762155078/piggybank-vbGnCn_4Pdo-unsplash_2_ypzqqz.jpg",
  },
  {
    title: "Multi-Store eCommerce Solutions",
    desc: "Manage multiple regional stores from one unified dashboard. Centralize your data, automate processes, and scale effortlessly.",
    image:
      "https://res.cloudinary.com/dxpbriwey/image/upload/v1762155224/babak-eshaghian-pwcLYVaQ-Zc-unsplash_jwffrs.jpg",
  },
  {
    title: "Microservices-Based Architecture",
    desc: "Our modular microservice design ensures flawless uptime, independent scalability, and zero downtime updates.",
    image:
      "https://res.cloudinary.com/dxpbriwey/image/upload/v1762155322/18872_pitilt.jpg",
  },
  {
    title: "eCommerce POS Systems",
    desc: "Enable fast billing, instant reporting, and unified sync between online and offline stores with Camlenio POS solutions.",
    image:
      "https://res.cloudinary.com/dxpbriwey/image/upload/v1762155459/5493790_eex9kr.jpg",
  },
  {
    title: "eCommerce CRM Platforms",
    desc: "Streamline your sales funnel and personalize engagement with an integrated CRM built for retail intelligence.",
    image:
      "https://res.cloudinary.com/dxpbriwey/image/upload/v1762155532/375642_khx0i5.jpg",
  },
  {
    title: "eCommerce ERP Systems",
    desc: "Automate internal operations — from inventory to logistics — with ERP solutions crafted for next-gen eCommerce ecosystems.",
    image:
      "https://res.cloudinary.com/dxpbriwey/image/upload/v1762155571/120382_lcpyen.jpg",
  },
];

const EcommerceServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadGSAP = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);

        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const validCards = cardsRef.current.filter(Boolean);

        gsap.set([titleRef.current, subtitleRef.current], {
          opacity: 0,
          y: 40,
        });
        gsap.set(validCards, { opacity: 0, y: 40, scale: 0.9 });

        setIsLoaded(true);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none none",
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
            "-=0.5"
          )
          .to(
            validCards,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              stagger: {
                amount: 1,
                grid: "auto",
                from: "start",
              },
              ease: "back.out(1.2)",
            },
            "-=0.3"
          );

        validCards.forEach((card) => {
          if (!card) return;

          const button = card.querySelector(".quote-button");
          const arrow = card.querySelector(".arrow-icon");

          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              y: -12,
              scale: 1.03,
              boxShadow: "0 25px 50px -12px rgba(249,115,22,0.3)",
              duration: 0.4,
              ease: "power2.out",
            });
            gsap.to(button, { x: 5, duration: 0.3 });
            gsap.to(arrow, { x: 3, duration: 0.3 });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
              duration: 0.4,
              ease: "power2.out",
            });
            gsap.to(button, { x: 0, duration: 0.3 });
            gsap.to(arrow, { x: 0, duration: 0.3 });
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
      className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 animate-gradientMove overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-5 py-2.5 bg-orange-100 rounded-full border border-orange-200">
            <span className="text-orange-600 text-xs sm:text-sm font-bold uppercase">
              Our Services
            </span>
          </div>

          <h2
            ref={titleRef}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Explore Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              eCommerce Development
            </span>{" "}
            Services
          </h2>

          <p
            ref={subtitleRef}
            className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-sans"
          >
            At Camlenio, we craft intelligent eCommerce ecosystems — from
            websites and web apps to ERP, CRM, and microservices-based
            architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="relative bg-gradient-to-br from-white to-orange-50/40 border border-orange-200/50 shadow-lg rounded-3xl overflow-hidden group transition-all duration-300"
            >
              <div className="relative w-full h-52 sm:h-56 md:h-60 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-fill group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              <div className="relative z-10 p-6 sm:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-5 font-sans">
                  {service.desc}
                </p>

                <button className="quote-button inline-flex items-center gap-2 text-orange-600 font-semibold text-sm md:text-base hover:gap-3 transition-all duration-300">
                  <span>Get a Price Quote</span>
                  <ArrowRight className="arrow-icon w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceServicesSection;

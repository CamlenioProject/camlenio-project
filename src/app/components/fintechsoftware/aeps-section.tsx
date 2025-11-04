"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/app/components/ui/card";
import {
  MdAdminPanelSettings,
  MdLanguage,
  MdPhoneIphone,
} from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "All-in-One Admin Ecosystem",
    desc: "Camlenio's AePS Admin Panel is built for performance and clarity. You get powerful dashboards for Admin, Distributor, and Retailer roles — giving you full 360° control over transactions, commissions, and users.",
    icon: <MdAdminPanelSettings className="w-full h-full text-orange-600" />,
  },
  {
    title: "Website with Your Brand Identity",
    desc: "Launch your AePS platform under your own brand name. Our team provides custom website design, logo creation, and domain setup, so your business looks trusted and ready from day one.",
    icon: <MdLanguage className="w-full h-full text-orange-600" />,
  },
  {
    title: "Mobile Application (iOS & Android)",
    desc: "We build sleek, secure AePS mobile apps for both Android and iOS. Each app comes optimized for speed, real-time tracking, and cross-platform compatibility — helping your agents work anytime, anywhere.",
    icon: <MdPhoneIphone className="w-full h-full text-orange-600" />,
  },
];

export default function AePSSection() {
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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        markers: false,
      },
    });

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
          stagger: 0.2,
        },
        "-=0.6"
      );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-gray-100 via-orange-100 to-gray-50 bg-[length:200%_200%] animate-gradientMove overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          ref={headingRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 opacity-0 leading-tight"
        >
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Best AePS Portal for Admin
          </span>
          <br className="hidden sm:block" />
          <span className="text-gray-800"> — Powered by Camlenio</span>
        </h2>

        <p
          ref={descRef}
          className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4 opacity-0 leading-relaxed"
        >
          We don&apos;t just deliver AePS software — we help you launch a
          full-scale FinTech business. From admin tools to brand setup, Camlenio
          ensures your platform runs securely, efficiently, and under your own
          identity.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((item, i) => (
            <Card
              key={i}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="group relative p-4 sm:p-6 md:p-8 bg-[#FEF3E6] border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:border-orange-400 opacity-0 overflow-hidden"
            >
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-32 w-full rounded-full bg-gradient-to-t from-orange-400 via-orange-300 to-transparent blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"></span>

              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <CardContent className="relative z-10 p-0">
                <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex justify-center items-center rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 p-3 sm:p-3.5 md:p-4 shadow-md group-hover:shadow-xl transform group-hover:rotate-6 transition-all duration-500">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
                      {item.icon}
                    </div>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>

                <div className="absolute bottom-1 right-2 w-2 h-2 rounded-full bg-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

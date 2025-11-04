"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CreditCard,
  Wallet,
  FileText,
  Fingerprint,
  MonitorSmartphone,
  Send,
} from "lucide-react";
import { MdStars, MdCloud, MdBolt } from "react-icons/md";

interface Feature {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const B2BAepsFeatures: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        itemsRef.current.forEach((item, i) => {
          if (!item) return;
          gsap.fromTo(
            item,
            { y: 80, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              delay: i * 0.2,
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  const features: Feature[] = [
    {
      title: "Instant Cash Withdrawals",
      desc: "Lightning-fast Aadhaar-based withdrawals with secure settlements and instant verification.",
      icon: <Wallet className="w-8 h-8 text-orange-600" />,
    },
    {
      title: "Balance Enquiry",
      desc: "Quick Aadhaar-linked balance checks with real-time admin visibility for full transparency.",
      icon: <CreditCard className="w-8 h-8 text-orange-600" />,
    },
    {
      title: "Mini Statement Access",
      desc: "View and download real-time mini statements directly from your AePS admin dashboard.",
      icon: <FileText className="w-8 h-8 text-orange-600" />,
    },
    {
      title: "Aadhaar Pay",
      desc: "Enable secure cardless and cashless payments with biometric authentication using Aadhaar Pay.",
      icon: <Fingerprint className="w-8 h-8 text-orange-600" />,
    },
    {
      title: "Micro ATM Integration",
      desc: "Deploy micro ATM devices seamlessly — we handle both hardware setup and secure API integration.",
      icon: <MonitorSmartphone className="w-8 h-8 text-orange-600" />,
    },
    {
      title: "Bulk Payout System",
      desc: "Simplify bulk disbursements for agents and merchants with automated instant payouts.",
      icon: <Send className="w-8 h-8 text-orange-600" />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 sm:px-10 lg:px-16 
                 bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 
                 bg-[length:200%_200%] animate-gradientMove overflow-hidden"
    >
      <MdStars className="absolute top-10 left-10 w-20 h-20 text-orange-300 opacity-40 animate-float-slow" />
      <MdCloud className="absolute bottom-20 right-10 w-24 h-24 text-orange-400 opacity-30 animate-float" />
      <MdBolt className="absolute top-1/2 right-1/4 w-16 h-16 text-orange-500 opacity-20 animate-float-slow" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            B2B AePS Software <span className="text-orange-600">Features</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
            Discover Camlenio’s advanced, high-performance AePS system — built
            for security, scalability, and seamless user experience.
          </p>
        </div>

        <div className="relative border-l border-gray-300">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className="mb-12 ml-8 relative group"
            >
              <span
                className="absolute -left-10 flex items-center justify-center 
                               w-12 h-12 rounded-full bg-[#FEF3E6] border border-gray-300 
                               shadow-md shadow-orange-200 group-hover:scale-105 transition-transform duration-300"
              >
                {feature.icon}
              </span>
              <div
                className="bg-[#FEF3E6] backdrop-blur-sm border border-gray-200 
                              rounded-xl p-6 group-hover:translate-x-2 group-hover:shadow-lg 
                              group-hover:border-orange-400 transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default B2BAepsFeatures;

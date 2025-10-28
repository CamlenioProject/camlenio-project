"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Settings, Puzzle, RefreshCw, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Settings,
    title: "CRM Setup",
    description:
      "Complete CRM implementation tailored to your business needs with seamless onboarding.",
    features: ["Custom configuration", "Data migration", "Team training"],
  },
  {
    icon: Puzzle,
    title: "Custom Module",
    description:
      "Build custom modules and integrations to extend your CRM capabilities.",
    features: ["Custom workflows", "API integrations", "Third-party apps"],
  },
  {
    icon: RefreshCw,
    title: "Migration",
    description:
      "Smooth migration from your existing CRM with zero data loss and minimal downtime.",
    features: ["Data mapping", "Validation", "Testing & QA"],
  },
  {
    icon: Sparkles,
    title: "AI Optimization",
    description:
      "Leverage AI-powered insights to optimize your sales process and customer interactions.",
    features: ["Predictive analytics", "Smart automation", "Lead scoring"],
  },
];

const Services = () => {
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        iconRefs.current,
        { opacity: 0, scale: 0.5, rotation: -90 },
        {
          opacity: 1,
          scale: 0.8,
          rotation: 0,
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [cardRef]);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-8 md:px-16 relative bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Comprehensive
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              {" "}
              CRM Services
            </span>
          </h2>
          <p className="max-w-5xl mx-auto text-gray-600 text-sm md:text-base mb-12 font-sans text-center">
            End-to-end solutions to help you maximize your CRM investment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-12 ">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="p-2 rounded-xl"
              >
                <div className="flex items-start gap-6 bg-orange-100 border border-orange-300 transition-all duration-150 p-4 rounded-3xl">
                  <div
                    ref={(el) => {
                      iconRefs.current[index] = el;
                    }}
                    className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_40px_hsl(25_100%_50%_/_0.3)]"
                  >
                    <Icon className="w-7 h-7 text-gray-900" />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <h3 className="text-2xl font-semibold ">{service.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 bg-orange-100 text-gray-800 text-sm px-3 py-1.5 rounded-full shadow-sm border border-orange-200"
                      >
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

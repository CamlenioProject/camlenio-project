"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const services = [
  {
    title: "Custom E-Commerce Development",
    description:
      "From concept to launch, we build platforms engineered for growth. Our custom e-commerce solutions blend robust backend logic with fluid front-end design — ensuring every interaction feels fast, natural, and user-focused.",
  },
  {
    title: "Shopify / WooCommerce / Magento Setup",
    description:
      "We streamline your e-commerce setup with modern workflows, advanced configurations, and seamless plugin integrations. Camlenio ensures your store is launch-ready — optimized for conversions, SEO, and scalability right from day one.",
  },
  {
    title: "UI/UX Design for E-Commerce",
    description:
      "We design for emotion and efficiency. Every page is crafted to guide customers naturally toward checkout — from intuitive navigation to pixel-perfect product displays that elevate your brand identity.",
  },
  {
    title: "Payment Gateway Integration",
    description:
      "Security and speed go hand in hand. We integrate gateways like Stripe, Razorpay, and PayPal, delivering a frictionless and trustworthy checkout experience for users worldwide.",
  },
  {
    title: "Marketplace Development",
    description:
      "Want your own Amazon or Flipkart-style platform? We develop scalable multi-vendor ecosystems with modular architecture, real-time inventory, and AI-driven recommendations that make your platform future-ready.",
  },
  {
    title: "Headless E-Commerce Solutions",
    description:
      "For brands demanding speed and flexibility — we deliver Next.js + API-driven architectures that decouple front-end from backend for lightning-fast, scalable commerce experiences.",
  },
];

export default function OurServices() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 25,
        ease: "linear",
      });
    }
  }, []);

  return (
    <>
      <section className="relative bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove py-20 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Our{" "}
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                We Deliver
              </span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-sans">
              Building next-generation e-commerce experiences powered by
              innovation, design, and speed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: (i: number) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.15,
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }),
                }}
                className="relative group"
              >
                {/* Content Container */}
                <div
                  className="relative pl-8 pt-5 pb-5 bg-white/60 rounded-xl backdrop-blur-sm transition-all duration-500 hover:shadow-[0_4px_20px_rgba(255,120,0,0.15)] 
                              border-l-4 border-orange-500 rounded-tl-xl rounded-bl-xl
                              before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-orange-400 before:to-orange-600 before:rounded-l-xl before:shadow-lg before:shadow-orange-500/30 before:transition-all before:duration-300 before:scale-y-0 
                              after:absolute after:top-0 after:left-0 after:h-1 after:w-0 after:bg-gradient-to-r after:from-orange-400 after:to-orange-600 after:rounded-tl-xl after:rounded-br-xl after:shadow-md after:shadow-orange-500/30 after:transition-all after:duration-300 "
                >
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed pr-4 font-sans">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative py-12 overflow-hidden bg-gradient-to-r from-orange-100 to-gray-100">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap text-6xl font-extrabold text-gray-900/10"
        >
          {Array(8)
            .fill("INNOVATION • SCALABILITY • PERFORMANCE • DESIGN • ")
            .map((text, i) => (
              <span key={i}>{text}</span>
            ))}
        </div>
      </div>
    </>
  );
}

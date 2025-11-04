"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShoppingCart,
  FaMobileAlt,
  FaLock,
  FaBolt,
  FaChartBar,
  FaTools,
} from "react-icons/fa";
import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Custom Online Stores",
    icon: <FaShoppingCart className="text-orange-500 text-2xl" />,
    desc: "We create bespoke e-commerce stores built around your brand’s personality — fast, scalable, and made to convert visitors into loyal customers.",
    img: "/serviceDropdown/ecommercedevelopment/first1.png",
  },
  {
    id: 2,
    title: "Mobile-First Design",
    icon: <FaMobileAlt className="text-orange-500 text-2xl" />,
    desc: "Our responsive designs adapt beautifully to every screen size, ensuring a seamless experience for mobile shoppers.",
    img: "/serviceDropdown/ecommercedevelopment/second2.png",
  },
  {
    id: 3,
    title: "Secure Payments & Checkout",
    icon: <FaLock className="text-orange-500 text-2xl" />,
    desc: "We integrate PCI-compliant gateways with modern encryption, keeping transactions smooth and your customers’ trust intact.",
    img: "/serviceDropdown/ecommercedevelopment/third3.png",
  },
  {
    id: 4,
    title: "Lightning-Fast Performance",
    icon: <FaBolt className="text-orange-500 text-2xl" />,
    desc: "Speed is sales. We fine-tune your site with advanced optimization, CDN, and caching for instant load times.",
    img: "/serviceDropdown/ecommercedevelopment/fourth4.png",
  },
  {
    id: 5,
    title: "Analytics & Conversion Tracking",
    icon: <FaChartBar className="text-orange-500 text-2xl" />,
    desc: "Track every click, scroll, and sale. We set up deep analytics for smarter business decisions and stronger ROI.",
    img: "/serviceDropdown/ecommercedevelopment/fifth5.png",
  },
  {
    id: 6,
    title: "Ongoing Support & Maintenance",
    icon: <FaTools className="text-orange-500 text-2xl" />,
    desc: "Stay worry-free. Our team keeps your store secure, updated, and ahead of trends with continuous maintenance.",
    img: "/serviceDropdown/ecommercedevelopment/sixth6.png",
  },
];

export default function WhyChooseUs() {
  const [active, setActive] = useState(1);
  const activeFeature = features.find((f) => f.id === active);

  return (
    <section className="relative px-6 py-24 bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove overflow-hidden scroll-smooth">
      {/* ===== Subtle Animated Background ===== */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute top-20 left-1/3 w-80 h-80 bg-orange-200/40 blur-3xl rounded-full"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-200/30 blur-3xl rounded-full"
        />
      </div>

      {/* ===== Header ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 ">
          Why{" "}
          {/* <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
            Choose Us
          </span> */}
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
        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-sans">
          We blend technology, design, and strategy to build e-commerce
          experiences that convert — and keep customers coming back.
        </p>
      </motion.div>

      {/* ===== Main Layout ===== */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-center">
        {/* Feature List */}
        <div className="flex flex-col gap-3">
          {features.map((feature) => (
            <motion.button
              key={feature.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActive(feature.id)}
              className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 text-left ${
                active === feature.id
                  ? "bg-[#FEF3E6] shadow-lg border-orange-400/70"
                  : "bg-white/60 hover:bg-white/80 border-transparent"
              }`}
            >
              <div className="p-2 rounded-lg bg-gray-50">{feature.icon}</div>
              <span
                className={`font-semibold ${
                  active === feature.id ? "text-orange-600" : "text-gray-800"
                }`}
              >
                {feature.title}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Active Feature Display */}
        <div className="md:col-span-2 relative">
          <AnimatePresence mode="wait">
            {activeFeature && (
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden bg-[#FEF3E6] backdrop-blur-xl border border-gray-200 shadow-2xl p-8"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
                      {activeFeature.title}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed font-sans">
                      {activeFeature.desc}
                    </p>
                  </div>
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full md:w-1/2 h-64 md:h-80"
                  >
                    <Image
                      src={activeFeature.img}
                      alt={activeFeature.title}
                      fill
                      className="object-contain drop-shadow-2xl"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

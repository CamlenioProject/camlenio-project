"use client";
import { motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HeroTextAnimate } from "../HeroTextAnimate";
import FormPopup from "../FormPopup";
import BackToTopButton from "../BackToTopButton";

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const cards = [
    {
      id: 1,
      tag: "Customized",
      tagColor: "bg-blue-100 text-blue-600",
      title: "Customized Software Tailored to Your Growth",
      decs: "We develop software solutions that adapt to your unique business needs. Our customized technology evolves as your business grows.",
      image: "/Homepage/hero/Customized.webp",
    },
    {
      id: 2,
      tag: "Fintech",
      tagColor: "bg-pink-100 text-pink-600",
      title: "Empowering Businesses with Smart Fintech Solutions",
      decs: "Fintech blends finance with technology to create smarter, faster, and more secure digital financial Software.",
      image: "/Homepage/hero/fintech.webp",
    },
    {
      id: 3,
      tag: "Innovation",
      tagColor: "bg-orange-100 text-orange-600",
      title: "Artificial Intelligence Solutions by Camlenio Software",
      decs: "We harness the power of Artificial Intelligence (AI) to help businesses automate processes, analyze data intelligently.",
      image: "/Homepage/hero/ai.webp",
    },
  ];

  return (
    <div className="relative bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove pt-10 md:py-18 overflow-hidden">
      <div className="flex flex-col md:flex-row pt-16 md:py-0">
        <FormPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center w-full md:w-3/5"
        >
          <div className="max-w-2xl space-y-4 px-4 sm:px-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Camlenio is a Leading Software
              <br />
              Development in{" "}
              <HeroTextAnimate
                words={[
                  "Custom Solutions",
                  "Fintech Software",
                  "Digital Solutions",
                ]}
              />
            </h1>

            <ul className="space-y-2 text-gray-700 text-xs md:text-sm font-sans">
              <li className="flex items-center gap-3">
                <GiCheckMark className="text-orange-500 flex-shrink-0" />
                <span>
                  Trusted by clients for innovation, reliability, and timely
                  delivery
                </span>
              </li>
              <li className="flex items-center gap-3">
                <GiCheckMark className="text-orange-500 flex-shrink-0" />
                <span>
                  Businesses with latest technologies and smart digital
                  solutions
                </span>
              </li>
              <li className="flex items-center gap-3">
                <GiCheckMark className="text-orange-500 flex-shrink-0" />
                <span>
                  From Startup to Enterprise – We Develop Software That Grows
                  With You.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <GiCheckMark className="text-orange-500 flex-shrink-0" />
                <span>
                  Building secure, scalable, and customizable platforms
                </span>
              </li>
            </ul>
            <button
              // onClick={() => setIsPopupOpen(true)}
              className="my-6 px-6 py-3 self-center md:self-start bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-md"
            >
              Schedule a call
            </button>
          </div>
        </motion.div>
        {/* right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-[length:200%_200%] animate-gradientMove min-h-[28rem] sm:min-h-[28rem] md:h-[36rem] flex-grow flex flex-col items-center justify-center px-2 py-10 md:rounded-bl-[3rem] md:w-2/5 overflow-hidden"
        >
          <div
            className="relative flex justify-center items-center w-full h-full [perspective:1000px]"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {cards.map((card, index) => {
              const isHovered = hoveredIndex === index;
              const isAnyHovered = hoveredIndex !== null;

              const initial = {
                x: index === 1 ? "0%" : index === 0 ? "-55%" : "55%",
                y: index === 1 ? -10 : 10,
                z: index === 1 ? 40 : 10,
                rotateY: index === 1 ? 0 : index === 0 ? 35 : -35,
                scale: index === 1 ? 1.1 : index === 0 ? 1 : 1.04,
                zIndex: index === 1 ? 3 : index === 0 ? 2 : 1,
              };
              const hovered = {
                x: isHovered
                  ? "0%"
                  : index < (hoveredIndex ?? -1)
                  ? "-65%"
                  : "65%",
                y: isHovered ? -20 : 30,
                z: isHovered ? 50 : index < (hoveredIndex ?? -1) ? 40 : -60,
                rotateY: isHovered
                  ? 0
                  : index < (hoveredIndex ?? -1)
                  ? 40
                  : -40,
                scale: isHovered ? 1.15 : 0.9,
              };
              return (
                <motion.div
                  key={card.id}
                  onHoverStart={() => setHoveredIndex(index)}
                  onTap={() => setHoveredIndex(index)}
                  className="absolute bg-white p-5 rounded-2xl shadow-xl flex flex-col w-[12rem] md:w-[10rem] lg:w-58"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    ...(isAnyHovered ? hovered : initial),
                    opacity: isAnyHovered ? (isHovered ? 1 : 0.1) : 1,
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  viewport={{ once: true }}
                >
                  <span
                    className={`text-[.80rem] font-semibold px-2 py-1 rounded-lg self-start ${
                      card.tagColor
                    } ${card.id === 2 ? "mx-auto" : ""} ${
                      card.id === 3 ? "ml-auto" : ""
                    }`}
                  >
                    {card.tag}
                  </span>
                  <h3 className="mt-3 font-semibold text-gray-900 text-[.70rem]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-gray-900 text-[.60rem] text-justify">
                    {card.decs}
                  </p>
                  {card.image && (
                    <motion.div
                      initial={{ x: 0 ? -20 : 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 25,
                        delay: 0.1,
                      }}
                      className="mt-3 w-full h-24 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={card.image}
                        alt="alternative"
                        width={600}
                        height={500}
                        priority
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
      <BackToTopButton />
    </div>
  );
};

export default Hero;

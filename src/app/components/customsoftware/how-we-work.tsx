"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaComments,
  FaProjectDiagram,
  FaCode,
  FaCheckCircle,
  FaRocket,
  FaLifeRing,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaComments className="text-orange-500 w-6 h-6" />,
    title: "Discovery & Consultation",
    desc: "We start by listening to your vision, challenges, and goals—transforming ideas into a clear direction.",
  },
  {
    icon: <FaProjectDiagram className="text-orange-500 w-6 h-6" />,
    title: "Strategy & Planning",
    desc: "Crafting the roadmap with the right technologies, milestones, and strategies to maximize value.",
  },
  {
    icon: <FaCode className="text-orange-500 w-6 h-6" />,
    title: "Development with Care",
    desc: "Building scalable, secure, and customized solutions using modern tools and frameworks.",
  },
  {
    icon: <FaCheckCircle className="text-orange-500 w-6 h-6" />,
    title: "Testing & Refinement",
    desc: "Every feature undergoes rigorous testing, ensuring smooth performance and flawless execution.",
  },
  {
    icon: <FaRocket className="text-orange-500 w-6 h-6" />,
    title: "Deployment & Onboarding",
    desc: "Seamless implementation with training and support for your team to use confidently.",
  },
  {
    icon: <FaLifeRing className="text-orange-500 w-6 h-6" />,
    title: "Continuous Support & Growth",
    desc: "Partnership doesn’t end at launch—we provide ongoing updates, improvements, and growth support.",
  },
];

export default function HowWeWork() {
  return (
    <div className="bg-gradient-to-r scroll-mt-10 from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove scroll-smooth">
      <div className="max-w-7xl mx-auto  text-center py-20 px-8 md:px-16">
        <span className="relative inline-block px-4 py-1.5 rounded-full border border-orange-50 bg-orange-100 shadow-sm text-sm font-medium text-orange-600 mb-4">
          <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
          How we work Woth Camlenio
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          How we{" "}
          <span
            className="text-orange-500"
            style={{
              textShadow:
                "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
            }}
          >
            work
          </span>
        </h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-gray-600 text-sm text-left md:text-base flex-wrap break-words mb-12 font-sans"
        >
          Camlenio is an established software development company in India that
          is committed to helping businesses thrive through innovative digital
          solutions. Our expert team Blends creativity, technology, and strategy
          to build custom websites, mobile apps, and fintech platforms that
          actually transact business.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-2 ">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ x: i % 2 === 0 ? -20 : 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 40,
                  damping: 25,
                  delay: i * 0.1,
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex  items-center gap-6 shadow-lg rounded-2xl p-2 text-left border- border-orange-500 "
              >
                <div className="flex-shrink-0">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="p-2 bg-orange-100 rounded-full shadow-lg [animation-duration:1s]"
                  >
                    {step.icon}
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-base md:text-lg text-gray-900 font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="hidden md:flex justify-center items-center h-full bg-gradient-to-r from-orange-300 to-orange-400 rounded-3xl p-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-1 flex justify-center"
            >
              <Image
                src="/ServiceDropdown/customsoftware/how-we-work.png"
                alt="Custom Software"
                width={600}
                height={600}
                className="w-full h-auto max-w-md object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

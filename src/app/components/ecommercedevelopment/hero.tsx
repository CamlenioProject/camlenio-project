"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <motion.h1
        className="text-5xl md:text-6xl font-bold  text-gray-900  mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Travel Smarter with <span className="text-orange-500">Trillo</span>
      </motion.h1>

      <motion.p
        className="text-lg text-gray-700 max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Book your dream trip, stay connected, and explore the world with ease.
      </motion.p>

      <div className="flex gap-4">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-orange-600 transition">
          Get Started <ArrowRight size={18} />
        </button>
        <button className="border border-gray-600 px-6 py-3 rounded-full text-gray-900 hover:bg-gray-800 transition">
          Learn More
        </button>
      </div>
    </section>
  );
}

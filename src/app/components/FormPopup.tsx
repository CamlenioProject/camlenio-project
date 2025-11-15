"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "@/app/components/submit-button-ui";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";

interface FormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormPopup: React.FC<FormPopupProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const validate = (
    name: string,
    email: string,
    phone: string,
    message: string
  ): string | null => {
    if (!name || name.trim().length < 2) return "Enter a valid name.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) return "Enter a valid email.";
    const phoneRegex = /^[0-9]{10}$/;
    if (!phone || !phoneRegex.test(phone))
      return "Enter a valid 10-digit phone number.";
    if (!message || message.trim().length < 5) return "Enter a valid message.";
    return null;
  };

  const clearMessages = () => {
    setError(null);
    setSuccess(null);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    const validationError = validate(name, email, phone, message);
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    const payload = {
      type: "popup",
      name,
      email,
      phone,
      message,
      source: "popup-form",
    };

    try {
      await axios.post("/api/enquiry", payload);
      setSuccess("Message successfully sent!");
      setTimeout(() => router.push("/"), 1500);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "An error occurred.");
      } else {
        setError(String(err));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 bg-black/50 z-[2000] flex items-center justify-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
            className="relative bg-white rounded-2xl shadow-xl w-80 h-auto md:w-full max-w-4xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-white hover:text-white/70 transition-colors z-10 rounded-full"
              aria-label="Close popup"
            >
              <XMarkIcon className="w-4 h-4" />
            </button>

            <div className="flex flex-col-reverse md:flex-row bg-white">
              <div className="w-full md:w-1/2 p-4 md:p-6">
                <div className="flex justify-between">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                    Get in Touch
                  </h2>

                  {error && (
                    <div className="mb-2 text-red-600 text-xs md:text-sm font-medium bg-red-100 border border-red-300 px-3 py-1 rounded-md">
                      {error}
                    </div>
                  )}

                  {success && (
                    <div className="mb-2 text-green-700 text-xs md:text-sm font-medium bg-green-100 border border-green-300 px-3 py-1 rounded-md">
                      {success}
                    </div>
                  )}
                </div>
                <p className="text-gray-600 text-xs md:text-sm mb-1">
                  Fill out the form and we&apos;ll get back to you.
                </p>

                <form onSubmit={onSubmit} className="space-y-1">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[.7rem] md:text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={clearMessages}
                      className="mt-1 block w-full px-3 py-1 text-[.7rem] placeholder-opacity-40 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[.7rem] md:text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={clearMessages}
                      className="mt-1 block w-full px-3 py-1 text-[.7rem] bg-white border placeholder-opacity-40 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[.7rem] md:text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      onChange={clearMessages}
                      className="mt-1 block w-full px-3 py-1 text-[.7rem] bg-white border placeholder-opacity-40 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[.7rem] md:text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      onChange={clearMessages}
                      className="mt-1 block w-full px-3 py-1 text-[.7rem] bg-white placeholder-opacity-40 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      placeholder="Your message..."
                    ></textarea>
                  </div>

                  <div>
                    <Button
                      type="submit"
                      id="animated-submit-btn"
                      disabled={loading}
                      // className="w-full bg-orange-500 hover:bg-orange-600 hover:ring-orange-500 "
                      className="w-full rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>

              <div className="w-full md:w-1/2">
                <Image
                  src="/Fintech-software-offer-post.png"
                  alt="Contact us"
                  width={600}
                  height={600}
                  className="w-100 md:w-full md:h-full object-fill md:rounded-r-2xl"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FormPopup;

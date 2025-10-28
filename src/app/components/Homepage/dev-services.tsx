"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Mobile App Development",
    cardtitle: "Software Development Consulting",
    desc: "We design and develop mobile applications that blend performance, scalability, and user experience. Our solutions work seamlessly across iOS and Android, offering modern interfaces and powerful features. From real-time tracking and secure payment gateways to interactive dashboards, each app is built to enhance customer engagement, streamline operations, and accelerate business growth in today’s competitive digital era.",
    icon: (
      <Image
        src="/Homepage/svg/mobile-development.svg"
        alt="Mobile App Development icon"
        width={50}
        height={50}
      />
    ),
    hoverIcon: (
      <Image
        src="/Homepage/svg/mobile-development-w.svg"
        alt="Mobile App Development icon"
        width={50}
        height={50}
      />
    ),
    subImages: [
      { src: "/Homepage/svg/apple.svg", name: "iPhone App Development" },
      { src: "/Homepage/svg/android.svg", name: "Android App Development" },
      { src: "/Homepage/svg/flutter-o.svg", name: "Flutter App Development" },
      {
        src: "/Homepage/svg/react1-o.svg",
        name: "React Native App Development",
      },
    ],
  },
  {
    id: 2,
    title: "Web Development",
    cardtitle: "Web Development",
    desc: "A website is more than just an online presence — it’s the face of your brand. Our web development services focus on building responsive, high-performing platforms that reflect your identity while connecting with your audience. From business websites to custom platforms, we leverage modern technologies to ensure speed, security, and scalability, creating a site that not only looks professional but also drives measurable business results.",
    icon: (
      <Image
        src="/Homepage/svg/web-development.svg"
        alt="Web Development icon"
        width={50}
        height={50}
      />
    ),
    hoverIcon: (
      <Image
        src="/Homepage/svg/web-development-w.svg"
        alt="Web Development icon"
        width={50}
        height={50}
      />
    ),
    subImages: [
      {
        src: "/Homepage/svg/nodejs_development-o.svg",
        name: "Nodejs Development",
      },
      {
        src: "/Homepage/svg/laravel_development-w.svg",
        name: "Laravel Development",
      },
      {
        src: "/Homepage/svg/expressJs_development-o.svg",
        name: "ExpressJs Development",
      },
      {
        src: "/Homepage/svg/wordpress_development.svg",
        name: "Wordpress Development",
      },
    ],
  },
  {
    id: 3,
    title: "Ecommerce Development",
    cardtitle: "Ecommerce Development",
    desc: "We create ecommerce solutions that go beyond selling — they inspire trust and deliver results. Tailored for B2B, B2C, and D2C models, our platforms feature advanced product catalogs, secure payment integrations, and smooth navigation for effortless shopping. With a strong focus on scalability and customer experience, our ecommerce development ensures businesses can boost conversions, maximize revenue, and build lasting customer relationships.",
    icon: (
      <Image
        src="/Homepage/svg/ecommerce-development.svg"
        alt="Ecommerce Development icon"
        width={50}
        height={50}
      />
    ),
    hoverIcon: (
      <Image
        src="/Homepage/svg/ecommerce-development-w.svg"
        alt="Ecommerce Development icon"
        width={50}
        height={50}
      />
    ),
    subImages: [
      {
        src: "/Homepage/svg/shopify_development-o.svg",
        name: "Shopify Development",
      },
      {
        src: "/Homepage/svg/woocommerce_development-o.svg",
        name: "Woocommerce Development",
      },
      {
        src: "/Homepage/svg/magento_development-o.svg",
        name: "Magento Development",
      },
      {
        src: "/Homepage/svg/wix-o.svg",
        name: "Wix",
      },
    ],
  },
  {
    id: 4,
    title: "UI UX Design",
    cardtitle: "UI UX Design",
    desc: " Design is at the heart of every digital experience, and our UI/UX services focus on making it intuitive and impactful. From research and wireframes to polished interfaces, we craft user journeys that are simple, engaging, and visually appealing. Every design balances aesthetics with functionality, ensuring products are not just attractive but also solve real business challenges. The result is a seamless experience that users love and remember.",
    icon: (
      <Image
        src="/Homepage/svg/ui-design.svg"
        alt="UI UX Design icon"
        width={50}
        height={50}
      />
    ),
    hoverIcon: (
      <Image
        src="/Homepage/svg/ui-design-w.svg"
        alt="UI UX Design icon"
        width={50}
        height={50}
      />
    ),
    subImages: [
      { src: "/Homepage/svg/figma_designer-o.svg", name: "Figma Designer" },
      { src: "/Homepage/svg/uiux_designer-o.svg", name: "UI/UX Designer" },
      { src: "/Homepage/svg/react1-o.svg", name: "ReactJs Designer" },
      {
        src: "/Homepage/svg/nextJs_designer-o.svg",
        name: "NextJs Designer",
      },
    ],
  },
  {
    id: 5,
    title: "Digital Marketing",
    cardtitle: "Creative Digital Excellence",
    desc: "We specialize in result-driven digital marketing solutions designed to help businesses grow in today’s competitive online world. From SEO, SEM, and social media marketing to content marketing, email campaigns, and paid ads, we provide a complete suite of services tailored to your business goals. Our team ensures better visibility, lead generation, and ROI by combining creativity with the latest digital tools.",
    icon: (
      <Image
        src="/Homepage/svg/custom-development.svg"
        alt="Dedicated Resources icon"
        width={50}
        height={50}
      />
    ),
    hoverIcon: (
      <Image
        src="/Homepage/svg/custom-development-w.svg"
        alt="Dedicated Resources icon"
        width={50}
        height={50}
      />
    ),
    subImages: [
      {
        src: "/Homepage/devServices/smo.svg",
        name: "Social Media Optimization",
      },
      { src: "/Homepage/devServices/smm.svg", name: "Social Media Marketing" },
      {
        src: "/Homepage/devServices/ppc.svg",
        name: "Pay Per Click",
      },
      { src: "/Homepage/devServices/seo.svg", name: "SEO" },
    ],
  },
];

const DevServices = () => {
  const [active, setActive] = useState(1);
  const activeFeature = features.find((f) => f.id === active);
  return (
    <div className="relative py-16 overflow-hidden bg-transparent">
      <div className="mx-auto px-8 md:px-16 relative -mb-[60px]">
        <div className="max-w-6xl mx-auto text-center mb-4">
          <span className="relative inline-block px-4 py-1.5 rounded-full border border-orange-200 bg-gray-100 shadow-sm text-xs md:text-sm font-medium text-black mb-4 z-20">
            <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
            Innovating the Future Together
          </span>
          <h4 className="text-3xl sm:text-4xl font-bold text-gray-50 mb-4">
            Essential IT Solutions for {""}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #161e2e, 4px 6px 0px #ff582336",
              }}
            >
              Modern Businesses
            </span>
          </h4>
          <p className="max-w-5xl mx-auto text-gray-50 text-sm md:text-base mb-12 font-sans text-justify">
            In today’s fast-paced digital world, businesses need reliable,
            scalable, and innovative IT solutions to stay competitive. At
            Camlenio Software, we provide a comprehensive range of services—from
            custom software development and web applications to digital
            marketing and cloud solutions—designed to meet the evolving needs of
            modern enterprises.
          </p>
        </div>
        <div className="relative pb-10 text-gray-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-14 border-2 border-black/20  p-6 rounded-2xl   bg-gradient-to-r from-gray-900 via-gray-500/10 to-transparent backdrop-blur-3xl shadow-[0_-2px_28px_rgba(255,255,255,0.1)]">
            <div className="w-full md:w-1/3 flex flex-col gap-4">
              {features.map((feature) => (
                <motion.button
                  key={feature.id}
                  onClick={() => setActive(feature.id)}
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center group gap-3 text-left p-2 rounded-xl transition-colors duration-300 ${
                    active === feature.id
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-900 hover:bg-orange-500 hover:text-white"
                  }`}
                >
                  <div className="relative w-[50px] h-[50px] flex-shrink-0">
                    <span
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        active === feature.id ? "opacity-0" : "opacity-100"
                      } group-hover:opacity-0`}
                    >
                      {feature.icon}
                    </span>
                    <span
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        active === feature.id ? "opacity-100" : "opacity-0"
                      } group-hover:opacity-100`}
                    >
                      {feature.hoverIcon}
                    </span>
                  </div>
                  <span className="font-medium text-sm md:text-base lg:text-lg ">
                    {feature.title}
                  </span>
                </motion.button>
              ))}
            </div>
            <div className="w-full md:w-2/3 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature?.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-2xl"
                >
                  <h3 className="text-[1.3rem] md:text-2xl lg:text-4xl font-bold mb-2 text-orange-500">
                    {activeFeature?.cardtitle}
                  </h3>
                  <p className="text-gray-300 text-[.85rem] md:text-base mb-4 font-sans text-justify">
                    {activeFeature?.desc}
                  </p>

                  <button className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-semibold text-gray-900 bg-gray-100 rounded-full group text-sm sm:text-base lg:text-lg">
                    <span className="absolute inset-0 w-full h-full bg-orange-500 rounded-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                    <span className="relative z-10 group-hover:text-white transition-colors duration-500 flex items-center gap-2">
                      Talk to Experts <FaLongArrowAltRight />
                    </span>
                  </button>
                  {activeFeature?.subImages && (
                    <div className="grid grid-cols-4 gap-4 mt-8">
                      {activeFeature.subImages.map((img, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col items-center group"
                        >
                          <div className="w-12 h-12 relative group-hover:scale-80 transition-transform duration-500 overflow-hidden">
                            <Image
                              src={img.src}
                              alt={img.name}
                              fill
                              className="object-contain transition-transform duration-700 group-hover:rotate-y-360"
                            />
                          </div>
                          <span className="mt-2 text-[.50rem] lg:text-sm text-gray-50 text-center">
                            {img.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/Homepage/shapes/bg-shape11.png"
        alt="Global Shape"
        width={600}
        height={600}
        className=" w-auto h-auto absolute left-[0%] -top-[4%] -rotate-40 opacity-30  [animation-duration:50s] text-gray-900 z-10"
        unoptimized
      />
    </div>
  );
};
export default DevServices;

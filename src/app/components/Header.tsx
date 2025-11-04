"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { safeLink } from "../../../lib/utils";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { MobileDropdown } from "./MobileDropdown";

const availablePages = [
  // "/portfolio",
  "/component/services/customizedsoftware",
  // "/component/services/crmsoftware",
  "/component/services/ecommerceportel",
  "/component/services/fintechsoftware",
  // "/component/services/fullstackdevelopment",
  "/component/services/billingsoftware",
  "/component/services/hrmssoftware",
  // "/component/services/androidappdevelopment",
  // "/component/services/ui_uxdesigning",
  // "/component/services/webdevelopment",
  "/component/company/blog",
  "/component/company/about",
  "/component/company/career",
  "/component/company/contact",
];

const navItems = [
  {
    title: "Company",
    href: "company",
    dropdown: true,
    // items: ["Blog", "About", "Career", "Contact"],
    items: [
      { title: "Blog", href: "https://blogs.camlenio.com" },
      { title: "About", href: "/component/company/about" },
      { title: "Career", href: "/component/company/career" },
      { title: "Contact", href: "/component/company/contact" },
    ],
    dropdownClassName: "left-1/2 md: -translate-x-[35%]  lg:-translate-x-[45%]",
  },
  {
    title: "Services",
    href: "services",
    dropdown: true,
    items: {
      software: [
        "Customized Software",
        "CRM Software",
        "Full Stack Development",
        "HRMS Software",
        "Fintech Software",
        "Billing Software",
        "MLM Software",
        "ecommerce portel",
        "online education",
        "travel booking software",
        "Hotel management Software",
        "Banking Software",
        "Loan Management Software",
        "Accounting software",
        "employee tracking",
        "Real estate Software",
        "cab booking software",
        "food delivery software",
        "grocery software",
        "home service software",
        "school management",
      ],
      technology: [
        "Angular JS",
        "C#",
        "C++",
        "Android",
        "Python",
        "MySQL",
        ".Net",
        "Java Script",
        "Node JS",
        "Java",
        "SQL Server",
        "PHP",
        "React JS",
        "Html5",
        "Css3",
        "Adobe XD",
        "Photoshop",
        "Figma",
      ],
      design: [
        "UI_UX Designing",
        "custom web development",
        "software development",
        "web development",
        "logo & graphic designing",
        "digital marketing",
      ],
      Mobile: [
        "Android App Development",
        "iOS App Development",
        "Cross Platform Apps",
        "Flutter Apps",
        "React Native Apps",
        "App Maintenance",
      ],
    },
    dropdownClassName: "left-1/2 md:-translate-x-[44%] lg:-translate-x-[60%]",
  },
  {
    title: "Hire Developer",
    href: "hireateam",
    dropdown: true,
    items: [
      "Hire Android Developers",
      "Hire iOS Developers",
      "Hire Flutter Developers",
      "Hire Full Stack Developers",
      "Hire UI/UX Designers",
      "Hire Dedicated Teams",
    ],
    dropdownClassName:
      "left-1/2 md:-translate-x-[68%] lg:-translate-x-[70%] xl:-translate-x-[80%]",
  },
  {
    title: "Fintech Software",
    href: "fintechsoftware",
    dropdown: true,
    items: [
      "Payment Solutions",
      "Digital Banking",
      "Wealth Management",
      "Lending Platforms",
      "InsurTech",
      "Blockchain Solutions",
    ],
    dropdownClassName: " left-1/2 md:-translate-x-[80%] lg:-translate-x-[90%]",
  },
  {
    title: "Industries",
    href: "industries",
    dropdown: true,
    items: [
      "Healthcare",
      "Finance",
      "Retail",
      "Education",
      "Logistics",
      "Real Estate",
    ],
    dropdownClassName: "md:-translate-x-[80%] lg:-translate-x-[95%]",
  },

  { title: "Portfolio", href: "/portfolio", dropdown: false },
];

const socialIcons = [
  {
    title: " Facebook",
    href: "https://www.facebook.com/camleniosoftware/mentions/?_rdr",
  },
  {
    title: "Twitter",
    href: "https://x.com/camlenio",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/camleniosoftware/",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/posts/camlenio_camlenio-softwaredevelopment-businessgrowth-activity-7202183467239972864-Cepc",
  },
  {
    title: "Pinterest",
    href: "https://mx.pinterest.com/camlenio/",
  },
];

const HireDeveloperDropdown = ({
  item,
  openDropdownImmediate,
}: {
  item: (typeof navItems)[number];
  openDropdownImmediate: (title?: string | null) => void;
  closeDropdown: () => void;
  toggleDropdown: (title: string) => void;
}) => (
  <div className="flex w-[700px] h-auto">
    <div className="w-1/2 grid grid-cols-1 gap-2 pl-6 pt-4">
      {(item.items as string[]).map((link) => (
        <Link
          key={link}
          href={safeLink(
            `/component/${item.href}/${link.replace(/\s+/g, "").toLowerCase()}`,
            availablePages
          )}
          onMouseEnter={() => openDropdownImmediate(item.title)}
          onClick={() => openDropdownImmediate(item.title)}
          className="block text-gray-700 text-sm hover:text-orange-500 whitespace-nowrap transition-transform duration-150 hover:translate-x-1"
        >
          {link}
        </Link>
      ))}
    </div>
    <div className="w-1/2 bg-orange-50 -mb-[2.62rem]">
      <Image
        src="/header/hire-developer.jpg"
        alt="Hire Developer"
        width={380}
        height={300}
        className="object-cover w-full h-full "
      />
    </div>
  </div>
);

const FintechDropdown = ({
  item,
  openDropdownImmediate,
}: {
  item: (typeof navItems)[number];
  openDropdownImmediate: (title?: string | null) => void;
  closeDropdown: () => void;
  toggleDropdown: (title: string) => void;
}) => (
  <div className="flex w-[700px] h-auto">
    <div className="w-1/2 grid grid-cols-1 gap-2 pl-6 pt-4">
      {(item.items as string[]).map((link) => (
        <Link
          key={link}
          href={safeLink(
            `/component/${item.href}/${link.replace(/\s+/g, "").toLowerCase()}`,
            availablePages
          )}
          onMouseEnter={() => openDropdownImmediate(item.title)}
          onClick={() => openDropdownImmediate(item.title)}
          className="block text-gray-700 text-sm hover:text-orange-500 whitespace-nowrap transition-transform duration-150 hover:translate-x-1"
        >
          {link}
        </Link>
      ))}
    </div>
    <div className="w-1/2 bg-indigo-50 -mb-[2.64rem]">
      <Image
        src="/header/fintech-software.jpg"
        alt="Fintech"
        width={400}
        height={300}
        className="object-cover w-full h-full "
      />
    </div>
  </div>
);

const IndustriesDropdown = ({
  item,
  openDropdownImmediate,
}: {
  item: (typeof navItems)[number];
  openDropdownImmediate: (title?: string | null) => void;
  closeDropdown: () => void;
  toggleDropdown: (title: string) => void;
}) => (
  <div className="flex w-[700px] h-auto">
    <div className="w-1/2 grid grid-cols-1 gap-2 pl-6 pt-4 justify-center items-center">
      {(item.items as string[]).map((link) => (
        <Link
          key={link}
          href={safeLink(
            `/component/${item.href}/${link.replace(/\s+/g, "").toLowerCase()}`,
            availablePages
          )}
          onMouseEnter={() => openDropdownImmediate(item.title)}
          onClick={() => openDropdownImmediate(item.title)}
          className="block text-gray-700 text-sm hover:text-orange-500 whitespace-nowrap transition-transform duration-150 hover:translate-x-1"
        >
          {link}
        </Link>
      ))}
    </div>
    <div className="w-1/2 bg-orange-50 -mb-[2.6rem]">
      <Image
        src="/header/hire-developer.jpg"
        alt="Industries"
        width={450}
        height={350}
        className="object-cover object-top w-full h-full"
      />
    </div>
  </div>
);

const CompanyDropdown = ({
  item,
  openDropdownImmediate,
  pathname,
  activeTab,
  setActiveTab,
  closeDropdown,
}: {
  item: (typeof navItems)[number];
  openDropdownImmediate: (title?: string | null) => void;
  pathname: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  closeDropdown: () => void;
  toggleDropdown: (title: string) => void;
}) => {
  const getCompanyIcon = (name: string): React.ReactNode => {
    const key = (name || "").toLowerCase();
    const iconMap: Record<string, string> = {
      blog: "/header/aboutus/blog.svg",
      about: "/header/aboutus/about-us.svg",
      career: "/header/aboutus/career-2.svg",
      contact: "/header/aboutus/contact.svg",
    };
    const iconPath = iconMap[key] || "/header/aboutus/about-us.svg";
    const className = "h-8 w-14 object-contain ";
    return (
      <Image
        src={iconPath}
        alt={`${name} icon`}
        width={100}
        height={100}
        className={className}
      />
    );
  };

  return (
    <div className="w-[700px] h-auto">
      <div className="pl-6 pt-4">
        <div className="flex">
          <div className="w-1/3  flex flex-col justify-center items-start  border-r-2 border-l-2 border-r-gray-300 border-l-orange-500 rounded-3xl shadow-[-8px_0_15px_-3px_rgba(0,0,0,0.2)] mr-2 my-2">
            {(item.items as { title: string; href: string }[]).map(
              (linkItem) => {
                const isActive =
                  pathname === linkItem.href || activeTab === linkItem.title;
                return (
                  <Link
                    key={linkItem.title}
                    // href={safeLink(linkItem.href, availablePages)}
                    href={
                      linkItem.href.startsWith("http")
                        ? linkItem.href
                        : safeLink(linkItem.href, availablePages)
                    }
                    onMouseEnter={() => {
                      openDropdownImmediate(item.title);
                      setActiveTab(linkItem.title);
                    }}
                    onClick={closeDropdown}
                    className={clsx(
                      "max-w-sm p-2 rounded text-base transition-transform duration-100 hover:translate-x-1 flex items-center justify-center ",
                      isActive
                        ? "text-orange-600 font-semibold"
                        : "text-gray-700 hover:text-orange-500"
                    )}
                    // Open external links in a new tab

                    rel={
                      linkItem.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {getCompanyIcon(linkItem.title)}
                    <span className="flex justify-center items-center text-center">
                      {linkItem.title}
                    </span>
                  </Link>
                );
              }
            )}
          </div>
          <div className="w-2/3 flex items-center justify-center">
            <div className="w-full max-w-xs">
              <Image
                src="/Homepage/aboutus_image.png"
                alt="Company"
                width={400}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesDropdown = ({
  item,
  openDropdownImmediate,
  activeTab,
  setActiveTab,
  closeDropdown,
}: {
  item: (typeof navItems)[number];
  openDropdownImmediate: (title?: string | null) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  closeDropdown: () => void;
  toggleDropdown: (title: string) => void;
}) => {
  const servicesObj: Record<string, string[]> =
    !item.items || Array.isArray(item.items)
      ? {}
      : (item.items as unknown as Record<string, string[]>);
  const tabs = Object.keys(servicesObj);
  const current = activeTab || tabs[0] || "";

  return (
    <div className="flex w-[820px] h-auto gap-4 pl-4 pt-2 overflow-hidden">
      <div className="min-w-[80px] sm:min-w-[90px] md:min-w-[110px] lg:min-w-[140px] max-w-[220px] border-r-2 border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onMouseEnter={() => {
              openDropdownImmediate(item.title);
              setActiveTab(tab);
            }}
            className={clsx(
              "block w-full text-left p-1 rounded  text-xs sm:text-sm md:text-base",
              current === tab
                ? "text-orange-600 font-semibold bg-orange-100 rounded-l-full"
                : "text-gray-700 hover:text-orange-500"
            )}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="flex-1 min-w-0 ">
        {current === "technology" ? ( //technology
          <div className="flex">
            <div className="w-1/2 grid grid-cols-3 gap-2">
              {(servicesObj[current] || []).map((link) => (
                <Link
                  key={link}
                  href={safeLink(
                    `/component/${item.href}/${link
                      .replace(/\s+/g, "")
                      .toLowerCase()}`,
                    availablePages
                  )}
                  onMouseEnter={() => openDropdownImmediate(item.title)}
                  onClick={closeDropdown}
                  className="block text-gray-700 text-xs hover:text-orange-500 whitespace-nowrap transition-transform duration-150 hover:translate-x-1"
                >
                  {link}
                </Link>
              ))}
            </div>
            <div className="w-1/2 -my-2">
              <Image
                src="/header/hire-developer.jpg"
                alt="Technology"
                width={260}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ) : current === "design" ? ( //design
          <div className="flex">
            <div className="w-1/2 grid grid-cols-1 gap-2">
              {(servicesObj[current] || []).map((link) => (
                <Link
                  key={link}
                  href={safeLink(
                    `/component/${item.href}/${link
                      .replace(/\s+/g, "")
                      .toLowerCase()}`,
                    availablePages
                  )}
                  onMouseEnter={() => openDropdownImmediate(item.title)}
                  onClick={closeDropdown}
                  className="block text-gray-700 text-xs hover:text-orange-500 whitespace-nowrap transition-transform duration-150 hover:translate-x-1"
                >
                  {link}
                </Link>
              ))}
            </div>
            <div className="w-1/2 -my-2">
              <Image
                src="/header/hire-developer.jpg"
                alt="Technology"
                width={260}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ) : current === "Mobile" ? ( //For Mobile
          <div className="flex h-full">
            <div className="w-1/2 grid grid-cols-1 gap-2">
              {(servicesObj[current] || []).map((link) => (
                <Link
                  key={link}
                  href={safeLink(
                    `/component/${item.href}/${link
                      .replace(/\s+/g, "")
                      .toLowerCase()}`,
                    availablePages
                  )}
                  onMouseEnter={() => openDropdownImmediate(item.title)}
                  onClick={closeDropdown}
                  className="block text-gray-700 text-xs hover:text-orange-500 whitespace-nowrap transition-transform duration-150 hover:translate-x-1"
                >
                  {link}
                </Link>
              ))}
            </div>
            <div className="w-1/2 -my-2">
              <Image
                src="/header/hire-developer.jpg"
                alt="Technology"
                width={260}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ) : (
          <div
            className={clsx(
              "grid gap-2 space-y-1",
              current === "software" ? "grid-cols-3" : "grid-cols-2" //For Software
            )}
          >
            {(servicesObj[current] || []).map((link) => (
              <Link
                key={link}
                href={safeLink(
                  `/component/${item.href}/${link
                    .replace(/\s+/g, "")
                    .toLowerCase()}`,
                  availablePages
                )}
                onMouseEnter={() => openDropdownImmediate(item.title)}
                onClick={closeDropdown}
                className="block text-gray-700  text-xs  hover:text-orange-500 whitespace-nowrap transition-transform duration-150 hover:translate-x-1"
              >
                {link}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const DesktopDropdown = React.memo(
  ({
    item,
    openDropdown,
    closeDropdownWithDelay,
    openDropdownImmediate,
    pathname,
    closeDropdown,
    toggleDropdown,
  }: {
    item: (typeof navItems)[number];
    openDropdown: string | null;
    closeDropdownWithDelay: () => void;
    openDropdownImmediate: (title?: string | null) => void;
    pathname: string;
    closeDropdown: () => void;
    toggleDropdown: (title: string) => void;
  }) => {
    const [activeTab, setActiveTab] = useState<string>(() => {
      if (item.items && !Array.isArray(item.items)) {
        return Object.keys(item.items)[0] || "";
      }
      return "";
    });

    return (
      <AnimatePresence>
        {openDropdown === item.title && (
          <motion.div
            initial={{ opacity: 0, y: -1, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -1, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
              duration: 0.3,
            }}
            className={clsx(
              "absolute top-full mt-6 w-auto max-w-[90vw] bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove rounded-b-xl shadow-lg z-50 max-h-[80vh] overflow-auto",
              item.dropdownClassName
            )}
            onMouseEnter={() => openDropdownImmediate(item.title)}
            onMouseLeave={closeDropdownWithDelay}
          >
            {item.title === "Hire Developer" ? (
              <HireDeveloperDropdown
                item={item}
                openDropdownImmediate={openDropdownImmediate}
                closeDropdown={closeDropdown}
                toggleDropdown={toggleDropdown}
              />
            ) : item.title === "Fintech Software" ? (
              <FintechDropdown
                item={item}
                openDropdownImmediate={openDropdownImmediate}
                closeDropdown={closeDropdown}
                toggleDropdown={toggleDropdown}
              />
            ) : item.title === "Industries" ? (
              <IndustriesDropdown
                item={item}
                openDropdownImmediate={openDropdownImmediate}
                closeDropdown={closeDropdown}
                toggleDropdown={toggleDropdown}
              />
            ) : item.title === "Services" || item.title === "Company" ? (
              item.title === "Company" ? (
                <CompanyDropdown
                  item={item}
                  openDropdownImmediate={openDropdownImmediate}
                  pathname={pathname}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  closeDropdown={closeDropdown}
                  toggleDropdown={toggleDropdown}
                />
              ) : (
                <ServicesDropdown
                  item={item}
                  openDropdownImmediate={openDropdownImmediate}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  closeDropdown={closeDropdown}
                  toggleDropdown={toggleDropdown}
                />
              )
            ) : Array.isArray(item.items) ? (
              <div className="grid grid-cols-2 gap-3">
                {(
                  item.items as Array<string | { title: string; href: string }>
                ).map((link) => (
                  <Link
                    key={typeof link === "string" ? link : link.href}
                    href={
                      typeof link === "string"
                        ? `/component/${item.href}/${link
                            .replace(/\s+/g, "")
                            .toLowerCase()}`
                        : link.href
                    }
                    className="block text-gray-700 text-sm p-2 hover:text-orange-500"
                    onClick={closeDropdown}
                  >
                    {typeof link === "string" ? link : link.title}
                  </Link>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(
                  item.items as unknown as Record<string, string[]>
                ).map(([cat, links]) => (
                  <div key={cat}>
                    <h4 className="font-bold mb-2 text-lg text-orange-500">
                      {cat}
                    </h4>
                    {links.map((link) => (
                      <Link
                        key={link}
                        href={`/component/${item.href}/${link
                          .replace(/\s+/g, "")
                          .toLowerCase()}`}
                        className="block text-gray-700 text-sm p-2 hover:text-orange-500"
                        onClick={closeDropdown}
                      >
                        {link}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
            <div
              className={clsx(
                "hidden md:flex justify-center items-center gap-4 border-t-1 border-gray-800  p-2 rounded",
                item.title === "Hire Developer" ||
                  item.title === "Fintech Software" ||
                  item.title === "Industries"
                  ? "w-1/2"
                  : "w-full"
              )}
            >
              {socialIcons.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 text-[.70rem] hover:text-orange-500 my-1 transition-all duration-500"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);
DesktopDropdown.displayName = "DesktopDropdown";

const Header: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const navItemRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = window.setTimeout(() => {
      setOpenDropdown(null);
    }, 160);
  }, []);

  const handleMouseEnter = useCallback((title?: string | null) => {
    if (!title) return; // if title is null or undefined, stop
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(title);
  }, []);

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", mobileMenuOpen);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.fromTo(
        "#c",
        { y: -5, z: -5, rotateX: -15, rotateY: -10 },
        {
          y: 0,
          z: 0,
          rotateX: 0,
          rotateY: 0,
          duration: 0.8,
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(
        "#a",
        { y: 50, rotateX: -90, transformOrigin: "bottom center" },
        { y: 0, rotateX: 0, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        "#m",
        { x: 0 },
        {
          x: 20,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
          onComplete: () => {
            gsap.to("#m", { x: 0, duration: 0.5, ease: "power1.out" });
          },
        }
      );

      gsap.fromTo(
        "#e",
        { y: -30 },
        { y: 0, duration: 0.8, ease: "bounce.out" }
      );

      gsap.fromTo(
        "#n",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" }
      );

      gsap.to("#i", {
        rotateX: 360,
        scale: 1.2,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        repeatDelay: 6,
        ease: "power2.inOut",
      });

      gsap.to("#o", {
        rotateY: -15,
        duration: 3,
        yoyo: true,
        repeat: -1,
        repeatDelay: 10,
        ease: "power2.inOut",
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000]  bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 ">
        <Link href="/" className="flex items-center justify-center space-x-1  ">
          <Image
            src="/logo-icon.png"
            alt="Camlenio"
            width={200}
            height={80}
            className="w-8 sm:w-8 md:w-9 lg:w-11 xl:w-11 h-auto object-contain"
          />
          <span className="text-2xl md:text-[1.8rem] lg:text-3xl xl:text-[1.8rem] 2xl:text-4xl font-bold text-black mt-1 -ml-1">
            <span id="c" className="inline-block">
              C
            </span>
            <span id="a" className="inline-block">
              a
            </span>
            <span id="m" className="inline-block">
              m
            </span>
            <span id="l" className="inline-block">
              l
            </span>
            <span id="e" className="inline-block">
              e
            </span>
            <span id="n" className="inline-block">
              n
            </span>
            <span id="i" className="inline-block">
              i
            </span>
            <span id="o" className="inline-block">
              o
            </span>
          </span>
        </Link>
        <nav className="hidden md:flex  md:space-x-2 lg:space-x-4 items-center relative font-normal">
          {navItems.map((item, idx) =>
            item.dropdown ? (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
                ref={item.title === openDropdown ? navItemRef : null}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => toggleDropdown(item.title)}
                  className={clsx(
                    "inline-flex items-center text-gray-900 text-xs lg:text-sm font-medium hover:text-orange-500",
                    openDropdown === item.title && "text-orange-500"
                  )}
                >
                  {item.title}
                  <ChevronDownIcon className="ml-1 w-4 h-4" />
                </motion.button>
                {openDropdown === item.title && (
                  <DesktopDropdown
                    item={item}
                    openDropdown={openDropdown}
                    closeDropdownWithDelay={handleMouseLeave}
                    openDropdownImmediate={handleMouseEnter}
                    pathname={pathname}
                    closeDropdown={() => setOpenDropdown(null)}
                    toggleDropdown={toggleDropdown}
                  />
                )}
              </div>
            ) : (
              <Link
                key={idx}
                href={item.href}
                className="text-xs md:text-sm mt-1 text-gray-900 hover:text-orange-500 font-medium"
              >
                {item.title}
              </Link>
            )
          )}
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <XMarkIcon className="w-8 h-8 text-gray-800" />
            ) : (
              <Bars3Icon className="w-8 h-8 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove shadow-lg rounded-b-2xl p-6 md:hidden overflow-y-auto max-h-screen"
          >
            <div className="flex justify-between">
              <Link
                href="/"
                className="flex items-center space-x-1 tracking-tight "
              >
                <Image
                  src="/logo-icon.png"
                  alt="Camlenio"
                  width={200}
                  height={80}
                  className="w-8 md:w-13 h-auto object-contain"
                />
                <span className="text-2xl md:text-4xl font-bold text-black">
                  <span id="c" className="inline-block">
                    C
                  </span>
                  <span id="a" className="inline-block">
                    a
                  </span>
                  <span id="m" className="inline-block">
                    m
                  </span>
                  <span id="l" className="inline-block">
                    l
                  </span>
                  <span id="e" className="inline-block">
                    e
                  </span>
                  <span id="n" className="inline-block">
                    n
                  </span>
                  <span id="i" className="inline-block">
                    i
                  </span>
                  <span id="o" className="inline-block">
                    o
                  </span>
                </span>
              </Link>{" "}
              <div className="md:hidden">
                <AnimatePresence>
                  <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? (
                      <XMarkIcon className="w-8 h-8 text-gray-800" />
                    ) : (
                      <Bars3Icon className="w-8 h-8 text-gray-800" />
                    )}
                  </button>
                </AnimatePresence>
              </div>
            </div>
            {navItems.map((item, idx) =>
              item.dropdown ? (
                <div key={idx} className="mb-2">
                  <button
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === item.title ? null : item.title
                      )
                    }
                    className="w-full flex justify-between items-center text-base p-4 text-gray-800 font-semibold rounded hover:bg-orange-50 transition-all duration-300"
                  >
                    {item.title}
                    <ChevronDownIcon
                      className={clsx(
                        "w-5 h-5 transition-transform duration-300 ",
                        mobileDropdown === item.title && "rotate-180"
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileDropdown === item.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden mt-2 pl-4 "
                      >
                        {Array.isArray(item.items) ? (
                          item.items.map(
                            (
                              link: string | { title: string; href: string }
                            ) => (
                              <Link
                                key={
                                  typeof link === "string" ? link : link.title
                                }
                                href={
                                  typeof link === "string"
                                    ? safeLink(
                                        `/component/${item.href}/${link
                                          .replace(/\s+/g, "")
                                          .toLowerCase()}`,
                                        availablePages
                                      )
                                    : link.href
                                }
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-base p-2 text-gray-700 hover:text-orange-900 space-y-2"
                              >
                                {typeof link === "string" ? link : link.title}
                              </Link>
                            )
                          )
                        ) : (
                          <MobileDropdown
                            item={
                              item as {
                                href: string;
                                items: Record<string, string[]>;
                              }
                            }
                            setMobileMenuOpen={setMobileMenuOpen}
                          />
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={idx}
                  href={safeLink(item.href, availablePages)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-900 font-medium px-2 py-2 mb-2 hover:bg-orange-50 rounded"
                >
                  {item.title}
                </Link>
              )
            )}
            <div className="hidden md:flex justify-start items-center gap-4 border-t-1 border-gray-800  mt-2 pw-full p-2 rounded ">
              {socialIcons.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 text-xs hover:text-orange-500 transition-all duration-150 "
                >
                  {s.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

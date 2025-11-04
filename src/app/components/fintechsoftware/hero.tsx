"use client";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const leftContentRef = useRef<HTMLDivElement>(null);
  const topLeftRef = useRef<HTMLDivElement>(null);
  const topRightRef = useRef<HTMLDivElement>(null);
  const bottomLeftRef = useRef<HTMLDivElement>(null);
  const bottomRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const triggerElement = leftContentRef.current?.parentElement;

    ScrollTrigger.normalizeScroll(true);
    ScrollTrigger.config({
      ignoreMobileResize: true,
    });

    gsap.config({
      force3D: true,
      autoSleep: 60,
      nullTargetWarn: false,
    });

    const allElements = [
      leftContentRef.current,
      topLeftRef.current,
      topRightRef.current,
      bottomLeftRef.current,
      bottomRightRef.current,
    ].filter(Boolean);

    gsap.set(allElements, {
      willChange: "transform, opacity",
    });

    const scrollTriggerConfig = {
      trigger: triggerElement,
      start: "top 20%",
      end: "bottom 20%",
      toggleActions: "play none none  none",
      markers: false,
      anticipatePin: 1,
    };

    gsap.fromTo(
      leftContentRef.current,
      {
        x: "-30%",
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        x: "0%",
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.4,
        ease: "power2.inOut",
        clearProps: "transform, opacity, filter",
        scrollTrigger: scrollTriggerConfig,
      }
    );

    const imgTimeline = gsap.timeline({
      scrollTrigger: scrollTriggerConfig,
    });

    const imageRefs = [
      topLeftRef.current,
      topRightRef.current,
      bottomLeftRef.current,
      bottomRightRef.current,
    ].filter(Boolean);

    imgTimeline.fromTo(
      imageRefs,
      {
        x: "25%",
        opacity: 0,
        filter: "blur(3px)",
      },
      {
        x: "0%",
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.15,
        clearProps: "transform, opacity, filter",
      },
      0.2
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <div className="py-16 md:pt-14 grid grid-cols-1 items-center gap-6 px-4 sm:px-6 md:min-h-screen md:grid-cols-2 lg:gap-12 lg:px-8 xl:px-16">
        <div
          ref={leftContentRef}
          className="order-2 md:order-1 animation-optimized"
        >
          <p className="text-gray-900 text-sm font-semibold ml-1 tracking-wide">
            {"Fintech Solution —"}
          </p>

          <h1
            id="travel-hero-heading"
            className="text-3xl font-extrabold leading-none tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            {"Discover the"}
            <br />
            {"Future of Financial"}
            <br />
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336",
              }}
            >
              {"Innovation"}
            </span>
          </h1>

          <p className="max-w-5xl text-gray-600 text-sm leading-relaxed sm:text-base md:text-lg mb-4">
            Empowering businesses with secure, scalable, and intelligent fintech
            solutions.
          </p>
          <div
            className="rounded-2xl border border-orange-300 bg-[#FEF3E6] shadow-sm p-4 md:p-5"
            role="group"
            aria-label="Quick trip planner"
          >
            <div className="flex flex-col items-stretch justify-evenly gap-4 md:flex-row md:items-center md:gap-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-8 w-8 sm:h-10 sm:w-10 p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-500 text-white shadow-lg transition-transform duration-200" />
                <div className="grow">
                  <div className="text-sm font-semibold">Location</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {"Where are you going?"}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="h-8 w-8 sm:h-10 sm:w-10 p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-500 text-white shadow-lg transition-transform duration-200" />
                <div className="grow">
                  <div className="text-sm font-semibold">Select Date</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {"03 August 2020"}
                  </div>
                </div>
              </div>

              <div className="mt-2 md:mt-0 flex items-center">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-xl px-4 py-3 bg-orange-500 text-gray-100 text-sm font-semibold hover:bg-orange-600 transition-colors duration-200"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full order-1 md:order-2 animation-optimized">
          <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 lg:gap-6 py-4 md:py-8">
            {/* Top-left: tall image */}
            <div ref={topLeftRef} className="flex justify-end">
              <div className="relative aspect-[3/4] w-full sm:w-4/5 md:w-3/4 overflow-hidden rounded-2xl sm:rounded-3xl">
                <Image
                  src="/ServiceDropdown/fintechsoftware/fintech1.webp"
                  alt="Fintech innovation visualization"
                  width={400}
                  height={533}
                  className="h-full w-full object-cover object-bottom"
                  priority
                />
                <div className="absolute left-2 top-2 sm:left-3 sm:top-3 rounded-lg sm:rounded-xl bg-card/90 px-2 py-1 sm:px-3 sm:py-2 text-xs font-semibold text-card-foreground shadow-sm">
                  100+ Destinations
                  <div className="block text-[10px] font-normal text-muted-foreground">
                    More than 100 travelers use the platform
                  </div>
                </div>
              </div>
            </div>

            {/* Top-right: wide image */}
            <div ref={topRightRef} className="flex justify-start">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl sm:rounded-3xl">
                <Image
                  src="/ServiceDropdown/fintechsoftware/fintech2.webp"
                  alt="Secure fintech platform"
                  width={500}
                  height={281}
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-2 top-2 sm:left-3 sm:top-3 rounded-lg sm:rounded-xl bg-white/30 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-2 text-xs font-semibold text-gray-900 shadow-sm ">
                  100% <span className="ml-1">Verified</span>
                </div>
              </div>
            </div>

            {/* Bottom-left: wide image */}
            <div ref={bottomLeftRef} className="flex justify-end">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl sm:rounded-3xl">
                <Image
                  src="/ServiceDropdown/fintechsoftware/fintech3.webp"
                  alt="Financial technology interface"
                  width={500}
                  height={281}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Bottom-right: tall image */}
            <div ref={bottomRightRef} className="flex justify-start">
              <div className="relative aspect-[3/4] w-full sm:w-4/5 md:w-3/4 overflow-hidden rounded-2xl sm:rounded-3xl">
                <Image
                  src="/ServiceDropdown/fintechsoftware/fintech4.webp"
                  alt="Digital banking solution"
                  width={400}
                  height={533}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

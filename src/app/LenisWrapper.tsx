"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
  children: React.ReactNode;
}

export default function LenisWrapper({ children }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(2, -10 * t),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(ticker);

    gsap.ticker.lagSmoothing(0);
    window.scrollTo(0, 0);

    return () => {
      // Clean up both the Lenis instance and the GSAP ticker
      gsap.ticker.remove(ticker);
      lenis.destroy();
    };
  }, [pathname]);

  return <>{children}</>;
}

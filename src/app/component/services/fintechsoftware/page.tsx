"use client";
import Hero from "../../../components/fintechsoftware/hero";
import ResellerMarketSection from "@/app/components/fintechsoftware/recommend-section";
import Features from "@/app/components/fintechsoftware/features";
import WhatFintech from "@/app/components/fintechsoftware/WhatFintech";
import AePSSection from "@/app/components/fintechsoftware/aeps-section";
import SecureAePSSection from "@/app/components/fintechsoftware/secure-aeps-section";
import B2BAepsFeatures from "@/app/components/fintechsoftware/b2b-aeps-features";
import BBPSFeatures from "@/app/components/fintechsoftware/BBPSFeatures";
import BBPSRecurringPayments from "@/app/components/fintechsoftware/BBPSRecurringPayments";
import { CTA } from "@/app/components/fintechsoftware/cta";

export default function FintechSoftware() {
  return (
    <div className="relative">
      <Hero />
      <ResellerMarketSection />
      <WhatFintech />
      <Features />
      <AePSSection />
      <SecureAePSSection />
      <B2BAepsFeatures />
      <BBPSFeatures />
      <BBPSRecurringPayments />
      <CTA />
    </div>
  );
}

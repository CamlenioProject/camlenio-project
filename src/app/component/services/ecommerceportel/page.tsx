"use client";
import ContactUs from "../../../components/Contactus/page";
import Hero from "../../../components/ecommercedevelopment/hero";
import WhyChooseUs from "../../../components/ecommercedevelopment/why-choose-us";
import Services from "../../../components/ecommercedevelopment/services";
import OurProcess from "../../../components/ecommercedevelopment/our-process";
import EcommerceServicesSection from "@/app/components/ecommercedevelopment/EcommerceServicesSection";
import { CTA } from "@/app/components/ecommercedevelopment/cta-section";

export default function EcommerceSoftware() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <Services />
      <OurProcess />
      <EcommerceServicesSection />
      <CTA />
      <ContactUs />
    </div>
  );
}

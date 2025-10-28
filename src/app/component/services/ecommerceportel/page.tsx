"use client";
import ContactUs from "../../../components/Contactus/page";
import Hero from "../../../components/ecommercedevelopment/hero";
import WhyChooseUs from "../../../components/ecommercedevelopment/why-choose-us";
import Services from "../../../components/ecommercedevelopment/services";
import OurProcess from "../../../components/ecommercedevelopment/our-process";
import LogoSlider from "../../../components/Homepage/logo-slider";

export default function EcommerceSoftware() {
  return (
    <div className="bg-gradient-to-r  from-indigo-50 via-orange-200 to-indigo-100">
      <Hero />
      <WhyChooseUs />
      <Services />
      <OurProcess />
      <ContactUs />
      <LogoSlider />
    </div>
  );
}

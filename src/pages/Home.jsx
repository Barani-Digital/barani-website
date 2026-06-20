import React from "react";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FeaturedServices from "../components/home/FeaturedServices";
import PricingSection from "../components/home/PricingSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <FeaturedServices />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </>
  );
}

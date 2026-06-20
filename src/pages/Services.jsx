import React from "react";
import ServiceHero from "../components/services/ServiceHero";
import ServiceDetailCard from "../components/services/ServiceDetailCard";
import PricingSection from "../components/home/PricingSection";
import CTASection from "../components/home/CTASection";
import { servicesData } from "@/services/mockApi";

export default function Services() {
  return (
    <>
      <ServiceHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {servicesData.map((service, i) => (
          <ServiceDetailCard key={service.id} service={service} index={i} />
        ))}
      </div>
      <PricingSection />
      <CTASection />
    </>
  );
}

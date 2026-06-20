import React from "react";
import PortfolioHero from "../components/portfolio/PortfolioHero";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";
import CTASection from "../components/home/CTASection";

export default function Portfolio() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <CTASection />
    </>
  );
}

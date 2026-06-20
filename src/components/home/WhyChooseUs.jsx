import React from "react";
import { Award, Zap, Cpu, Heart } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import GlassCard from "../shared/GlassCard";

const cards = [
  {
    icon: Award,
    title: "Expertise",
    description: "Professional solutions tailored to business goals.",
    color: "#884DFC",
  },
  {
    icon: Zap,
    title: "Fast Support",
    description: "Quick response and issue resolution.",
    color: "#4BE4FF",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    description: "Latest tools and best practices.",
    color: "#884DFC",
  },
  {
    icon: Heart,
    title: "Customer Focused",
    description: "Solutions built around client needs.",
    color: "#4BE4FF",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose Us"
          subtitle="We combine technical expertise with creative vision to deliver results that matter."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <GlassCard key={card.title} delay={i * 0.1}>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${card.color}15` }}
              >
                <card.icon className="w-6 h-6" style={{ color: card.color }} />
              </div>
              <h3 className="text-white font-display font-semibold text-lg mb-2">
                {card.title}
              </h3>
              <p className="text-[#B8B8B8] text-sm leading-relaxed">
                {card.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

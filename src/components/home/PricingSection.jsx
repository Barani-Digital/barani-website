import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Palette, Globe, Headphones, Laptop, Search, Bug } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import { pricingData } from "@/services/mockApi";
import { siteConfig } from "@/config/siteConfig";

const iconMap = { Palette, Globe, Headphones, Laptop, Search, Bug };

export default function PricingSection() {
  return (
    <section className="py-24 md:py-16 relative" id="pricing">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#884DFC02] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          title="Service Pricing"
          subtitle="Transparent rates for quality digital services. All prices are negotiable based on your specific needs."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pricingData.map((plan, i) => {
            const Icon = iconMap[plan.icon];
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative rounded-3xl p-8 transition-all duration-500 flex flex-col ${
                  plan.highlighted
                    ? "glass-strong border border-[#884DFC60] shadow-[0_0_50px_rgba(136,77,252,0.2)]"
                    : "glass"
                }`}
              >
                {plan.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 ${
                    plan.highlighted
                      ? ""
                      : ""
                  }`}>
                    <span className={`px-4 py-1 rounded-full text-xs font-bold text-white whitespace-nowrap ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-[#884DFC] to-[#6B3FCF]"
                        : "bg-[#4BE4FF] text-black"
                    }`}>
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-[#884DFC15] flex items-center justify-center mb-5">
                  {Icon && <Icon className="w-6 h-6 text-[#884DFC]" />}
                </div>

                {/* Title */}
                <h3 className="text-white font-display font-bold text-xl tracking-wide mb-3">
                  {plan.title}
                </h3>

                {/* Description */}
                <p className="text-[#B8B8B8] text-xs leading-relaxed mb-6 flex-1">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-display font-bold text-white">
                    {plan.currency} {plan.price}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#884DFC] mt-0.5 flex-shrink-0" />
                      <span className="text-[#B8B8B8] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={siteConfig.whatsappLink(`Hi! I'm interested in the ${plan.title} service.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-gradient-to-r from-[#5B2D99] via-[#7B3FE4] to-[#884DFC] text-white font-heading font-semibold text-sm hover:brightness-110 hover:shadow-[0_0_30px_rgba(136,77,252,0.5)] transition-all duration-300 mt-auto"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

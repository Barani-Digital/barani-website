import React from "react";
import { motion } from "framer-motion";
import { Palette, Globe, Headphones, Laptop, Search, Bug, CheckCircle } from "lucide-react";

const iconMap = {Palette, Globe, Headphones, Laptop, Search, Bug,};

const images = {
  "graphic-design": "/img/graphic-design-img.jpeg",
  "web-dev-maintenance": "/img/web-dev-maintenance-img.jpeg",
  "software-support": "/img/sw-support-img.jpeg",
  "cyber-services": "/img/cyber-image.jpg",
  "seo": "/img/seo.png",
  "qa-testing": "/img/qa-testing.jpeg",
};

export default function ServiceDetailCard({ service, index }) {
  const Icon = iconMap[service.icon];
  const isReversed = index % 2 !== 0;
  const imgSrc = images[service.id];

  return (
    <motion.section
      id={service.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="py-16 md:py-20"
    >
      <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isReversed ? "lg:direction-rtl" : ""}`}>
        {/* Image */}
        <div className={`relative ${isReversed ? "lg:order-2" : ""}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#884DFC10] to-[#4BE4FF08] rounded-3xl blur-2xl" />
          <img
            src={imgSrc}
            alt={service.title}
            className="relative rounded-3xl w-full shadow-2xl object-cover aspect-[4/3]"
          />
        </div>

        {/* Content */}
        <div className={isReversed ? "lg:order-1" : ""}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#884DFC15] flex items-center justify-center">
              {Icon && <Icon className="w-6 h-6 text-[#884DFC]" />}
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">{service.title}</h2>
          </div>

          <p className="text-[#B8B8B8] text-base leading-relaxed mb-8">{service.description}</p>

          {/* Features */}
          <div className="mb-8">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 opacity-60">What&apos;s Included</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#884DFC] flex-shrink-0" />
                  <span className="text-white text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap gap-2">
            {service.benefits.map((b) => (
              <span key={b} className="px-3 py-1.5 rounded-full glass text-xs text-[#4BE4FF] font-medium">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

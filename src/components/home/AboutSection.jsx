import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";

const capabilities = [
  "Website Revamp, Development and Maintenance",
  "Social media management",
  "Software Support",
  "cyber cafe services",
  "Graphic Design",
  "QA Testing",
];

const stats = [
  { value: "20+", label: "Projects" },
  { value: "10+", label: "Clients" },
  { value: "24/7", label: "Support" },
  { value: "98%", label: "Satisfaction" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-0 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#884DFC15] to-transparent rounded-3xl blur-2xl" />
            <img
              src="/img/about-img.jpg"
              alt="men and women standing in a corporate building made of glass"
              className="relative rounded-3xl w-full object-cover aspect-[4/3]"
            />
            {/* Stats Overlay */}
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass-strong rounded-xl px-4 py-3 text-center"
                >
                  <p className="text-xl font-display font-bold gradient-text">{stat.value}</p>
                  <p className="text-[#B8B8B8] text-xs mt-0.5">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              title="About Barani Digital"
              align="left"
            />
            <p className="text-[#B8B8B8] text-lg leading-relaxed mb-8 -mt-8">
              Barani Digital is a Nairobi-based company helping Kenyan businesses grow through professional web design, SEO, website maintenance, revamps, cyber services, and QA testing.
            </p>

            <div className="space-y-3 mb-8">
              {capabilities.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#884DFC] flex-shrink-0" />
                  <span className="text-white text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

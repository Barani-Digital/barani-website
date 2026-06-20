import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import { testimonialsData } from "@/services/mockApi";

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Real feedback from businesses we've helped grow."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(136,77,252,0.1)] transition-shadow duration-500"
            >
              <Quote className="w-8 h-8 text-[#884DFC] opacity-30 mb-4" />
              <p className="text-[#B8B8B8] text-sm leading-relaxed mb-6">{t.text}</p>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} className="w-3.5 h-3.5 fill-[#884DFC] text-[#884DFC]" />
                ))}
              </div>
              <p className="text-white font-semibold text-sm">{t.name}</p>
              <p className="text-[#B8B8B8] text-xs">{t.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";

export default function QuoteHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#884DFC06] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#884DFC] opacity-[0.04] blur-[150px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Request a <span className="gradient-text">Quote</span>
          </h1>
          <p className="text-[#B8B8B8] text-lg md:text-xl leading-relaxed">
            Tell us about your project and receive a tailored quotation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

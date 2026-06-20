import React from "react";
import { motion } from "framer-motion";

export default function ServiceHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#884DFC08] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#884DFC] opacity-[0.04] blur-[150px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-[#B8B8B8] text-lg md:text-xl leading-relaxed">
            Professional digital services designed to help Kenyan businesses grow online.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

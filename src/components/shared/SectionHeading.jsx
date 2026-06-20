import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle, align = "center" }) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-16 ${alignClass}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[#884DFC] to-[#4BE4FF]" style={align !== "center" ? { marginLeft: 0 } : {}} />
    </motion.div>
  );
}

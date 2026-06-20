import React from "react";
import { motion } from "framer-motion";

export default function GlassCard({ children, className = "", delay = 0, hover = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={hover ? { y: -6, scale: 1.02 } : {}}
      className={`glass rounded-2xl p-6 transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(136,77,252,0.15)] ${className}`}
    >
      {children}
    </motion.div>
  );
}

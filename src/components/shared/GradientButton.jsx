import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function GradientButton({ children, to, href, onClick, variant = "primary", className = "", size = "default" }) {
  const sizeClasses = size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm";

  const baseClasses = `inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full transition-all duration-300 ${sizeClasses} ${className}`;

  const variants = {
    // Solid pill with dark purple-to-violet gradient fill — matches the image
    primary: `${baseClasses} bg-gradient-to-r from-[#5B2D99] via-[#7B3FE4] to-[#884DFC] text-white hover:shadow-[0_0_35px_rgba(136,77,252,0.5)] hover:brightness-110`,
    // Outlined pill with same gradient border and subtle fill
    outline: `${baseClasses} border border-[#884DFC80] bg-gradient-to-r from-[#5B2D9918] to-[#884DFC18] text-white hover:from-[#5B2D9930] hover:to-[#884DFC30] hover:border-[#884DFC] hover:shadow-[0_0_25px_rgba(136,77,252,0.25)]`,
    // Cyan accent variant
    cyan: `${baseClasses} bg-gradient-to-r from-[#4BE4FF] to-[#3BC5E0] text-black font-bold hover:shadow-[0_0_30px_rgba(75,228,255,0.4)] hover:brightness-110`,
  };

  const content = (
    <motion.span
      className={variants[variant]}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.span>
  );

  if (to) return <Link to={to}>{content}</Link>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>;
  if (onClick) return <button onClick={onClick}>{content}</button>;
  return content;
}

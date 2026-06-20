import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import GradientButton from "../shared/GradientButton";

const clientLogos = [
  "/img/aylf.png",
  "/img/naicef.png",
  "/img/bimmerbenz.png",
  "/img/morfree.ico",
];

export default function HeroSection() {
  return (
    <section className="mt-10 relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#884DFC] opacity-[0.06] blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#4BE4FF] opacity-[0.04] blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-[#B8B8B8] mb-8"
            >
              Bespoke Digital Solutions for Businesses 
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.05] tracking-tight mb-6">
              Your Digital{" "}
              <span className="gradient-text-animated">Growth</span>{" "}
              Partner
            </h1>

            <p className="text-[#B8B8B8] text-lg md:text-xl leading-relaxed max-w-lg mb-10">
              Helping Kenyan businesses grow through web development and maintenance, Systems Development, SEO, cyber services, and QA testing.
            </p>

            <div className="flex flex-wrap gap-4">
              <GradientButton to="/quote" size="lg">
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </GradientButton>
              <GradientButton to="/portfolio" variant="outline" size="lg">
                View Portfolio
              </GradientButton>
            </div>

            {/* Trust Indicators */}
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="flex -space-x-2">
                {clientLogos.map((logo, index) => (
                  <div key={index} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#884DFC] to-[#4BE4FF] border-2 border-black flex items-center justify-center text-[10px] text-white font-bold">
                     <img
                        src={logo}
                        alt={`Client ${index + 1}`}
                        className="w-full h-full object-cover"
                     />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white text-sm font-semibold">5+ businesses served</p>
                <p className="text-[#B8B8B8] text-xs">Trusted across Nairobi</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#884DFC20] to-[#4BE4FF10] rounded-3xl blur-3xl" />
              <img
                src="/img/hero-img.jpg"
                alt="Black professional in a modern bright office smiling confidently"
                className="relative z-10 w-full rounded-3xl object-cover aspect-[4/3]"
              />
              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-8 glass-strong rounded-2xl px-5 py-3 z-20"
              >
                <p className="text-[#4BE4FF] text-2xl font-display font-bold">20+</p>
                <p className="text-[#B8B8B8] text-xs">Projects Done</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-strong rounded-2xl px-5 py-3 z-20"
              >
                <p className="text-[#884DFC] text-2xl font-display font-bold">24/7</p>
                <p className="text-[#B8B8B8] text-xs">Support</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

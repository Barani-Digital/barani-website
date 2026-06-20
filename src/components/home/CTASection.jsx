import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import GradientButton from "../shared/GradientButton";
import { siteConfig } from "@/config/siteConfig";

export default function CTASection() {
  return (
    <section className="py-24 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#884DFC15] via-[#0a0a0a] to-[#4BE4FF08]" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#884DFC] opacity-[0.06] blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#4BE4FF] opacity-[0.04] blur-[120px]" />

          {/* Border */}
          <div className="absolute inset-0 rounded-3xl border border-[#884DFC15]" />

          <div className="relative py-20 px-8 md:px-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 tracking-tight">
              Ready to Grow Your Business?
            </h2>
            <p className="text-[#B8B8B8] text-lg max-w-xl mx-auto mb-10">
              Let&apos;s discuss how we can help transform your digital presence and drive real results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <GradientButton to="/quote" size="lg">
                Request a Quote <ArrowRight className="w-4 h-4" />
              </GradientButton>
              <GradientButton
                href={siteConfig.whatsappLink("Hi! I'd like to discuss a project.")}
                variant="outline"
                size="lg"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </GradientButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

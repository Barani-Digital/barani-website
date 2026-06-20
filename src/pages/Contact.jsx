import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, Phone, User, Send, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*New Contact Message*

*Name:* ${form.name}
*Email:* ${form.email}

*Message:*
${form.message}`;
    window.open(siteConfig.whatsappLink(message));
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-[#B8B8B8] text-lg md:text-xl leading-relaxed">
              Have a project in mind? Let&apos;s talk about how we can bring it to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-5"
            >
              <ContactCard
                icon={MessageCircle}
                label="WhatsApp"
                value={siteConfig.phone}
                href={siteConfig.whatsappLink()}
                color="text-[#4BE4FF]"
              />
              <ContactCard
                icon={Mail}
                label="Email"
                value={siteConfig.email}
                href={`mailto:${siteConfig.email}`}
                color="text-[#884DFC]"
              />
              <ContactCard
                icon={Phone}
                label="Phone"
                value={siteConfig.phone}
                href={`tel:${siteConfig.phone}`}
                color="text-[#4BE4FF]"
              />
              <ContactCard
                icon={MapPin}
                label="Location"
                value={siteConfig.location}
                color="text-[#884DFC]"
              />
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="glass-strong rounded-3xl p-8 md:p-10">
                <h3 className="text-xl font-display font-semibold text-white mb-6">
                  Send us a message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <InputField
                    icon={User}
                    placeholder="Your Name *"
                    value={form.name}
                    onChange={(v) => setForm((p) => ({ ...p, name: v }))}
                  />
                  <InputField
                    icon={Mail}
                    placeholder="Email Address *"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm((p) => ({ ...p, email: v }))}
                  />
                  <div>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3.5 rounded-xl bg-[#ffffff06] border border-[#ffffff10] text-white text-sm placeholder:text-[#B8B8B850] focus:outline-none focus:border-[#884DFC50] focus:shadow-[0_0_10px_rgba(136,77,252,0.1)] transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!form.name || !form.email}
                    className={`flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      form.name && form.email
                        ? "bg-gradient-to-r from-[#5B2D99] via-[#7B3FE4] to-[#884DFC] text-white hover:brightness-110 hover:shadow-[0_0_30px_rgba(136,77,252,0.5)]"
                        : "bg-[#ffffff08] text-[#B8B8B850] cursor-not-allowed"
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    Send via WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactCard({ icon: Icon, label, value, href, color }) {
  const Card = href ? "a" : "div";
  return (
    <Card
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-[#884DFC50] transition-all duration-300 block"
    >
      <div className={`w-10 h-10 rounded-xl bg-[#ffffff08] flex items-center justify-center flex-shrink-0 ${color}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-[#B8B8B8] text-xs mb-0.5">{label}</p>
        <p className="text-white text-sm font-medium">{value}</p>
      </div>
    </Card>
  );
}

function InputField({ icon: Icon, placeholder, type = "text", value, onChange }) {
  return (
    <div className="relative">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B8B8B8]" />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#ffffff06] border border-[#ffffff10] text-white text-sm placeholder:text-[#B8B8B850] focus:outline-none focus:border-[#884DFC50] focus:shadow-[0_0_10px_rgba(136,77,252,0.1)] transition-all"
      />
    </div>
  );
}

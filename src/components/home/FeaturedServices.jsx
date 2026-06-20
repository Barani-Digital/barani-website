import React from "react";
import { motion } from "framer-motion";
import { Palette, Globe, Headphones, Laptop, Search, Bug, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../shared/SectionHeading";

const iconMap = { Palette, Globe, Headphones, Laptop, Search, Bug };

const services = [
  { icon: "Palette", title: "Graphic Design", description: "Beautiful, professional graphic design that communicates your brand's story visually.", color: "#884DFC" },
  { icon: "Globe", title: "Web Development and Maintenance", description: "Full-stack web development and ongoing maintenance to keep your site running perfectly.", color: "#4BE4FF" },
  { icon: "Headphones", title: "Software Support", description: "Reliable technical support to keep your software systems running smoothly.", color: "#884DFC" },
  { icon: "Laptop", title: "Cyber Services", description: "Resume writing, KRA services, eCitizen services, HEF registration, and more.", color: "#4BE4FF" },
  { icon: "Search", title: "SEO", description: "Improve your search rankings and get found by the right customers.", color: "#884DFC" },
  { icon: "Bug", title: "QA Testing", description: "Thorough testing to ensure your software works flawlessly on all devices.", color: "#4BE4FF" },
];

export default function FeaturedServices() {
  return (
    <section className="py-24 md:py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#884DFC03] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          title="Our Services"
          subtitle="Professional digital services designed to help Kenyan businesses grow online."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group glass rounded-2xl p-7 transition-all duration-500 hover:shadow-[0_0_40px_rgba(136,77,252,0.12)] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#884DFC05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${service.color}12` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: service.color }} />
                  </div>
                  <h3 className="text-white font-display font-semibold text-xl mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#B8B8B8] text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#884DFC] hover:text-[#4BE4FF] transition-colors"
                  >
                    Learn More
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

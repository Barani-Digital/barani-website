import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const footerLinks = {
  Company: [
    { label: "Home", to: "/" },
    { label: "About", to: "/#about" },
    { label: "Services", to: "/services" },
    { label: "Portfolio", to: "/portfolio" },
  ],
  Services: [
    { label: "Web Development and Maintenance", to: "/services" },
    { label: "SEO", to: "/services#seo" },
    { label: "Graphics Design", to: "/services" },
    { label: "Software Support", to: "/services" },
    { label: "Cyber Services", to: "/services" },
    { label: "QA Testing", to: "/services"},
  ],
};

const socialIcons = {
  facebook: <Facebook className="w-4 h-4 text-[#8554F7]" />,
  instagram: <Instagram className="w-4 h-4 text-[#8554F7]" />,
  tiktok: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 text-[#8554F7]"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.12v13.39a2.8 2.8 0 1 1-2.8-2.8c.31 0 .61.05.89.15V9.56a5.93 5.93 0 0 0-.89-.07A5.92 5.92 0 1 0 15.82 15V8.39a7.93 7.93 0 0 0 4.77 1.6V6.87c-.34 0-.67-.06-1-.18Z" />
    </svg>
  ),
  linkedin: (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 text-[#8554F7]"
  >
    <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1.02 4.6 1.02 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zM1.5 8h3V22h-3V8zm7 0h2.88v1.91h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59V22h-3v-7.1c0-1.69-.03-3.87-2.36-3.87-2.37 0-2.73 1.85-2.73 3.75V22h-3V8z" />
  </svg>
),
};

export default function Footer() {
  return (
    <footer className="relative border-t border-[#ffffff08] bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative flex-shrink-0">
                <img src="/img/barani-logo-nav.png" width="150"/>
              </div>
            </div>
            <p className="text-[#B8B8B8] text-sm leading-relaxed mb-6">
              Helping businesses grow through web design, SEO, maintenance, revamps, integrations, and QA testing.
            </p>
            <div className="flex gap-3">
              {Object.entries(siteConfig.social).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-[#B8B8B8] hover:text-[#884DFC] hover:border-[#884DFC50] transition-all duration-300 text-xs font-bold uppercase"
                >
                  {socialIcons[name]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-[#B8B8B8] text-sm hover:text-[#884DFC] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={siteConfig.whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#B8B8B8] text-sm hover:text-[#4BE4FF] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#8554F7]" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-[#B8B8B8] text-sm hover:text-[#4BE4FF] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#8554F7]" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#B8B8B8] text-sm">
                <MapPin className="w-4 h-4 text-[#8554F7]" />
                {siteConfig.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#ffffff08] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#B8B8B8] text-xs">
            © {new Date().getFullYear()} Barani Digital. All rights reserved.
          </p>
          <p className="text-[#B8B8B8] text-xs">
            Bespoke Digital Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}

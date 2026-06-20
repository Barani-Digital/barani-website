import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ExternalLink, X, Target, Lightbulb, BarChart3 } from "lucide-react";

const categories = ["All", "Websites", "Graphic Design"];

const projects = [
  { id: 1, title: "Personal Portfolio", category: "Websites", image: "/img/devisaac-site-portfolio.png"},
  { id: 2, title: "Business Card", category: "Graphic Design", image: "/img/card-1-portfolio.png"},
  { id: 3, title: "Business Card", category: "Graphic Design", image: "/img/card-2-portfolio.png"},
  { id: 4, title: "Business Web Application", category: "Websites", image: "/img/morfree-site-portfolio.png"},
  { id: 5, title: "E-commerce Web application", category: "Websites", image: "/img/bimmerbenz-site-portfolio.png"},
  { id: 6, title: "Busines website", category: "Websites", image: "/img/y2s-portfolio.png"} 
]

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#884DFC] text-white shadow-[0_0_20px_rgba(136,77,252,0.3)]"
                  : "glass text-[#B8B8B8] hover:text-white hover:bg-[#ffffff08]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#884DFC] text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-white font-display font-semibold text-lg mt-1">{project.title}</h3>
                  <p className="text-[#B8B8B8] text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{project.description}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full glass-strong flex items-center justify-center">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-56 object-cover rounded-t-3xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full glass-strong flex items-center justify-center text-white hover:bg-white/20 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8">
                <span className="text-[#884DFC] text-xs font-semibold uppercase tracking-wider">{selectedProject.category}</span>
                <h2 className="text-2xl font-display font-bold text-white mt-2 mb-4">{selectedProject.title}</h2>
                <p className="text-[#B8B8B8] leading-relaxed mb-8">{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

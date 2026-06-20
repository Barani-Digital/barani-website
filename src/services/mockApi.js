const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

export const servicesData = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    icon: "Palette",
    description: "Beautiful, professional graphic design that communicates your brand's story visually.",
    features: ["Logo & Brand Identity", "Social Media Graphics", "Print & Digital Design", "Marketing Materials"],
    benefits: ["Strong Brand Identity", "Professional Look", "Consistent Visuals"],
  },
  {
    id: "web-dev-maintenance",
    title: "Web Development and Maintenance",
    icon: "Globe",
    description: "Full-stack web development and ongoing maintenance to keep your site running perfectly.",
    features: ["Responsive Websites", "Content Updates", "Performance Optimization", "Security Patches"],
    benefits: ["Always Online", "Fast & Secure", "Modern Design"],
  },
  {
    id: "software-support",
    title: "Software Support",
    icon: "Headphones",
    description: "Reliable technical support to keep your software systems running smoothly.",
    features: ["Troubleshooting", "System Updates", "User Training", "Remote Assistance"],
    benefits: ["Quick Resolutions", "Less Downtime", "Expert Help"],
  },
  {
    id: "cyber-services",
    title: "Cyber Services",
    icon: "Laptop",
    description: "Resume writing, KRA services, eCitizen services, HEF registration, and more.",
    features: ["Resume Writing", "KRA PIN Registration", "Tax Returns Filing", "eCitizen Services", "HEF Registration"],
    benefits: ["Professional Documents", "Hassle-Free Registration", "Expert Guidance"],
  },
  {
    id: "seo",
    title: "SEO",
    icon: "Search",
    description: "Improve your search rankings and get found by the right customers.",
    features: ["Keyword Research", "On-Page SEO", "Link Building", "Analytics & Reports"],
    benefits: ["Higher Rankings", "More Traffic", "Better ROI"],
  },
  {
    id: "qa-testing",
    title: "QA Testing",
    icon: "Bug",
    description: "Thorough testing to ensure your software works flawlessly across all devices.",
    features: ["Functional Testing", "Usability Testing", "Performance Testing", "Security Testing"],
    benefits: ["Bug-free Experience", "User Satisfaction", "Reliable Performance"],
  },
];

export const statsData = [
  { label: "Projects Completed", value: "20+", icon: "Briefcase" },
  { label: "Businesses Served", value: "5+", icon: "Users" },
  { label: "Support Available", value: "24/7", icon: "Clock" },
  { label: "Client Satisfaction", value: "98%", icon: "Star" },
];

export const pricingData = [
  {
    id: "graphic-design",
    title: "GRAPHIC DESIGN",
    price: "15000",
    currency: "KES",
    description: "The Price is Negotiable Depending on Scope and Complexity.",
    features: [
      "Logo & Brand Identity",
      "Social Media Graphics",
      "Print & Digital Design",
      "Marketing Materials",
    ],
    highlighted: false,
    badge: null,
    icon: "Palette",
  },
  {
    id: "web-dev-maintenance",
    title: "WEB DEV & MAINTENANCE",
    price: "15000",
    currency: "KES",
    description: "The Price is Negotiable Depending on Page Count and Functionality.",
    features: [
      "Responsive Websites",
      "Content Updates",
      "Performance Optimization",
      "Security Patches",
    ],
    highlighted: true,
    badge: "MOST POPULAR",
    icon: "Globe",
  },
  {
    id: "software-support",
    title: "SOFTWARE SUPPORT",
    price: "10000",
    currency: "KES",
    description: "The Price is Negotiable Depending on Level of Support Needed.",
    features: [
      "Troubleshooting",
      "System Updates",
      "User Training",
      "Remote Assistance",
    ],
    highlighted: false,
    badge: null,
    icon: "Headphones",
  },
  {
    id: "cyber-services",
    title: "CYBER SERVICES",
    price: "1500",
    currency: "KES",
    description: "The Price is Negotiable Depending on Scope of Service",
    features: [
      "KRA Returns, Pin Registration",
      "eCitizen Services ie nssf, sha",
      "Helb Application",
      "CV and Resume Writing",
    ],
    highlighted: false,
    badge: null,
    icon: "Laptop",
  },
  {
    id: "seo",
    title: "SEO",
    price: "10000",
    currency: "KES",
    description: "The Price is Negotiable Depending on the Number of Pages.",
    features: [
      "Keyword Research",
      "On-Page SEO",
      "Link Building",
      "Analytics & Reports",
    ],
    highlighted: false,
    badge: null,
    icon: "Search",
  },
  {
    id: "qa-testing",
    title: "QA TESTING",
    price: "5000",
    currency: "KES",
    description: "The Price is Negotiable Depending on Depth of Testing.",
    features: [
      "Functional Testing",
      "Usability Testing",
      "Performance Testing",
      "Security Testing",
    ],
    highlighted: false,
    badge: null,
    icon: "Bug",
  },
];

export const testimonialsData = [
  {
    id: 1,
    name: "James Mwangi",
    company: "Savanna Logistics",
    text: "Barani Digital transformed our online presence. Our engagement increased by 300% within the first month.",
    rating: 5,
  },
  {
    id: 2,
    name: "Grace Wanjiku",
    company: "Bloom Boutique",
    text: "Professional, responsive, and creative. They delivered a stunning website that truly represents our brand.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Ochieng",
    company: "TechVenture Labs",
    text: "Their software support has been invaluable. Quick turnaround and excellent technical expertise.",
    rating: 5,
  },
  {
    id: 4,
    name: "Fatima Hassan",
    company: "Spice Route Cafe",
    text: "The graphic design work exceeded our expectations. Our new brand identity is absolutely gorgeous.",
    rating: 5,
  },
];

export const getServices = async () => {
  await delay(400);
  return servicesData;
};

export const getPortfolio = async () => {
  await delay(600);
  return portfolioData;
};

export const getTestimonials = async () => {
  await delay(400);
  return testimonialsData;
};

export const getPricing = async () => {
  await delay(300);
  return pricingData;
};

export const getStats = async () => {
  await delay(300);
  return statsData;
};

export const portfolioData = [];
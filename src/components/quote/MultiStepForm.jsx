import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Briefcase, Mail, Phone, CheckSquare, FileText, ArrowRight, ArrowLeft, MessageCircle, Send } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const serviceOptions = [
  "Web Design",
  "SEO",
  "Website Maintenance",
  "Website Revamp",
  "Integrations",
  "QA Testing",
];

const budgetOptions = [
  "Under KES 10,000",
  "KES 10,000 - 50,000",
  "KES 50,000 - 100,000",
  "KES 100,000+",
];

const timelineOptions = ["ASAP", "1 Month", "2-3 Months", "Flexible"];

const steps = ["Client Info", "Services", "Project Details", "Review"];

export default function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    services: [],
    description: "",
    budget: "",
    timeline: "",
  });

  const updateField = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const toggleService = (s) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter((x) => x !== s)
        : [...prev.services, s],
    }));
  };

  const canProceed = () => {
    if (step === 0) return form.fullName && form.email && form.phone;
    if (step === 1) return form.services.length > 0;
    if (step === 2) return form.budget && form.timeline;
    return true;
  };

  const handleSubmit = () => {
    const message = `*NEW QUOTE REQUEST*

*Name:* ${form.fullName}
*Business:* ${form.businessName || "N/A"}
*Phone:* ${form.phone}
*Email:* ${form.email}

*Services:*
${form.services.map((s) => `- ${s}`).join("\n")}

*Budget:* ${form.budget}
*Timeline:* ${form.timeline}

*Project Details:*
${form.description || "Not provided"}`;

    window.open(siteConfig.whatsappLink(message));
  };

  return (
    <section className="pb-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Progress */}
        <div className="flex items-center justify-between mb-12">
          {steps.map((label, i) => (
            <div key={label} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                i <= step
                  ? "bg-gradient-to-r from-[#884DFC] to-[#6B3FCF] text-white shadow-[0_0_15px_rgba(136,77,252,0.3)]"
                  : "glass text-[#B8B8B8]"
              }`}>
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className={`hidden sm:block w-16 md:w-24 h-0.5 mx-2 transition-colors duration-300 ${
                  i < step ? "bg-[#884DFC]" : "bg-[#ffffff10]"
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="glass-strong rounded-3xl p-8 md:p-10">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <StepWrapper key="step0">
                <h3 className="text-xl font-display font-semibold text-white mb-6">Who is initiating this project?</h3>
                <div className="space-y-4">
                  <InputField icon={User} placeholder="Full Name *" value={form.fullName} onChange={(v) => updateField("fullName", v)} />
                  <InputField icon={Briefcase} placeholder="Business Name" value={form.businessName} onChange={(v) => updateField("businessName", v)} />
                  <InputField icon={Mail} placeholder="Email Address *" type="email" value={form.email} onChange={(v) => updateField("email", v)} />
                  <InputField icon={Phone} placeholder="Phone Number *" value={form.phone} onChange={(v) => updateField("phone", v)} />
                </div>
              </StepWrapper>
            )}

            {step === 1 && (
              <StepWrapper key="step1">
                <h3 className="text-xl font-display font-semibold text-white mb-6">Select your digital weapons</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {serviceOptions.map((s) => (
                    <button
                      key={s}
                      onClick={() => toggleService(s)}
                      className={`flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-300 ${
                        form.services.includes(s)
                          ? "bg-[#884DFC20] border border-[#884DFC60] text-white shadow-[0_0_15px_rgba(136,77,252,0.15)]"
                          : "glass text-[#B8B8B8] hover:text-white hover:bg-[#ffffff08]"
                      }`}
                    >
                      <div className={`w-5 h-5 rounded flex items-center justify-center text-xs transition-colors ${
                        form.services.includes(s) ? "bg-[#884DFC] text-white" : "border border-[#ffffff20]"
                      }`}>
                        {form.services.includes(s) && "✓"}
                      </div>
                      <span className="text-sm font-medium">{s}</span>
                    </button>
                  ))}
                </div>
              </StepWrapper>
            )}

            {step === 2 && (
              <StepWrapper key="step2">
                <h3 className="text-xl font-display font-semibold text-white mb-6">Project Details</h3>
                <div className="space-y-6">
                  <div>
                    <label className="text-[#B8B8B8] text-sm mb-2 block">Project Description</label>
                    <textarea
                      rows={4}
                      value={form.description}
                      onChange={(e) => updateField("description", e.target.value)}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-xl bg-[#ffffff06] border border-[#ffffff10] text-white text-sm placeholder:text-[#B8B8B850] focus:outline-none focus:border-[#884DFC50] focus:shadow-[0_0_10px_rgba(136,77,252,0.1)] transition-all resize-none"
                    />
                  </div>
                  <div>
                    <label className="text-[#B8B8B8] text-sm mb-3 block">Budget Range *</label>
                    <div className="grid grid-cols-2 gap-2">
                      {budgetOptions.map((b) => (
                        <OptionButton key={b} label={b} selected={form.budget === b} onClick={() => updateField("budget", b)} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-[#B8B8B8] text-sm mb-3 block">Timeline *</label>
                    <div className="grid grid-cols-2 gap-2">
                      {timelineOptions.map((t) => (
                        <OptionButton key={t} label={t} selected={form.timeline === t} onClick={() => updateField("timeline", t)} />
                      ))}
                    </div>
                  </div>
                </div>
              </StepWrapper>
            )}

            {step === 3 && (
              <StepWrapper key="step3">
                <h3 className="text-xl font-display font-semibold text-white mb-6">Review & Submit</h3>
                <div className="space-y-4">
                  <ReviewRow label="Name" value={form.fullName} />
                  <ReviewRow label="Business" value={form.businessName || "N/A"} />
                  <ReviewRow label="Email" value={form.email} />
                  <ReviewRow label="Phone" value={form.phone} />
                  <ReviewRow label="Services" value={form.services.join(", ")} />
                  <ReviewRow label="Budget" value={form.budget} />
                  <ReviewRow label="Timeline" value={form.timeline} />
                  {form.description && <ReviewRow label="Details" value={form.description} />}
                </div>
              </StepWrapper>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#ffffff08]">
            {step > 0 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-2 text-[#B8B8B8] text-sm hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            ) : <div />}

            {step < 3 ? (
              <button
                onClick={() => canProceed() && setStep(step + 1)}
                disabled={!canProceed()}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  canProceed()
                    ? "bg-gradient-to-r from-[#5B2D99] via-[#7B3FE4] to-[#884DFC] text-white hover:brightness-110 hover:shadow-[0_0_25px_rgba(136,77,252,0.4)]"
                    : "bg-[#ffffff08] text-[#B8B8B850] cursor-not-allowed"
                }`}
              >
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold bg-gradient-to-r from-[#5B2D99] via-[#7B3FE4] to-[#884DFC] text-white hover:brightness-110 hover:shadow-[0_0_30px_rgba(136,77,252,0.5)] transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                Send via WhatsApp
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
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

function OptionButton({ label, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
        selected
          ? "bg-[#884DFC20] border border-[#884DFC60] text-white"
          : "glass text-[#B8B8B8] hover:text-white hover:bg-[#ffffff08]"
      }`}
    >
      {label}
    </button>
  );
}

function ReviewRow({ label, value }) {
  return (
    <div className="flex justify-between items-start py-3 border-b border-[#ffffff06]">
      <span className="text-[#B8B8B8] text-sm">{label}</span>
      <span className="text-white text-sm text-right max-w-[60%]">{value}</span>
    </div>
  );
}
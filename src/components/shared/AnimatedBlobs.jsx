import React from "react";

export default function AnimatedBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#884DFC] opacity-[0.04] blur-[100px] animate-blob" />
      <div className="absolute top-3/4 -right-32 w-80 h-80 rounded-full bg-[#4BE4FF] opacity-[0.03] blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-[#884DFC] opacity-[0.02] blur-[120px] animate-blob animation-delay-4000" />
    </div>
  );
}

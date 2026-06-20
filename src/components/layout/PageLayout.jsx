import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimatedBlobs from "../shared/AnimatedBlobs";

export default function PageLayout() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <AnimatedBlobs />
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

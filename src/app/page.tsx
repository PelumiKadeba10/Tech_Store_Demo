"use client";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero";
import CategorySection from "./components/Products/CategorySection";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <NavBar />
      
      <Hero />

      {/* Categories of Items Sections */}
      <div className="grid grid-cols-1 bg-slate-50 px-10">
        <motion.p
          className="text-3xl font-bold pt-10 text-center"
          initial={{ opacity: 0, y: 50 }} // Start off-screen and transparent
          whileInView={{ opacity: 1, y: 0 }} // Move to original position and fade in
          viewport={{ once: true, amount: 0.25 }} // Trigger when 25% of the section is in view
          transition={{ duration: 1 }} 
        >
          Products
        </motion.p>

        <div className="gap-19 pt-10">
          <CategorySection id="phones" category="phones" />
          <CategorySection id="laptops" category="laptops" />
          <CategorySection id="accessories" category="accessories" />
          <CategorySection id="deals" category="deals" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

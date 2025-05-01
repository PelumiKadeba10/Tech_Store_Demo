"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-white text-black py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Upgrade Your Tech Life
          </h1>
          <p className="text-lg md:text-xl text-black">
            Discover the latest gadgets, laptops, and accessories at unbeatable prices.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#phones"
              className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold py-3 px-6 rounded-md transition"
            >
              Shop Now
            </a>
            <a
              href="#deals"
              className="border-black-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-white font-semibold py-3 px-6 rounded-md transition"
            >
              View Deals
            </a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src="/hero-gadgets.png"
            alt="Gadgets Display"
            className="w-full max-w-md md:max-w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from "framer-motion";
import Products from "./Products";

interface CategorySectionProps {
  id: string;
  category: string;
}

export default function CategorySection({ id, category }: CategorySectionProps) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-24"
      initial={{ opacity: 0, y: 50 }} // Start off-screen and transparent
      whileInView={{ opacity: 1, y: 0 }} // Move to original position and fade in
      viewport={{ once: true, amount: 0.25 }} // Trigger when 25% of the section is in view
      transition={{ duration: 1 }} // Animation duration
    >
      <Products category={category} />
    </motion.section>
  );
}

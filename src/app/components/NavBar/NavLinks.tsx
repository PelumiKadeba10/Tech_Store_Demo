import { useState } from "react";
import { FaLaptop, FaHeadphones, FaMobileAlt, } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

export default function NavLinks({ isMobile = false }: { isMobile?: boolean }) {

  const linkClass = isMobile
    ? "block text-gray-700 hover:text-purple-600 flex items-center justify-center gap-1"
    : "relative flex items-center gap-1 text-gray-700 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full"
;


  return (
    <div className={isMobile ? "space-y-6" : "hidden md:flex space-x-8 text-gray-700 font-medium"}>
      <a href="#phones" className={linkClass}>
        <FaMobileAlt /> Phones
      </a>
      <a href="#laptops" className={linkClass}>
        <FaLaptop /> Laptops
      </a>
      <a href="#accessories" className={linkClass}>
        <FaHeadphones /> Accessories
      </a>
      <a href="#deals" className={linkClass}>
        <GiReceiveMoney />Deals</a>
    </div>
  );
}

"use client";

import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavIcons from "./NavIcons";
import MobileMenu from "./MobileMenu";


export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full bg-white sticky top-0 z-50">
      <div className="w-full px-4 md:px-4 lg:px-8 py-3 flex items-center justify-between">
        <Logo />
        <NavLinks />
        <NavIcons menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
      <div className="text-center items-center justify-center md:flex bg-white/20 border-t border-gray-200">
        <MobileMenu open={menuOpen} />
      </div>
   </div>
  );
}

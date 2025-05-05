import { useState } from "react";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

export default function NavIcons({
  menuOpen,
  toggleMenu,
}: {
  menuOpen: boolean;
  toggleMenu: () => void;
}) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex items-center space-x-4">
      {searchOpen ? (
        <div className="relative flex items-center space-x-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring focus:border-purple-500 transition duration-200"
            placeholder="Search..."
            autoFocus
          />
          <FiSearch
          className="text-xl text-gray-700 hover:text-purple-700 cursor-pointer"
          onClick={() => setSearchOpen(false)}
        />
        </div>
      ) : (
        <FiSearch
          className="text-xl text-gray-700 hover:text-purple-700 cursor-pointer"
          onClick={() => setSearchOpen(true)}
        />
      )}

      <FiShoppingCart className="text-xl text-gray-700 hover:text-purple-700 cursor-pointer" />
      <button
        className="md:hidden text-2xl text-gray-700"
        onClick={toggleMenu}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
    </div>
  );
}

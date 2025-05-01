import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

export default function NavIcons({
  menuOpen,
  toggleMenu,
}: {
  menuOpen: boolean;
  toggleMenu: () => void;
}) {
  return (
    <div className="flex items-center space-x-4">
      <FiSearch className="text-xl text-gray-700 hover:text-purple-700 cursor-pointer" />
      <FiShoppingCart className="text-xl text-gray-700 hover:text-purple-700 cursor-pointer" />
      <button className="md:hidden text-2xl text-gray-700" onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
    </div>
  );
}

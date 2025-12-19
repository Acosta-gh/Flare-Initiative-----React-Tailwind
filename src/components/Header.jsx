import React, { useState } from "react";
import Hamburger from "hamburger-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-slate-900 text-white">
      {/* Desktop & Mobile Header Bar */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">Logo</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#inicio" className="hover:text-blue-400 transition-colors">
            Home
          </a>
          <a
            href="#servicios"
            className="hover:text-blue-400 transition-colors"
          >
            About Us
          </a>
          <a href="#contacto" className="hover:text-blue-400 transition-colors">
            Contact
          </a>
        </nav>

        {/* Burger Menu Button - Mobile Only */}
        <div className="md:hidden z-50 relative">
          <Hamburger
            toggled={isOpen}
            toggle={toggleMenu}
            size={24}
          />
        </div>
      </div>

      {/* Mobile Menu Overlay with Animation */}
      <div
        className={`fixed inset-0 bg-slate-900 z-40 md:hidden transition-all duration-700 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{
          clipPath: isOpen
            ? "circle(150% at top right)"
            : "circle(0% at top right)",
        }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 text-2xl">
          <a
            href="#inicio"
            onClick={toggleMenu}
            className="hover:text-blue-400 transition-colors transform hover:scale-110"
          >
            Home
          </a>
          <a
            href="#servicios"
            onClick={toggleMenu}
            className="hover:text-blue-400 transition-colors transform hover:scale-110"
          >
            About Us
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="hover:text-blue-400 transition-colors transform hover:scale-110"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
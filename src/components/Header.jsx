import { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((open) => !open);

  return (
    <>
      <header className="fixed top-[40px] w-full z-50 bg-white text-brand-dark border-b border-gray-100 font-brand">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex-shrink-0">
            <img
              src="images/logo2.png"
              alt="Logo"
              className="h-10 md:h-12 w-auto"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(86%) sepia(54%) saturate(4973%) hue-rotate(309deg) brightness(98%) contrast(91%)",
              }}
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 font-medium">
            <Link
              to="/"
              className="hover:text-brand-orange transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about"
              className="hover:text-brand-orange transition-colors"
            >
              About Us
            </Link>
            <Link to="/get-help">
              <button className="px-5 py-2 rounded-full bg-brand-orange text-white hover:opacity-90 transition-all cursor-pointer font-medium">
                Get Help
              </button>
            </Link>
          </nav>

          {/* Burger Button */}
          <div className="md:hidden z-50 relative">
            <Hamburger
              toggled={isOpen}
              toggle={toggleMenu}
              size={24}
              color={isOpen ? "white" : "var(--color-brand-orange)"}
            />
          </div>
        </div>

        <div
          className={`fixed inset-0 z-40 md:hidden transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] bg-brand-orange ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{
            clipPath: isOpen
              ? "circle(150% at 100% 0%)"
              : "circle(0% at 100% 0%)",
          }}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8 text-2xl text-white font-light">
            <a href="#home" onClick={toggleMenu}>
              Home
            </a>
            <a href="#about" onClick={toggleMenu}>
              About Us
            </a>
            <div className="w-12 h-[px] bg-white/30 my-4"></div>
            <p className="text-sm font-bold uppercase tracking-widest">
              Call 9-8-8 for help
            </p>
          </nav>
        </div>
      </header>

      <div className="h-[100px]"></div>
    </>
  );
}

export default Header;

import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-white/30 border-b border-white/40 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        {/* Logo */}

        <Link
          to="/"
          className="text-5xl text-[#6E4C8F] hover:text-[#B57EDC] transition duration-300"
          style={{
            fontFamily: "'Sacramento', cursive",
          }}
        >
          shndy.ln
        </Link>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-10 text-[#2E1F3E] font-medium">
          <Link to="/" className="hover:text-[#B57EDC] transition duration-300">
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-[#B57EDC] transition duration-300"
          >
            About
          </Link>

          <Link
            to="/projects"
            className="hover:text-[#B57EDC] transition duration-300"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="hover:text-[#B57EDC] transition duration-300"
          >
            Contact
          </Link>
        </ul>

        {/* Mobile Button */}

        <button
          className="md:hidden text-3xl text-[#6E4C8F]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}

      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-6 px-6 pb-6 bg-white/80 backdrop-blur-md text-[#2E1F3E] font-medium">
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/projects">Projects</Link>

          <Link to="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

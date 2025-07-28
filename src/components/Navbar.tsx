"use client";
import { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#1C3B5A]">
          <Image src="/link2.png" alt="Solh_logo" width={70} height={70} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-black">
          <a
            href="#"
            className="hover:text-blue-800 transition-transform duration-200 hover:scale-105"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-blue-800 transition-transform duration-200 hover:scale-105"
          >
            Solutions
          </a>
          <a
            href="#"
            className="hover:text-blue-800 transition-transform duration-200 hover:scale-105"
          >
            Platform
          </a>
          <a
            href="#"
            className="hover:text-blue-800 transition-transform duration-200 hover:scale-105"
          >
            Impact
          </a>
          <a
            href="#"
            className="hover:text-blue-800 transition-transform duration-200 hover:scale-105"
          >
            Resources
          </a>
          <a
            href="#"
            className="hover:text-blue-800 transition-transform duration-200 hover:scale-105"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-blue-800 transition-transform duration-200 hover:scale-105"
          >
            Contact
          </a>
        </nav>

        {/* Desktop CTA */}
        <button className="hidden md:block bg-[#4E76F0] hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition-transform duration-200 hover:scale-105">
          Request a Demo
        </button>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden text-black">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-3 space-y-4 text-sm font-medium text-black">
          <a
            href="#"
            className="block hover:text-blue-800 transition-transform duration-200 hover:scale-105"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="block hover:text-blue-800 transition-transform duration-200 hover:scale-105"
            onClick={() => setMenuOpen(false)}
          >
            Solutions
          </a>
          <a
            href="#"
            className="block hover:text-blue-800 transition-transform duration-200 hover:scale-105"
            onClick={() => setMenuOpen(false)}
          >
            Platform
          </a>
          <a
            href="#"
            className="block hover:text-blue-800 transition-transform duration-200 hover:scale-105"
            onClick={() => setMenuOpen(false)}
          >
            Impact
          </a>
          <a
            href="#"
            className="block hover:text-blue-800 transition-transform duration-200 hover:scale-105"
            onClick={() => setMenuOpen(false)}
          >
            Resources
          </a>
          <a
            href="#"
            className="block hover:text-blue-800 transition-transform duration-200 hover:scale-105"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#"
            className="block hover:text-blue-800 transition-transform duration-200 hover:scale-105"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          <button className="w-full bg-[#4E76F0] hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition-transform duration-200 hover:scale-105">
            Request a Demo
          </button>
        </div>
      )}
    </header>
  );
}

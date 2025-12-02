'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMenu}
          />
          <div className="fixed top-0 right-0 h-full w-72 bg-amber-900 shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-amber-800">
                <h2 className="text-xl sm:text-2xl font-bold text-amber-50">Menu</h2>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg text-amber-50 hover:bg-amber-800 transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <nav className="flex-1 p-4 sm:p-6 overflow-y-auto">
                <ul className="space-y-2 sm:space-y-3">
                  <li>
                    <Link
                      href="#hotels"
                      onClick={closeMenu}
                      className="block py-3 sm:py-4 px-4 rounded-lg text-base sm:text-lg font-medium text-amber-50 hover:bg-amber-800 hover:text-white transition-all duration-200 active:bg-amber-700"
                    >
                      Hotels
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      onClick={closeMenu}
                      className="block py-3 sm:py-4 px-4 rounded-lg text-base sm:text-lg font-medium text-amber-50 hover:bg-amber-800 hover:text-white transition-all duration-200 active:bg-amber-700"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      onClick={closeMenu}
                      className="block py-3 sm:py-4 px-4 rounded-lg text-base sm:text-lg font-medium text-amber-50 hover:bg-amber-800 hover:text-white transition-all duration-200 active:bg-amber-700"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gallery"
                      onClick={closeMenu}
                      className="block py-3 sm:py-4 px-4 rounded-lg text-base sm:text-lg font-medium text-amber-50 hover:bg-amber-800 hover:text-white transition-all duration-200 active:bg-amber-700"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contact"
                      onClick={closeMenu}
                      className="block py-3 sm:py-4 px-4 rounded-lg text-base sm:text-lg font-medium text-amber-50 hover:bg-amber-800 hover:text-white transition-all duration-200 active:bg-amber-700"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}



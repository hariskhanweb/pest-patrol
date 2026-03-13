"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const navLinks = [
  { label: "HOME", href: "/#home" },
  { label: "SERVICES", href: "/services" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header 
      className={`w-full bg-cream sticky top-0 z-50 transition-shadow duration-300 overflow-anchor-none ${
        isScrolled ? "shadow-md" : ""
      }`} 
      id="site-header"
    >
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-5"
      } relative z-50 bg-cream`}>
        {/* ── Logo ── */}
        <Link href="/#home" className="flex items-center" id="header-logo">
          <Image
            src="/assets/logo.svg"
            alt="Pest Patrol"
            width={160}
            height={47}
            priority
            className="w-auto h-11 md:h-14"
          />
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav
          className="hidden items-center gap-10 md:flex"
          id="header-nav"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-inter type-xs font-bold tracking-wide text-navy-dark transition-colors duration-200 hover:text-navy"
              id={`nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── Desktop CTA Button ── */}
        <div className="hidden md:block">
          <Button
            href="tel:0279430777"
            variant="outline"
            rounded="none"
          >
            CALL 027 943 0777
          </Button>
        </div>

        {/* ── Mobile menu button ── */}
        <button
          className="flex flex-col items-center justify-center gap-1.5 md:hidden p-2"
          id="mobile-menu-btn"
          aria-label="Toggle mobile menu"
          onClick={toggleMenu}
        >
          <span
            className={`block h-0.5 w-6 bg-navy-dark transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-navy-dark transition-opacity duration-300 ease-in-out ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-navy-dark transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* ── Mobile Menu Dropdown ── */}
      <div
        className={`absolute left-0 top-full w-full bg-cream transition-all duration-300 ease-in-out md:hidden overflow-hidden ${
          isMobileMenuOpen ? "max-h-[calc(100vh-80px)] border-b border-navy-dark/10 opacity-100 shadow-md overflow-y-auto" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-8 px-6">
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-inter type-xs font-bold tracking-wide text-navy-dark transition-colors duration-200 hover:text-navy"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button
            href="tel:0279430777"
            variant="outline"
            rounded="none"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            CALL 027 943 0777
          </Button>
        </div>
      </div>
    </header>
  );
}

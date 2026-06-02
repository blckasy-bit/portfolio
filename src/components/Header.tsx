"use client";

import { useState } from "react";
import Link from "next/link";
import { profile } from "@/data/portfolio";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#fafafa]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className="block h-0.5 w-5 bg-black" />
          <span className="block h-0.5 w-5 bg-black" />
        </button>

        <div className="hidden md:block md:w-32" />

        <Link
          href="/"
          className="font-sans text-xl font-bold tracking-tight md:text-2xl"
        >
          {profile.name.split(" ")[0]}®
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-[#333] transition hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="w-10 md:hidden" />
      </div>

      {menuOpen && (
        <nav className="border-t border-[#e8e8e8] bg-white px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-sans text-sm text-[#333]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

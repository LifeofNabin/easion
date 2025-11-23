"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Easion
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg">
          <Link className="hover:text-blue-400 transition" href="/">Home</Link>
          <Link className="hover:text-blue-400 transition" href="/calendar">Calendar</Link>
          <Link className="hover:text-blue-400 transition" href="/script">Script</Link>
          <Link className="hover:text-blue-400 transition" href="/thumbnail">Thumbnail</Link>
        </div>

        {/* Hamburger Button */}
        <button 
          className="md:hidden text-3xl transition"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800 px-6 py-4 text-lg space-y-4 transition-all duration-300 ${
          open ? "opacity-100 max-h-60" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <Link href="/" className="block hover:text-blue-400" onClick={() => setOpen(false)}>Home</Link>
        <Link href="/calendar" className="block hover:text-blue-400" onClick={() => setOpen(false)}>Calendar</Link>
        <Link href="/script" className="block hover:text-blue-400" onClick={() => setOpen(false)}>Script</Link>
        <Link href="/thumbnail" className="block hover:text-blue-400" onClick={() => setOpen(false)}>Thumbnail</Link>
      </div>
    </nav>
  );
}

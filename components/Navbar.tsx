"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      {/* Main container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold">
          Easion
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg">
          <Link href="/">Home</Link>
          <Link href="/calendar">Calendar</Link>
          <Link href="/script">Script</Link>
          <Link href="/thumbnail">Thumbnail</Link>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4 text-lg">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/calendar" onClick={() => setOpen(false)}>Calendar</Link>
          <Link href="/script" onClick={() => setOpen(false)}>Script</Link>
          <Link href="/thumbnail" onClick={() => setOpen(false)}>Thumbnail</Link>
        </div>
      )}
    </nav>
  );
}

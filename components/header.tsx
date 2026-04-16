"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          Job<span className="text-black">Portal</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <Link href="/jobs" className="hover:text-primary transition">Find Jobs</Link>
          <Link href="/companies" className="hover:text-primary transition">Companies</Link>
          <Link href="/about" className="hover:text-primary transition">About</Link>
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm hover:text-primary">
            Login
          </Link>
          <Link
            href="/register"
            className="bg-primary text-white px-4 py-2 rounded-xl text-sm hover:bg-primary/90 transition"
          >
            Register
          </Link>
          <Link
            href="/post-job"
            className="border border-primary text-primary px-4 py-2 rounded-xl text-sm hover:bg-primary hover:text-white transition"
          >
            Post Job
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">
          <Link href="/" className="block">Home</Link>
          <Link href="/jobs" className="block">Find Jobs</Link>
          <Link href="/companies" className="block">Companies</Link>
          <Link href="/about" className="block">About</Link>

          <hr />

          <Link href="/login" className="block">Login</Link>
          <Link href="/register" className="block">Register</Link>
          <Link href="/post-job" className="block text-primary font-semibold">
            Post Job
          </Link>
        </div>
      )}
    </header>
  );
}
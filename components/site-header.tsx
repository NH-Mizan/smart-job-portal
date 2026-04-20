"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/components/ui/cn";

const navItems = [
  { label: "Jobs", href: "#featured-jobs" },
  { label: "Categories", href: "#categories" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Reviews", href: "#testimonials" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link className="flex items-center gap-3" href="/">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-500 to-emerald-400 text-sm font-black text-slate-950">
            SJ
          </span>
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
              SmartJob
            </p>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
              Career Portal
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="/login" variant="ghost">
            Sign In
          </Button>
          <Button href="/register" variant="gradient">
            Create Profile
          </Button>
        </div>

        <button
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-800 transition hover:bg-slate-100 md:hidden dark:border-white/10 dark:text-white dark:hover:bg-white/10"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        className={cn(
          "overflow-hidden border-t border-slate-200/70 transition-[max-height] duration-300 md:hidden dark:border-white/10",
          open ? "max-h-80" : "max-h-0"
        )}
      >
        <Container className="flex flex-col gap-4 py-5">
          {navItems.map((item) => (
            <Link
              key={item.label}
              className="text-sm font-medium text-slate-700 dark:text-slate-200"
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <Button href="/login" variant="secondary">
              Sign In
            </Button>
            <Button href="/register" variant="gradient">
              Create Profile
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}

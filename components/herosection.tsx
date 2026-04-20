"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Clock3,
  MapPin,
  Sparkles,
  Wallet,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Sparkles,
    title: "Smart Matching",
    description: "AI surfaces roles that align with your skills, goals, and experience.",
  },
  {
    icon: Clock3,
    title: "Real-time Updates",
    description: "Stay ahead with fresh listings and instant changes from active employers.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Companies",
    description: "Apply with confidence through trusted companies and quality job posts.",
  },
  {
    icon: Zap,
    title: "Easy Apply",
    description: "Move from discovery to application in a fast, focused workflow.",
  },
];

function FeatureCard({ icon: Icon, title, description }: Feature) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group rounded-2xl border border-white/50 bg-white/60 p-6 shadow-lg shadow-blue-950/10 backdrop-blur-xl transition dark:border-white/10 dark:bg-white/8 dark:shadow-black/30"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-md shadow-blue-900/20">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </motion.div>
  );
}

function JobCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/70 p-6 shadow-2xl shadow-blue-950/15 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-black/40"
    >
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-cyan-400/20" />

      <div className="relative space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-blue-700 text-white shadow-lg dark:from-blue-500 dark:to-violet-500">
              <BriefcaseBusiness className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-blue-600 dark:text-blue-300">
                Top Match
              </p>
              <h3 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                Senior Frontend Engineer
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                NovaTech Labs
              </p>
            </div>
          </div>

          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
            98% Match
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-300" />
              Location
            </div>
            <p className="mt-2 font-semibold text-slate-900 dark:text-white">
              Remote, Worldwide
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <Wallet className="h-4 w-4 text-violet-600 dark:text-violet-300" />
              Salary
            </div>
            <p className="mt-2 font-semibold text-slate-900 dark:text-white">
              $95k - $130k
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500 dark:text-slate-400">AI insights</span>
            <span className="font-medium text-blue-600 dark:text-blue-300">
              Strong React + UI Systems fit
            </span>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
            <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-blue-600 via-violet-500 to-cyan-400" />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-violet-500 px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:shadow-xl hover:shadow-blue-900/30"
        >
          Apply Now
          <ArrowRight className="h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="w-full bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.22),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(139,92,246,0.24),_transparent_30%),linear-gradient(135deg,_#eff6ff_0%,_#f8fafc_42%,_#eef2ff_100%)] py-16 dark:bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(139,92,246,0.2),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#111827_100%)] sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] border border-white/60 bg-white/45 px-6 py-8 shadow-2xl shadow-blue-950/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-black/30 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-100/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-200">
                <Sparkles className="h-4 w-4" />
                AI Powered Job Matching
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                Find Your Perfect Job Faster
              </h1>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                Discover personalized opportunities with intelligent recommendations
                that match your skills, experience, and career goals in seconds.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                >
                  Get Started
                </Link>
                <Link
                  href="/jobs"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300/80 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-blue-400/30 dark:hover:text-blue-200"
                >
                  Browse Jobs
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-400/20" />
              <div className="absolute -right-4 bottom-2 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl dark:bg-violet-400/20" />
              <JobCard />
            </motion.div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

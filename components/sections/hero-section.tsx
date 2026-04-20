"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Search, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

const stats = [
  { value: "24k+", label: "Active opportunities" },
  { value: "3.2k+", label: "Hiring companies" },
  { value: "89%", label: "Successful placements" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ecfeff_0%,#f8fafc_34%,#f0fdf4_100%)] pb-16 pt-10 dark:bg-[linear-gradient(135deg,#082f49_0%,#020617_38%,#052e16_100%)] sm:pb-20 sm:pt-14">
      <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.22),transparent_35%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_34%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_35%),radial-gradient(circle_at_top_right,rgba(74,222,128,0.12),transparent_34%)]" />
      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/70 px-4 py-2 text-sm font-medium text-cyan-800 shadow-sm backdrop-blur dark:border-cyan-400/20 dark:bg-white/10 dark:text-cyan-100">
              <Sparkles className="h-4 w-4" />
              AI-powered job discovery
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
              Find Your Dream Job Today
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Explore verified openings, personalized matches, and fast
              application flows designed for ambitious talent.
            </p>

            <Card className="mt-8 p-4 sm:p-5">
              <div className="grid gap-3 lg:grid-cols-[1fr_1fr_auto]">
                <label className="flex h-14 items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 dark:border-white/10 dark:bg-white/5">
                  <Search className="h-4 w-4 text-slate-400" />
                  <input
                    aria-label="Search jobs"
                    className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
                    placeholder="Job title or keyword"
                    type="text"
                  />
                </label>
                <label className="flex h-14 items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 dark:border-white/10 dark:bg-white/5">
                  <MapPin className="h-4 w-4 text-slate-400" />
                  <input
                    aria-label="Search location"
                    className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
                    placeholder="City or remote"
                    type="text"
                  />
                </label>
                <Button className="w-full lg:w-auto" size="lg">
                  Search Jobs
                </Button>
              </div>
            </Card>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/jobs" size="lg" variant="primary">
                Browse Open Roles
              </Button>
              <Button href="/register" size="lg" variant="secondary">
                Create Your Profile
              </Button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 16 }}
                  transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
                >
                  <Card className="p-5">
                    <p className="text-2xl font-semibold text-slate-950 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 28 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
          >
            <Card className="relative overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-r from-sky-500/15 via-cyan-500/15 to-emerald-400/15" />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600 dark:text-cyan-300">
                      Featured Match
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">
                      Product Designer
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                      Northstar Studio • Remote • Full-time
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                    96% Match
                  </span>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    ["Salary", "$85k - $110k"],
                    ["Experience", "4+ years"],
                    ["Focus", "Product systems"],
                    ["Timeline", "Hiring this week"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        {label}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-slate-950 p-5 text-white dark:bg-white dark:text-slate-950">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-white/70 dark:text-slate-500">
                        Match insight
                      </p>
                      <p className="mt-1 text-lg font-semibold">
                        Strong portfolio alignment with B2B product teams.
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 shrink-0" />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

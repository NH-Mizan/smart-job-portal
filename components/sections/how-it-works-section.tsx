"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, CheckCheck, Search } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

const steps = [
  {
    title: "Search",
    description: "Use smart filters to uncover roles that match your skills, pace, and preferences.",
    icon: Search,
  },
  {
    title: "Apply",
    description: "Submit polished applications quickly with a profile built to spotlight your strengths.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Get Hired",
    description: "Track progress, prepare for interviews, and move confidently toward your next offer.",
    icon: CheckCheck,
  },
];

export function HowItWorksSection() {
  return (
    <Section
      description="Three simple steps keep the experience focused from first search to final offer."
      eyebrow="How It Works"
      id="how-it-works"
      title="Search, apply, and get hired faster"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              transition={{ delay: index * 0.08, duration: 0.35 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Card className="relative h-full p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-500 to-emerald-400 text-slate-950">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300 dark:text-white/20">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

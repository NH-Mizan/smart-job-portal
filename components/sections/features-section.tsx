"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Bot, ShieldCheck, Zap } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

const features = [
  {
    title: "Smart Matching",
    description:
      "AI-driven recommendations connect you with roles that reflect your strengths and goals.",
    icon: Bot,
  },
  {
    title: "Verified Jobs",
    description:
      "Every listing is screened for authenticity so candidates apply with more confidence.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Apply",
    description:
      "One polished profile lets you move from discovery to application in just a few clicks.",
    icon: Zap,
  },
  {
    title: "Career Signals",
    description:
      "Track timing, response trends, and profile performance while you search.",
    icon: BadgeCheck,
  },
];

export function FeaturesSection() {
  return (
    <Section
      className="bg-white/70 dark:bg-slate-950/60"
      description="Everything on the homepage is built to reduce friction and help candidates focus on great opportunities."
      eyebrow="Features"
      title="A cleaner, smarter way to navigate the job market"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Card className="h-full p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-500 to-emerald-400 text-slate-950">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

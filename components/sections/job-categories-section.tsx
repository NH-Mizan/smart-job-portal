"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Megaphone,
  Palette,
  PenTool,
  Smartphone,
  TrendingUp,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

const categories = [
  { name: "Design", jobs: "1,248 jobs", icon: Palette },
  { name: "Development", jobs: "2,931 jobs", icon: Code2 },
  { name: "Marketing", jobs: "847 jobs", icon: Megaphone },
  { name: "Product", jobs: "619 jobs", icon: PenTool },
  { name: "Mobile", jobs: "508 jobs", icon: Smartphone },
  { name: "Growth", jobs: "392 jobs", icon: TrendingUp },
];

export function JobCategoriesSection() {
  return (
    <Section
      className="bg-[linear-gradient(180deg,transparent_0%,rgba(240,253,250,0.9)_100%)] dark:bg-[linear-gradient(180deg,transparent_0%,rgba(2,44,34,0.4)_100%)]"
      description="Browse curated paths for the most active hiring categories on the platform."
      eyebrow="Job Categories"
      id="categories"
      title="Explore roles by discipline"
    >
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {categories.map((category, index) => {
          const Icon = category.icon;

          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.98, y: 16 }}
              transition={{ delay: index * 0.06, duration: 0.35 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -5, scale: 1.01 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
            >
              <Card className="flex items-center gap-4 p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {category.jobs}
                  </p>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

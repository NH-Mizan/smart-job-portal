"use client";

import { motion } from "framer-motion";
import { Clock3, MapPin, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

const jobs = [
  {
    title: "Senior Frontend Engineer",
    company: "NovaTech Labs",
    location: "Remote",
    salary: "$95k - $130k",
    type: "Full-time",
  },
  {
    title: "Growth Marketing Lead",
    company: "Pulse Commerce",
    location: "New York, US",
    salary: "$80k - $110k",
    type: "Hybrid",
  },
  {
    title: "Product Designer",
    company: "Northstar Studio",
    location: "Berlin, DE",
    salary: "$70k - $98k",
    type: "Full-time",
  },
];

export function FeaturedJobsSection() {
  return (
    <Section
      actions={
        <Button href="/jobs" variant="secondary">
          View All Jobs
        </Button>
      }
      description="A quick look at high-intent roles that candidates are applying to right now."
      eyebrow="Featured Jobs"
      id="featured-jobs"
      title="Fresh openings from standout companies"
    >
      <div className="grid gap-5 xl:grid-cols-3">
        {jobs.map((job, index) => (
          <motion.div
            key={job.title}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -6 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Card className="h-full p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                    {job.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    {job.company}
                  </p>
                </div>
                <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800 dark:bg-cyan-400/10 dark:text-cyan-300">
                  {job.type}
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <MapPin className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                  {job.location}
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <Wallet className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                  {job.salary}
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <Clock3 className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                  Posted 2 days ago
                </div>
              </div>

              <Button className="mt-8 w-full" variant="gradient">
                Apply Now
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

const testimonials = [
  {
    name: "Ariana Patel",
    role: "UX Designer",
    quote:
      "The matching quality felt genuinely helpful. I stopped scrolling endlessly and started applying with confidence.",
  },
  {
    name: "Marcus Chen",
    role: "Full Stack Engineer",
    quote:
      "The homepage experience is fast, clear, and focused. I found a remote role within two weeks of joining.",
  },
  {
    name: "Lina Gomez",
    role: "Growth Strategist",
    quote:
      "Verified jobs and clean salary signals made it easier to trust what I was seeing and move quickly.",
  },
];

export function TestimonialsSection() {
  return (
    <Section
      description="Candidates use SmartJob to cut through noise and focus on roles that actually fit."
      eyebrow="Testimonials"
      id="testimonials"
      title="People are landing better roles with less friction"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Card className="h-full p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <Quote className="h-5 w-5 text-cyan-400" />
              </div>
              <p className="mt-6 text-base leading-8 text-slate-700 dark:text-slate-200">
                “{testimonial.quote}”
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-cyan-500 to-emerald-400 text-sm font-bold text-slate-950">
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-slate-950 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

"use client";

import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

const logos = ["Spotify", "Stripe", "Notion", "Airbnb", "Shopify", "Figma"];

export function TrustedCompaniesSection() {
  return (
    <Section
      className="py-12"
      containerClassName="space-y-8"
      description="Join candidates getting hired by product teams, startups, and enterprise brands."
      eyebrow="Trusted Companies"
      title="Leading teams hire talent through SmartJob"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {logos.map((logo, index) => (
          <motion.div
            key={logo}
            initial={{ opacity: 0, y: 18 }}
            transition={{ delay: index * 0.06, duration: 0.35 }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
          >
            <Card className="flex h-24 items-center justify-center grayscale transition hover:grayscale-0">
              <span className="text-lg font-semibold tracking-[0.24em] text-slate-500 dark:text-slate-300">
                {logo}
              </span>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

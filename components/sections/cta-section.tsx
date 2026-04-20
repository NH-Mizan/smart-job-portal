"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export function CtaSection() {
  return (
    <Section className="pt-6 sm:pt-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true, amount: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#0f172a_0%,#0891b2_45%,#22c55e_100%)] px-6 py-12 shadow-[0_24px_80px_-30px_rgba(8,145,178,0.7)] sm:px-10 lg:px-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-100/80">
                Start Now
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Start Your Career Today
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-cyan-50/85">
                Join thousands of candidates building stronger careers with a
                homepage experience designed for speed, trust, and clarity.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/register" size="lg" variant="secondary">
                Join Free
              </Button>
              <Button href="/jobs" size="lg" variant="primary">
                Explore Jobs
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

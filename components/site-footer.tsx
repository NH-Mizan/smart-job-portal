import Link from "next/link";
import {
  BriefcaseBusiness,
  Globe,
  Send,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/ui/container";

const footerLinks = [
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

const socials = [
  { label: "Platform", href: "#", icon: Globe },
  { label: "Creative", href: "#", icon: Sparkles },
  { label: "Careers", href: "#", icon: BriefcaseBusiness },
  { label: "Updates", href: "#", icon: Send },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/70 bg-slate-950 text-slate-300 dark:border-white/10">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr]">
          <div className="max-w-md">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              SmartJob
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Build momentum for your next big career move.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Discover verified jobs, tailor your search, and connect with teams
              hiring right now.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
              Company
            </h3>
            <div className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  className="text-sm text-slate-400 transition hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
              Follow
            </h3>
            <div className="mt-5 flex gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:text-white"
                  href={href}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
            <p className="mt-5 text-sm text-slate-400">
              hello@smartjob.dev
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
          © 2026 SmartJob. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

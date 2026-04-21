import type { ReactNode } from "react";

import { Card } from "@/components/ui/card";
import { cn } from "@/components/ui/cn";

type AuthCardProps = {
  title: string;
  description: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
};

export function AuthCard({
  title,
  description,
  children,
  footer,
  className,
}: AuthCardProps) {
  return (
    <Card
      className={cn(
        "w-full max-w-md rounded-[2rem] border-white/70 bg-white/90 p-6 shadow-[0_30px_80px_-32px_rgba(15,23,42,0.35)] sm:p-8",
        className
      )}
    >
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600">
          SmartJob
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
          {title}
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      </div>

      {children}

      {footer ? (
        <div className="mt-8 border-t border-slate-200/70 pt-5 text-center text-sm text-slate-600">
          {footer}
        </div>
      ) : null}
    </Card>
  );
}

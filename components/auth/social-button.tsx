import type { ButtonHTMLAttributes, ReactNode } from "react";

import { LoaderCircle } from "lucide-react";

import { cn } from "@/components/ui/cn";

type SocialButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode;
  loading?: boolean;
};

export function SocialButton({
  icon,
  children,
  className,
  loading = false,
  disabled,
  ...props
}: SocialButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-13 w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-60",
        className
      )}
      disabled={disabled || loading}
      type="button"
      {...props}
    >
      {loading ? (
        <LoaderCircle className="h-4 w-4 animate-spin" />
      ) : (
        <span className="text-lg">{icon}</span>
      )}
      <span>{children}</span>
    </button>
  );
}

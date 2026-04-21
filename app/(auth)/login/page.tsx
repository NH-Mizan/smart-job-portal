"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import { AuthCard } from "@/components/auth/auth-card";
import { InputField } from "@/components/auth/input-field";
import { SocialButton } from "@/components/auth/social-button";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast-provider";

type LoginFormValues = {
  email: string;
  password: string;
  remember: boolean;
};

const wait = (ms: number) =>
  new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const { showToast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      await wait(1200);

      showToast({
        tone: "success",
        title: "Welcome back",
        description: `Signed in as ${values.email}.`,
      });
    } catch {
      showToast({
        tone: "error",
        title: "Login failed",
        description: "Please check your credentials and try again.",
      });
    }
  });

  const handleGoogleLogin = async () => {
    try {
      setGoogleLoading(true);
      await wait(1000);
      showToast({
        tone: "success",
        title: "Google sign-in started",
        description: "Connect your Google account to continue.",
      });
    } catch {
      showToast({
        tone: "error",
        title: "Google sign-in failed",
        description: "Please try again in a moment.",
      });
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.22),_transparent_28%),linear-gradient(145deg,_#f8fbff_0%,_#eef7ff_45%,_#f8fafc_100%)] px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
      <div className="absolute left-[-10%] top-16 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute bottom-12 right-[-8%] h-64 w-64 rounded-full bg-emerald-300/20 blur-3xl" />

      <div className="relative w-full max-w-md">
        <AuthCard
          description="Access saved jobs, track applications, and keep your profile ready for new opportunities."
          footer={
            <>
              Don&apos;t have an account?{" "}
              <Link
                className="font-semibold text-cyan-600 transition hover:text-cyan-700"
                href="/register"
              >
                Register
              </Link>
            </>
          }
          title="Sign in to your account"
        >
          <form className="space-y-5" onSubmit={onSubmit}>
            <InputField
              autoComplete="email"
              error={errors.email?.message}
              id="login-email"
              label="Email"
              placeholder="name@company.com"
              type="email"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Enter a valid email address.",
                },
              })}
            />

            <InputField
              autoComplete="current-password"
              error={errors.password?.message}
              id="login-password"
              label="Password"
              placeholder="Enter your password"
              rightSlot={
                <button
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="text-slate-400 transition hover:text-slate-700"
                  onClick={() => setShowPassword((value) => !value)}
                  type="button"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              }
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters.",
                },
              })}
            />

            <div className="flex items-center justify-between gap-4">
              <label className="flex items-center gap-3 text-sm text-slate-600">
                <input
                  className="h-4 w-4 rounded border-slate-300 text-cyan-500 focus:ring-cyan-400"
                  type="checkbox"
                  {...register("remember")}
                />
                Remember me
              </label>

              <Link
                className="text-sm font-semibold text-cyan-600 transition hover:text-cyan-700"
                href="/login"
              >
                Forgot Password?
              </Link>
            </div>

            <Button
              className="w-full"
              disabled={isSubmitting}
              size="lg"
              type="submit"
              variant="gradient"
            >
              {isSubmitting ? "Signing in..." : "Login"}
            </Button>

            <div className="relative py-1">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Or continue with
                </span>
              </div>
            </div>

            <SocialButton
              icon={<FcGoogle />}
              loading={googleLoading}
              onClick={handleGoogleLogin}
            >
              Continue with Google
            </SocialButton>
          </form>
        </AuthCard>
      </div>
    </main>
  );
}

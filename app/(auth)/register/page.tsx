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
import { cn } from "@/components/ui/cn";
import { useToast } from "@/components/ui/toast-provider";

type RegisterFormValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "job-seeker" | "employer";
};

const wait = (ms: number) =>
  new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const { showToast } = useToast();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "job-seeker",
    },
  });

  const passwordValue = watch("password");
  const selectedRole = watch("role");

  const onSubmit = handleSubmit(async (values) => {
    try {
      await wait(1400);

      showToast({
        tone: "success",
        title: "Account created",
        description: `${values.fullName} joined as a ${values.role.replace("-", " ")}.`,
      });
    } catch {
      showToast({
        tone: "error",
        title: "Registration failed",
        description: "Please review the form and try again.",
      });
    }
  });

  const handleGoogleSignup = async () => {
    try {
      setGoogleLoading(true);
      await wait(1000);
      showToast({
        tone: "success",
        title: "Google signup started",
        description: "Complete the flow to finish creating your profile.",
      });
    } catch {
      showToast({
        tone: "error",
        title: "Google signup failed",
        description: "Please try again in a moment.",
      });
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.18),_transparent_26%),radial-gradient(circle_at_left,_rgba(59,130,246,0.16),_transparent_30%),linear-gradient(155deg,_#f8fbff_0%,_#eff6ff_40%,_#f8fafc_100%)] px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />
      <div className="absolute right-[-6%] top-12 h-56 w-56 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="absolute bottom-10 left-[-8%] h-64 w-64 rounded-full bg-sky-300/20 blur-3xl" />

      <div className="relative w-full max-w-lg">
        <AuthCard
          className="max-w-lg"
          description="Create your SmartJob profile to discover roles, hire faster, and keep your hiring workflow organized."
          footer={
            <>
              Already have an account?{" "}
              <Link
                className="font-semibold text-cyan-600 transition hover:text-cyan-700"
                href="/login"
              >
                Login
              </Link>
            </>
          }
          title="Create your account"
        >
          <form className="space-y-5" onSubmit={onSubmit}>
            <InputField
              autoComplete="name"
              error={errors.fullName?.message}
              id="register-name"
              label="Full Name"
              placeholder="Your full name"
              type="text"
              {...register("fullName", {
                required: "Full name is required.",
              })}
            />

            <InputField
              autoComplete="email"
              error={errors.email?.message}
              id="register-email"
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

            <div className="grid gap-5 sm:grid-cols-2">
              <InputField
                autoComplete="new-password"
                error={errors.password?.message}
                id="register-password"
                label="Password"
                placeholder="Create a password"
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

              <InputField
                autoComplete="new-password"
                error={errors.confirmPassword?.message}
                id="register-confirm-password"
                label="Confirm Password"
                placeholder="Confirm password"
                rightSlot={
                  <button
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                    className="text-slate-400 transition hover:text-slate-700"
                    onClick={() =>
                      setShowConfirmPassword((value) => !value)
                    }
                    type="button"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                }
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: "Please confirm your password.",
                  validate: (value) =>
                    value === passwordValue || "Passwords do not match.",
                })}
              />
            </div>

            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-800">Role</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Job Seeker", value: "job-seeker" as const },
                  { label: "Employer", value: "employer" as const },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={cn(
                      "flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-4 text-sm font-medium transition",
                      selectedRole === option.value
                        ? "border-cyan-400 bg-cyan-50 text-slate-900 ring-4 ring-cyan-100"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                    )}
                  >
                    <input
                      className="h-4 w-4 border-slate-300 text-cyan-500 focus:ring-cyan-400"
                      type="radio"
                      value={option.value}
                      {...register("role", {
                        required: "Please select your role.",
                      })}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
              {errors.role?.message ? (
                <p className="text-sm text-rose-500">{errors.role.message}</p>
              ) : null}
            </div>

            <Button
              className="w-full"
              disabled={isSubmitting}
              size="lg"
              type="submit"
              variant="gradient"
            >
              {isSubmitting ? "Creating account..." : "Register"}
            </Button>

            <div className="relative py-1">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Or sign up with
                </span>
              </div>
            </div>

            <SocialButton
              icon={<FcGoogle />}
              loading={googleLoading}
              onClick={handleGoogleSignup}
            >
              Continue with Google
            </SocialButton>
          </form>
        </AuthCard>
      </div>
    </main>
  );
}

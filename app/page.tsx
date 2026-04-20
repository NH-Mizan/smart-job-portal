import { CtaSection } from "@/components/sections/cta-section";
import { FeaturedJobsSection } from "@/components/sections/featured-jobs-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { JobCategoriesSection } from "@/components/sections/job-categories-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustedCompaniesSection } from "@/components/sections/trusted-companies-section";

export default function Home() {
  return (
    <main className="flex-1 bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <HeroSection />
      <TrustedCompaniesSection />
      <FeaturesSection />
      <JobCategoriesSection />
      <HowItWorksSection />
      <FeaturedJobsSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
}

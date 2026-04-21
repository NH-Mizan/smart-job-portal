import type { Metadata } from "next";
import "./globals.css";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { ToastProvider } from "@/components/ui/toast-provider";

export const metadata: Metadata = {
  title: "SmartJob | Modern Job Portal",
  description:
    "Discover verified openings, smart matching, and a polished career search experience with SmartJob.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="min-h-full bg-background text-foreground">
        <ToastProvider>
          <div className="flex min-h-full flex-col">
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}

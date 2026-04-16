import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">

        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Job<span className="text-primary">Portal</span>
          </h2>
          <p className="mt-3 text-sm">
            Find your dream job easily. We connect job seekers with top companies in Bangladesh.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/jobs">Find Jobs</Link></li>
            <li><Link href="/companies">Companies</Link></li>
            <li><Link href="/about">About Us</Link></li>
          </ul>
        </div>

        {/* For Employers */}
        <div>
          <h3 className="text-white font-semibold mb-3">For Employers</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/post-job">Post a Job</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">Email: support@jobportal.com</p>
          <p className="text-sm">Phone: +880123456789</p>

          <div className="flex gap-4 mt-4 text-xl">
            <a href="#">🌐</a>
            <a href="#">📘</a>
            <a href="#">🐦</a>
            <a href="#">💼</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} JobPortal. All rights reserved.
      </div>
    </footer>
  );
}
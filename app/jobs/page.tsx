"use client";

import FilterSidebar from "@/components/filterSidebar";
import JobCard from "@/components/jobCard";
import { useState } from "react";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  logo?: string;
};

type Filters = {
  location: string;
  type: string;
  salary: string;
};

const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechSoft",
    location: "Dhaka",
    type: "Full Time",
    salary: "50k - 80k",
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "CodeLab",
    location: "Remote",
    type: "Part Time",
    salary: "30k - 60k",
    posted: "1 day ago",
  },
];

export default function JobsPage() {
  const [filters, setFilters] = useState<Filters>({
    location: "",
    type: "",
    salary: "",
  });

  const filteredJobs = jobs.filter((job) => {
    return (
      (!filters.location || job.location.includes(filters.location)) &&
      (!filters.type || job.type === filters.type) &&
      (!filters.salary || job.salary.includes(filters.salary))
    );
  });

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-6">

      {/* Sidebar */}
      <div className="md:col-span-1">
        <FilterSidebar filters={filters} setFilters={setFilters} />
      </div>

      {/* Job List */}
      <div className="md:col-span-3 space-y-5">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        ) : (
          <p>No jobs found</p>
        )}
      </div>
    </section>
  );
}

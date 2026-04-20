import Image from "next/image";
import Link from "next/link";

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

type JobCardProps = {
  job: Job;
};

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition border">
      
      {/* Top */}
      <div className="flex items-center gap-4">
        <Image
          alt="company"
          className="w-12 h-12 rounded-full object-cover"
          height={48}
          src={job.logo || "/company.png"}
          width={48}
        />

        <div>
          <h3 className="font-semibold text-lg">{job.title}</h3>
          <p className="text-sm text-gray-500">{job.company}</p>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-600">
        <span className="bg-gray-100 px-3 py-1 rounded-full">📍 {job.location}</span>
        <span className="bg-gray-100 px-3 py-1 rounded-full">💼 {job.type}</span>
        <span className="bg-gray-100 px-3 py-1 rounded-full">💰 {job.salary}</span>
      </div>

      {/* Bottom */}
      <div className="mt-5 flex justify-between items-center">
        <span className="text-xs text-gray-400">{job.posted}</span>

        <Link
          href={`/jobs/${job.id}`}
          className="bg-primary text-white px-4 py-2 rounded-xl text-sm hover:bg-primary/90"
        >
          Apply
        </Link>
      </div>
    </div>
  );
}

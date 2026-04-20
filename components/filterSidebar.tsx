"use client";
import type { Dispatch, SetStateAction } from "react";

type Filters = {
  location: string;
  type: string;
  salary: string;
};

type FilterSidebarProps = {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
};

export default function FilterSidebar({
  filters,
  setFilters,
}: FilterSidebarProps) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md space-y-5">

      <h2 className="font-semibold text-lg">Filters</h2>

      {/* Location */}
      <div>
        <label className="text-sm">Location</label>
        <input
          type="text"
          className="w-full mt-1 px-3 py-2 border rounded-lg"
          placeholder="Dhaka"
          onChange={(e) =>
            setFilters({ ...filters, location: e.target.value })
          }
        />
      </div>

      {/* Job Type */}
      <div>
        <label className="text-sm">Job Type</label>
        <select
          className="w-full mt-1 px-3 py-2 border rounded-lg"
          onChange={(e) =>
            setFilters({ ...filters, type: e.target.value })
          }
        >
          <option value="">All</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
        </select>
      </div>

      {/* Salary */}
      <div>
        <label className="text-sm">Salary</label>
        <input
          type="text"
          className="w-full mt-1 px-3 py-2 border rounded-lg"
          placeholder="50k+"
          onChange={(e) =>
            setFilters({ ...filters, salary: e.target.value })
          }
        />
      </div>
    </div>
  );
}

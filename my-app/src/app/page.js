"use client";

import brandData from "@/app/data/brandresearch.json";
import Search from "@/components/Search";

export default function HomePage() {
  const brands = brandData.brands;

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-green-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl border border-green-100 rounded-2xl p-10">
        <Search />

        <h4 className="text-2xl font-bold text-green-900 mt-10 border-b-4 border-green-300 pb-1">
          All Brands
        </h4>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {brands.map((b) => (
            <div
              key={b.id}
              className="bg-stone-50 border border-green-100 rounded-xl shadow-sm p-4 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
            >
              <a
                href={`/brand/${b.id}`}
                className="text-green-800 text-lg font-medium hover:underline"
              >
                {b.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

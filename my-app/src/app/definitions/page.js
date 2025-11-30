import brandData from "@/app/data/brandresearch.json";
import { Leaf } from "lucide-react";

export default function Definitions() {
  const { definitions, scoring_rubric: scoringRubric } = brandData;

  const renderDefinition = (key, value) => {
    const isNested = typeof value === "object" && value !== null;

    return (
      <li
        key={key}
        className="bg-stone-50 border border-green-100 rounded-xl p-4 shadow-sm"
      >
        <strong className="text-green-800">{key}:</strong>

        {isNested ? (
          <ul className="ml-4 mt-2 space-y-1 list-disc text-stone-700">
            {Object.entries(value).map(([subKey, subValue]) => (
              <li key={subKey}>
                <strong className="text-green-700">{subKey}:</strong>{" "}
                {subValue}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-stone-700">{value}</p>
        )}
      </li>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-green-50 py-12 px-6">
      {/* Main container card */}
      <div className="max-w-5xl mx-auto bg-white border border-green-100 shadow-xl rounded-2xl p-10">

        {/* Introduction section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-green-900 tracking-tight">
            Sustainable Brand Research
          </h1>
          <p className="mt-3 text-lg text-stone-600">
            Explore how we evaluate eco-friendly and ethically responsible
            fashion brands. Our criteria emphasize fair labor practices,
            environmental responsibility, and transparent sustainability.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {/* DEFINITIONS */}
          <section aria-labelledby="definitions-heading">
            <h2
              id="definitions-heading"
              className="flex items-center gap-2 text-2xl font-bold text-green-800 border-b-4 border-green-300 pb-1"
            >
              <Leaf className="text-green-600" size={24} />
              Definitions
            </h2>

            <ul className="mt-6 space-y-4">
              {Object.entries(definitions).map(([key, value]) =>
                renderDefinition(key, value)
              )}
            </ul>
          </section>

          {/*SCORING RUBRIC */}
          <aside aria-labelledby="rubric-heading">
            <h2
              id="rubric-heading"
              className="flex items-center gap-2 text-2xl font-bold text-green-800 border-b-4 border-green-300 pb-1"
            >
              <Leaf className="text-green-600" size={24} />
              Scoring Rubric
            </h2>

            <p className="mt-3 text-stone-700">
              Brands are rated on labor and environmental impact using a
              five-point scale, where 1 = poor and 5 = exemplary. This rubric
              provides transparency into how we assess fair wages, worker
              safety, carbon emissions, material sustainability, and more.
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {Object.entries(scoringRubric).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-stone-50 border border-green-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                >
                  <strong className="text-lg text-green-800">{key}</strong>

                {Array.isArray(value) ? (
                  <div className="mt-3 space-y-2 text-stone-700">
                    {value.map((row, idx) => (
                      <p key={idx} className="leading-relaxed">
                        {row}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="mt-2 text-stone-700">{value}</p>
                )}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

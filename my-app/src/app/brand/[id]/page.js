import ExpandableSection from '../../../components/ExpandableSection';
import brandData from "@/app/data/brandresearch.json";

export default async function BrandPage({ params }) {
  const unwrapped = await params;
  const { id } = unwrapped;
  const numericId = Number(id);

  const brand = brandData.brands.find(b => b.id === numericId);

  if (!brand) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-green-50 py-12 px-6">
        <div className="max-w-3xl mx-auto bg-white shadow-xl border border-green-100 rounded-2xl p-10 text-center">
          <h1 className="text-3xl font-extrabold text-green-900">Unknown Brand</h1>
          <p className="mt-2 text-stone-600">No data found.</p>
        </div>
      </div>
    );
  }

  // Labor subsets
  const laborRatings = {
    "Child Labor": brand.ratings["Child Labor"],
    "Forced Labor": brand.ratings["Forced Labor"],
    "Working Conditions": brand.ratings["Working Conditions"],
    "Fair Wages": brand.ratings["Fair Wages"],
    "Other Labor": brand.ratings["Other Labor"]
  };

  // Environment subsets
  const environmentalRatings = {
    "Waste Management": brand.ratings["Waste Management"],
    "Carbon Emissions": brand.ratings["Carbon Emissions"],
    "Material Composition": brand.ratings["Material Composition"],
    "Other Environmental": brand.ratings["Other Environmental"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-green-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl border border-green-100 rounded-2xl p-10">

        {/* Back Button */}
        <button
          className="
            mb-6 p-2 rounded-lg bg-white border border-green-200 shadow-sm 
            hover:bg-green-100 hover:shadow-md transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-green-500
          "
        >
          <a href="/" className="flex items-center gap-2 text-green-800 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back
          </a>
        </button>

        {/* Brand Title */}
        <h1 className="text-4xl font-extrabold text-green-900 tracking-tight">
          {brand.name}
        </h1>

        {/* Overall Scores */}
        <div className="mt-4 mb-10 grid md:grid-cols-2 gap-4">
          <div className="bg-stone-50 border border-green-100 p-4 rounded-xl shadow-sm">
            <p className="text-stone-600 text-sm">Labor Score</p>
            <p className="text-3xl font-bold text-green-700">{brand.ratings["Labor Score"]}</p>
          </div>

          <div className="bg-stone-50 border border-green-100 p-4 rounded-xl shadow-sm">
            <p className="text-stone-600 text-sm">Environmental Score</p>
            <p className="text-3xl font-bold text-green-700">{brand.ratings["Environmental Score"]}</p>
          </div>
        </div>

        {/* Expandable Sections */}
        <ExpandableSection
          title="Labor Practices"
          score={brand.ratings["Labor Score"]}
          ratings={laborRatings}
          details={brand.details.Labor}
          rubric={brandData.scoring_rubric}
        />

        <ExpandableSection
          title="Environmental Practices"
          score={brand.ratings["Environmental Score"]}
          ratings={environmentalRatings}
          details={brand.details.Environment}
          rubric={brandData.scoring_rubric}
        />

      </div>
    </div>
  );
}

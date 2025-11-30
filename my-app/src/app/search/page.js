import brandData from "@/app/data/brandresearch.json";
import Search from "@/components/Search";

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const query = params.q || "";

  // search results
  const results = brandData.brands.filter((brand) =>
    brand.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-green-50 py-12 px-6">
      {/* Main Card Container */}
      <div className="max-w-4xl mx-auto bg-white border border-green-100 shadow-xl rounded-2xl p-10">
        
        {/* Search Bar */}
        <Search />

        {/* Search Header */}
        <h2 className="text-2xl font-bold text-green-900 mt-8">
          Search Results for "{query}"
        </h2>

        {/* No Results */}
        {results.length === 0 && (
          <p className="mt-4 text-stone-600">
            No results found. Try searching for another brand.
          </p>
        )}

        {/* Results List */}
        <ul className="mt-6 space-y-3">
          {results.map((r) => (
            <li
              key={r.id}
              className="p-4 bg-stone-50 border border-green-100 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <a
                href={`/brand/${r.id}`}
                className="text-lg font-semibold text-green-800 hover:underline"
              >
                {r.name}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

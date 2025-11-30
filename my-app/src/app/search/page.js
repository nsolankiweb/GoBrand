import brandData from "@/app/data/brandresearch.json";
import Search from "@/components/Search";

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const query = params.q || '';

  // search results
  const results = brandData.brands.filter((brand) =>
    brand.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <Search/>
      <h2>Search Results for "{query}"</h2>

      {results.length === 0 && <p>No results found.</p>}

      <ul>
        {results.map(r => (
          <li 
            key={r.id}
            className="p-2 rounded-md hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <a href={`/brand/${r.id}`}>{r.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

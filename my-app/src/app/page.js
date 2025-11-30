import brandData from "@/app/data/brandresearch.json";
import Search from "@/components/Search";

export default function HomePage() {
  const brands = brandData.brands;
  return (
    <div style={{ padding: 20 }}>
      <Search/>
      <h4>All Brands:</h4>
      <ul>
        {brands.map(b => (
          <li 
            key={b.id}
            className="p-2 rounded-md hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <a href={`/brand/${b.id}`}>{b.name}</a>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default async function SearchPage({ searchParams }) {
    const params = await searchParams;
    const query = params.q || '';

    // fake search results
    const results = [
        { id: '1', name: 'brand1' },
        { id: '2', name: 'brand2' },
        { id: '3', name: 'brand3' },
        ].filter(r => r.name.toLowerCase().includes(query.toLowerCase()));


  return (
    <div style={{ padding: 20 }}>
      <h1>Search Results for "{query}"</h1>

      {results.length === 0 && <p>No results found.</p>}

      <ul>
        {results.map(r => (
          <li key={r.id}>
            <a href={`/brand/${r.id}`}>{r.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

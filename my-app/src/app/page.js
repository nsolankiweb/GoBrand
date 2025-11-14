export default function HomePage() {
  return (
    <div>
      <h1>Welcome to GoBrand!</h1>
      <p>Please search for your brand below to view its details. </p>

      <form action="/search">
        <input
          type="text"
          name="q"
          placeholder="Search brands..."
          style={{ padding: 8, width: '70%' }}
        />
        <button type="submit">Search</button>
      </form>

    </div>
  );
}

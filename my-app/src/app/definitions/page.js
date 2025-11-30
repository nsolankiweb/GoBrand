import brandData from "@/app/data/brandresearch.json";

export default function Definitions() {
  const { definitions } = brandData;

  const renderDefinition = (key, value) => {
    // If the value is an object (like Emissions standards), render nested list
    if (typeof value === "object" && value !== null) {
      return (
        <li key={key}>
          <strong>{key}:</strong>
          <ul>
            {Object.entries(value).map(([subKey, subValue]) => (
              <li key={subKey}>
                <strong>{subKey}:</strong> {subValue}
              </li>
            ))}
          </ul>
        </li>
      );
    }

    return (
      <li key={key}>
        <strong>{key}:</strong> {value}
      </li>
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Definitions</h1>
      <ul>
        {Object.entries(definitions).map(([key, value]) =>
          renderDefinition(key, value)
        )}
      </ul>
    </div>
  );
}

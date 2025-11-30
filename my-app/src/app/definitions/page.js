import brandData from "@/app/data/brandresearch.json";

export default function Definitions() {
  const { definitions, scoring_rubric: scoringRubric } = brandData;

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
      <h1>Definitions and Scoring Rubric</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 40,
          alignItems: "stretch",
        }}
      >
        <section style={{ flex: 1 }} aria-labelledby="definitions-heading">
          <h2 id="definitions-heading">Definitions</h2>
          <ul>
            {Object.entries(definitions).map(([key, value]) =>
              renderDefinition(key, value)
            )}
          </ul>
        </section>

        <aside
          style={{ width: "100%", marginTop: 8, maxWidth: 720 }}
          aria-labelledby="rubric-heading"
        >
          <h2 id="rubric-heading">Scoring Rubric</h2>
          <p style={{ marginTop: 0 }}>
            Our scoring rubric is used to evaluate brands across labor and
            environmental categories. Scores range from 1 (poor) to 5
            (exemplary). Below are the rubric definitions used to compute
            ratings for brands featured throughout this site.
          </p>

          <div>
            {Object.entries(scoringRubric).map(([key, value]) => (
              <div key={key} style={{ marginBottom: 18 }}>
                <strong>{key}</strong>
                {Array.isArray(value) ? (
                  <ol style={{ margin: "6px 0 0 18px" }}>
                    {value.map((row, idx) => (
                      <li key={idx} style={{ marginBottom: 6 }}>{row}</li>
                    ))}
                  </ol>
                ) : (
                  <p style={{ margin: "6px 0 0 0" }}>{value}</p>
                )}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

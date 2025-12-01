'use client';

import { useState } from 'react';
import StarRating from "./StarRating";

export default function ExpandableSection({ 
  score, 
  ratings,
  details,
  rubric
}) {
  const [open, setOpen] = useState(false);


  return (
    <div style={{ marginBottom: 20, paddingBottom: 10 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          padding: "10px 0",
          fontSize: "1.1rem",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <span style={{ flexGrow: 1 }} />

        <span style={{ fontSize: "1.4rem" }}>
          {open ? "▲" : "▼"}
        </span>
      </button>

      <StarRating 
        score={score}
        color="#f5a623"
        size={24}
      />

      {open && (
        <div style={{ marginTop: 10, paddingLeft: 10 }}>
          {Object.entries(ratings).map(([category, value]) => {
            const rubricEntry = rubric[category];
            const rubricExplanation = 
              Array.isArray(rubricEntry) 
                ? rubricEntry[value - 1] 
                : rubricEntry;

            return (
              <div key={category} style={{ marginBottom: 20 }}>
                <p>
                  <strong>{category}:</strong> {value} / 5
                </p>    

                {rubricExplanation && (
                  <p style={{ fontStyle: "italic", color: "#555" }}>
                    {rubricExplanation}
                  </p>
                )}

                <StarRating 
                  score={value}
                  color="#666"
                  size={24}
                />

                {details?.[category] && (
                  <p style={{ marginTop: 8 }}>
                    <strong>Details:</strong> {details[category]}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

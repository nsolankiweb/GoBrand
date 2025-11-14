'use client';

import { useState } from 'react';

export default function ExpandableSection({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginBottom: 20 }}>
      <button
        onClick={() => setOpen(!open)}
      >
        {title} {open ? '▲' : '▼'}
      </button>

      {open && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
}

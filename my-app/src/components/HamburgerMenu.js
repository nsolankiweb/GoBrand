'use client';

import { useState } from 'react';

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {open && (
        <div>
            <div>
                ------------------------------ Hamburger Menu ------------------------------
            </div>
            <div>
                <ul style={{ marginTop: 20 }}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/search?q=">Search</a></li>
                </ul>
            </div>
            <div>
                ------------------------------------------------------------------------------
            </div>
        </div>
      )}
    </>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BuildPage() {
  const [siteName, setSiteName] = useState('');
  const [layout, setLayout] = useState('');

  return (
    <main className="build-container">
      <h1 className="build-title">🔥 Build Your SmokyVerse Site</h1>
      <p className="build-subtitle">
        This is your digital home. Fully yours. Forever.
      </p>

      <section>
        <h2 className="build-section-title">Step 1: Choose Your Site Name</h2>
        <input
          type="text"
          placeholder="MyAwesomeBusiness"
          value={siteName}
          onChange={(e) => setSiteName(e.target.value)}
          className="build-input"
        />
      </section>

      <section>
        <h2 className="build-section-title">Step 2: Pick Your Style</h2>
        <div className="builder-buttons">
          <button onClick={() => setLayout('Classic Business')} className="build-button">Classic Business</button>
          <button onClick={() => setLayout('Portfolio')} className="build-button">Portfolio</button>
          <button onClick={() => setLayout('Blog')} className="build-button">Blog</button>
        </div>
      </section>

      <section>
        <h2 className="build-section-title">Step 3: Own It</h2>
        <p>Want to launch this with your own custom domain name?</p>
        <button className="build-disabled-button" disabled>
          Connect My Domain (Coming Soon)
        </button>
      </section>

      <section className="builder-preview">
        <h2>🔍 Live Preview</h2>
        <div className="preview-box">
          <h3>{siteName || 'Your Site Name Here'}</h3>
          <p>{layout ? `Layout: ${layout}` : 'No layout selected yet'}</p>
        </div>
      </section>

      <button className="build-generate">🚀 Generate My Site</button>
      <Link href="/" className="builder-back">↩ Back to Home</Link>
    </main>
  );
}

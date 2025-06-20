'use client';

import { useState } from 'react';
import Link from 'next/link';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export default function BuildPage() {
  // 🧠 State to track user inputs
  const [siteName, setSiteName] = useState('');
  const [layout, setLayout] = useState('');

  // 🚀 Function to generate HTML + download ZIP
  const handleGenerateClick = () => {
    if (!siteName || !layout) {
      alert('Please enter a site name and choose a layout.');
      return;
    }

    // 🧱 HTML content dynamically created based on siteName + layout
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${siteName}</title>
  <style>
    body {
      background-color: #000;
      color: #00ccff;
      font-family: sans-serif;
      padding: 2rem;
      text-align: center;
    }
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.2rem;
    }
  </style>
</head>
<body>
  <h1>${siteName}</h1>
  <p>Layout: ${layout}</p>
</body>
</html>`;

    // 📦 Create and trigger zip download
    const zip = new JSZip();
    zip.file('index.html', htmlContent);

    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, `${siteName}_site.zip`);
      setSiteName('');
      setLayout('');
    });
  };

  return (
    <main className="build-container">
      {/* 🧱 Page Title */}
      <h1 className="build-title">SmokeyVerse Website Builder</h1>
      <p className="build-subtitle">This is your digital home. Fully yours. Forever.</p>

      {/* ✏️ Site Name Input */}
      <section>
        <h2 className="build-section-title">Step 1: Choose Your Site Name</h2>
        <input
          type="text"
          placeholder="Enter your site name..."
          value={siteName}
          onChange={(e) => setSiteName(e.target.value)}
          className="build-input"
        />
      </section>

      {/* 🎨 Layout Selection Buttons */}
      <section>
        <h2 className="build-section-title">Step 2: Pick Your Style</h2>
        <div className="build-buttons">
          <button className="build-button" onClick={() => setLayout('Classic Business')}>
            Classic Business
          </button>
          <button className="build-button" onClick={() => setLayout('Portfolio')}>
            Portfolio
          </button>
          <button className="build-button" onClick={() => setLayout('Blog')}>
            Blog
          </button>
        </div>
      </section>

      {/* 💾 Generate Button */}
      <button className="build-generate" onClick={handleGenerateClick}>
        🚀 Generate My Site
      </button>

      {/* 👁️ Live Preview Section */}
      <div className="preview-box">
        <h3>{siteName || 'No site name yet.'}</h3>
        <p>{layout ? `Layout: ${layout}` : 'No layout selected yet.'}</p>
      </div>

      {/* 🔙 Back to Home */}
      <Link href="/" className="build-back">
        ⬅ Back to Home
      </Link>
    </main>
  );
}

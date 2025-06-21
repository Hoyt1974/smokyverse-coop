'use client';

import { useState } from 'react';
import Link from 'next/link';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export default function BuildPage() {
  // 🧠 State for user input fields
  const [siteName, setSiteName] = useState('');
  const [layout, setLayout] = useState('');

 // 🧠 Generate downloadable ZIP with custom Classic Business layout
const handleGenerateClick = () => {
  if (!siteName || !layout) {
    alert('Please enter a site name and choose a layout.');
    return;
  }

  // 🧱 Define HTML based on selected layout
  let htmlContent = '';

  if (layout === 'Classic Business') {
    htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${siteName}</title>
  <style>
    /* 💻 Reset + Theme Setup */
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: #000;
      color: #00ccff;
    }
    header {
      background-color: #111;
      padding: 2rem;
      text-align: center;
      border-bottom: 2px solid #00ccff;
    }
    header h1 {
      margin: 0;
      font-size: 2.5rem;
    }
    section {
      padding: 2rem;
      text-align: center;
    }
    section h2 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
    section p {
      font-size: 1.1rem;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }
    footer {
      margin-top: 3rem;
      text-align: center;
      font-size: 0.9rem;
      color: #888;
    }
  </style>
</head>
<body>
  <!-- 🏢 Classic Business Layout -->
  <header>
    <h1>${siteName}</h1>
  </header>

  <section>
    <h2>Welcome to ${siteName}</h2>
    <p>Your trusted partner for top-quality service. We specialize in making things awesome for our customers. Contact us today to get started!</p>
  </section>

  <footer>
    &copy; ${new Date().getFullYear()} ${siteName}. All rights reserved.
  </footer>
</body>
</html>`;
  } else {
    // 🔸 Fallback for other layouts (optional for now)
    htmlContent = `<h1>${siteName}</h1><p>Layout: ${layout}</p>`;
  }

  // 🗜️ Bundle HTML into a downloadable ZIP
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
      {/* 🌐 Header */}
      <h1 className="build-title">SmokeyVerse Website Builder</h1>
      <p className="build-subtitle">This is your digital home. Fully yours. Forever.</p>

      {/* 📝 Site Name Input */}
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

      {/* 🎨 Layout Buttons */}
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

      {/* ⚡ Generate Button */}
      <button className="build-generate" onClick={handleGenerateClick}>
        🚀 Generate My Site
      </button>

      {/* 🔍 Live Preview */}
      <div className="preview-box">
        <h3>{siteName || 'No site name yet.'}</h3>
        <p>{layout ? `Layout: ${layout}` : 'No layout selected yet.'}</p>
      </div>

      {/* ⬅️ Back Navigation */}
      <Link href="/" className="build-back">
        ← Back to Home
      </Link>
    </main>
  );
}

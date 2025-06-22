'use client';

import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { useState } from 'react';

// 🛠️ Build Page Component — HTML Builder UI
export default function BuildPage() {
  // 🌱 User inputs: Site name, layout, and services
  const [siteName, setSiteName] = useState('');
  const [layout, setLayout] = useState('');
  const [services, setServices] = useState('');

  // ⚙️ Handler to generate the custom HTML + ZIP download
  const handleGenerateClick = () => {
    if (!siteName || !layout) {
      alert('Please enter a site name and choose a layout.');
      return;
    }

    // 📦 HTML content to be zipped — starts empty
    let htmlContent = '';

    // 💼 Layout: Classic Business — full HTML template
    if (layout === 'Classic Business') {
      const servicesArray = services
        .split(',')
        .map((service) => service.trim())
        .filter((s) => s.length > 0);

      htmlContent = `<!DOCTYPE html>
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
    header, section, footer {
      margin-bottom: 2rem;
    }
    h1, h2, h3 {
      color: #00ccff;
    }
    .divider {
      border-top: 2px solid #00ccff;
      margin: 2rem 0;
    }
    .contact a {
      color: #00ccff;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <!-- 🌟 Site Title -->
  <header>
    <h1>${siteName}</h1>
    <p><strong>Welcome to ${siteName}</strong> — your trusted partner for excellence!</p>
  </header>

  <div class="divider"></div>

  <!-- 🧠 About Section -->
  <section>
    <h2>About Us</h2>
    <p>
      We're proud to serve our community with top-quality service and a commitment to excellence.
      Our team is passionate about helping you succeed.
    </p>
  </section>

  <div class="divider"></div>

  <!-- 🛠️ Services Section -->
  <section>
    <h2>Our Services</h2>
    <ul style="list-style-type: none; padding: 0;">
      ${servicesArray.map((s) => `<li>✅ ${s}</li>`).join('\n      ')}
    </ul>
  </section>

  <div class="divider"></div>

  <!-- 📞 Contact Section -->
  <section class="contact">
    <h2>Contact Us</h2>
    <p>Phone: (123) 456-7890</p>
    <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
    <p>Visit us in person or send a message anytime!</p>
  </section>

  <footer>
    <p>© 2025 ${siteName}. All rights reserved.</p>
  </footer>
</body>
</html>`;
    } else {
      // 🧪 Default fallback if other layouts are selected
      htmlContent = `<h1>${siteName}</h1><p>Layout: ${layout}</p>`;
    }

    // 🗜️ ZIP Generation using JSZip
    const zip = new JSZip();
    zip.file('index.html', htmlContent);
    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, `${siteName.replace(/\s+/g, '_')}_site.zip`);
    });
  };

  // 🖥️ Page UI — SmokeyVerse Builder Form
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center text-white bg-black">
      <h1 className="text-4xl font-bold text-cyan-400 mb-6">SmokeyVerse Website Builder</h1>
      <p className="mb-8 text-sm text-gray-400">This is your digital home. Fully yours. Forever.</p>

      {/* Site Name Input */}
      <div className="mb-4">
        <label htmlFor="siteName" className="block text-white mb-2">Step 1: Choose Your Site Name</label>
        <input
          id="siteName"
          type="text"
          value={siteName}
          onChange={(e) => setSiteName(e.target.value)}
          placeholder="Enter your site name..."
          className="text-black p-2 rounded"
        />
      </div>

      {/* Layout Picker */}
      <div className="mb-4">
        <p className="mb-2 text-white">Step 2: Pick Your Style</p>
        <div className="flex gap-4 justify-center">
          <button onClick={() => setLayout('Classic Business')} className={`px-4 py-2 border ${layout === 'Classic Business' ? 'bg-cyan-400 text-black' : 'text-cyan-400 border-cyan-400'}`}>
            Classic Business
          </button>
          <button disabled className="px-4 py-2 border text-gray-500 border-gray-500 cursor-not-allowed">
            Portfolio
          </button>
          <button disabled className="px-4 py-2 border text-gray-500 border-gray-500 cursor-not-allowed">
            Blog
          </button>
        </div>
      </div>

      {/* Services Input */}
      {layout === 'Classic Business' && (
        <div className="mb-4 w-full max-w-md">
          <label htmlFor="services" className="block text-white mb-2">
            Step 3: List Your Services (separate with commas)
          </label>
          <input
            id="services"
            type="text"
            value={services}
            onChange={(e) => setServices(e.target.value)}
            placeholder="e.g. Handmade Crafts, Woodworking, Custom Orders"
            className="text-black p-2 rounded w-full"
          />
        </div>
      )}

      {/* Generate Button */}
      <button
        onClick={handleGenerateClick}
        className="mt-4 bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-2 px-6 rounded"
      >
        🚀 Generate My Site
      </button>

      {/* Debug Helper */}
      <p className="mt-6 text-sm text-gray-400 italic">
        No site name yet. No layout selected yet.
      </p>

      <a href="/" className="text-cyan-400 mt-4 underline">← Back to Home</a>
    </main>
  );
}

'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function BuildPage() {
  const [siteName, setSiteName] = useState('')
  const [layout, setLayout] = useState('')

  return (
    <main
      style={{
        backgroundColor: 'black',
        color: '#00ccff',
        minHeight: '100vh',
        padding: '2rem',
        fontFamily: 'sans-serif',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
        }}
      >
        🔥 Build Your SmokyVerse Site
      </h1>
      <p>This is your digital home. Fully yours. Forever.</p>

      {/* Step 1 */}
      <h2 style={{ fontSize: '1.2rem', marginTop: '2rem' }}>
        Step 1: Choose Your Site Name
      </h2>
      <input
        type="text"
        placeholder="MyAwesomeBusiness"
        value={siteName}
        onChange={(e) => setSiteName(e.target.value)}
        style={{
          backgroundColor: '#111',
          border: '1px solid #00ccff',
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          color: '#00ccff',
          marginTop: '0.5rem',
        }}
      />

      {/* Step 2 */}
      <h2 style={{ fontSize: '1.2rem', marginTop: '2rem' }}>
        Step 2: Pick Your Style
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        {['Classic Business', 'Portfolio', 'Blog'].map((style) => (
          <button
            key={style}
            onClick={() => setLayout(style)}
            style={{
              backgroundColor: layout === style ? '#00ccff' : '#111',
              color: layout === style ? 'black' : '#00ccff',
              border: '1px solid #00ccff',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            {style}
          </button>
        ))}
      </div>

      {/* Step 3 */}
      <h2 style={{ fontSize: '1.2rem', marginTop: '2rem' }}>Step 3: Own It</h2>
      <p>Want to launch this with your own custom domain name?</p>
      <button
        disabled
        style={{
          marginTop: '0.5rem',
          backgroundColor: '#222',
          border: '1px solid #00ccff',
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          color: '#aaa',
          cursor: 'not-allowed',
        }}
      >
        Connect My Domain (Coming Soon)
      </button>

      {/* Live Preview */}
      <h2 style={{ fontSize: '1.2rem', marginTop: '2rem' }}>🔍 Live Preview</h2>
      <div
        style={{
          border: '2px dashed #00ccff',
          padding: '1rem',
          borderRadius: '10px',
          margin: '1rem auto',
          maxWidth: '400px',
        }}
      >
        <h3 style={{ color: '#00ccff' }}>
          {siteName || 'Your Site Name Here'}
        </h3>
        <p style={{ color: '#aaa' }}>
          {layout ? `Layout: ${layout}` : 'No layout selected yet'}
        </p>
      </div>

      <button
        style={{
          backgroundColor: '#00ccff',
          color: 'black',
          padding: '0.75rem 1.5rem',
          fontWeight: 'bold',
          borderRadius: '6px',
          marginBottom: '1rem',
          cursor: 'pointer',
        }}
      >
        🚀 Generate My Site
      </button>

      <div>
        <Link href="/" style={{ color: '#00ccff', textDecoration: 'underline' }}>
          ⬅ Back to Home
        </Link>
      </div>
    </main>
  )
}

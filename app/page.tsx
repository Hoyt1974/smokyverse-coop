import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>
        Welcome to <span style={{ color: '#00ccff' }}>SmokyVerse Co-op</span>
      </h1>
      <p>Your portal to community-powered business in the Smoky Mountains.</p>

      <Link href="/build">
        <img
          src="/images/sample.jpg"
          alt="SmokyVerse Co-op"
          style={{
            maxWidth: '100%',
            height: 'auto',
            marginTop: '2rem',
            borderRadius: '1rem',
            boxShadow: '0 0 20px #00ccff',
            cursor: 'pointer',
          }}
        />
      </Link>
    </main>
  );
}

// import Image from 'next/image'
// import CoopImage from '../public/images/sample.jpg'

// export default function Home() {
//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen p-4">
//       <h1 className="text-4xl font-bold mb-6 text-center">Welcome to SmokeyVerse Co-op</h1>
//       <Image
//         src={CoopImage}
//         alt="SmokeyVerse Co-op"
//         width={800}
//         height={500}
//         className="rounded-lg shadow-lg"
//       />
//     </main>
//   )
// }
// app/page.tsx
// export default function Home() {
//   return (
//     <main style={{ padding: '2rem', textAlign: 'center' }}>
//       <h1>Welcome to <span style={{ color: '#00ccff' }}>SmokyVerse Co-op</span></h1>
//       <p>Your portal to community-powered business in the Smoky Mountains.</p>
//       <img
//         src="/images/sample.jpg"
//         alt="SmokyVerse Co-op"
//         style={{
//           maxWidth: '100%',
//           height: 'auto',
//           marginTop: '2rem',
//           borderRadius: '1rem',
//           boxShadow: '0 0 20px #00ccff'
//         }}
//       />
//     </main>
//   );
// }
// app/build/page.tsx
export default function BuildPage() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ color: '#00ccff' }}>🔥 Build Your Website Here</h1>
      <p style={{ color: '#aaa' }}>This is where the magic happens</p>
    </main>
  );
}

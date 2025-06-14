import Image from 'next/image'
import CoopImage from '../public/images/sample.jpg'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to SmokeyVerse Co-op</h1>
      <Image
        src={CoopImage}
        alt="SmokeyVerse Co-op"
        width={800}
        height={500}
        className="rounded-lg shadow-lg"
      />
    </main>
  )
}

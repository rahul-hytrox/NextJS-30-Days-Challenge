import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">30 Days Next.js Challenge</h1>
      <nav className="mt-4 space-y-2">
        <div><Link href="/day-1-routing" className="text-blue-500 underline">Day 1: File-based Routing</Link></div>
        <div><Link href="/day-2-server-client" className="text-blue-500 underline">Day 2: Server vs Client (coming soon)</Link></div>
      </nav>
    </div>
  );
}
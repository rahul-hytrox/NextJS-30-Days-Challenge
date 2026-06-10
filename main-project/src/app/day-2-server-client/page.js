import Link from 'next/link';

export default function Day2Home() {
    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">📘 Day 2: Server vs Client Components</h1>
            <p className="text-gray-600 mb-6">Learn the difference and when to use each.</p>
            <div className="space-y-4">
                <div className="border rounded-lg p-4">
                    <h2 className="text-xl font-semibold">1. Server Component</h2>
                    <p className="text-gray-500 mb-2">Data fetched on server, SEO friendly.</p>
                    <Link href="/day-2-server-client/server-demo" className="text-blue-500 underline">View Demo →</Link>
                </div>
                <div className="border rounded-lg p-4">
                    <h2 className="text-xl font-semibold">2. Client Component</h2>
                    <p className="text-gray-500 mb-2">Interactive with useState, onClick.</p>
                    <Link href="/day-2-server-client/client-demo" className="text-blue-500 underline">View Demo →</Link>
                </div>
                <div className="border rounded-lg p-4">
                    <h2 className="text-xl font-semibold">3. Mixed (Server + Client)</h2>
                    <p className="text-gray-500 mb-2">Server fetches data, client adds interactivity.</p>
                    <Link href="/day-2-server-client/mixed-demo" className="text-blue-500 underline">View Demo →</Link>
                </div>
            </div>
        </div>
    );
}
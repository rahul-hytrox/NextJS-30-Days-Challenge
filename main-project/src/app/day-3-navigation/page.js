import Link from 'next/link';

export default function Day3Home() {
    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold">🧭 Day 3: Navigation</h1>
            <p className="text-gray-600 mt-2">Learn Link component, useRouter, and active link highlighting.</p>
            <div className="mt-6 space-y-3">
                <div className="border rounded p-4">
                    <Link href="/day-3-navigation/link-demo" className="text-blue-500 underline">1. Link Component Demo →</Link>
                    <p className="text-sm text-gray-500">Client-side navigation with prefetching.</p>
                </div>
                <div className="border rounded p-4">
                    <Link href="/day-3-navigation/router-demo" className="text-blue-500 underline">2. useRouter Hook Demo →</Link>
                    <p className="text-sm text-gray-500">Programmatic navigation (buttons, after submit).</p>
                </div>
                <div className="border rounded p-4">
                    <Link href="/day-3-navigation/active-link-demo" className="text-blue-500 underline">3. Active Link Highlighting →</Link>
                    <p className="text-sm text-gray-500">Highlight current page in navbar.</p>
                </div>
            </div>
        </div>
    );
}
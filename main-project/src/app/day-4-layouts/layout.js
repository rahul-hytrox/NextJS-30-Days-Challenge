import Link from 'next/link';

export default function Day4Layouts({ children }) {
    return (
        <div className="flex min-h-screen">
            <aside className="w-64 bg-gray-800 text-white p-4">
                <h2 className="text-xl font-bold mb-4">📐 Day 4</h2>
                <nav className="space-y-2">
                    <Link href="/day-4-layouts" className="block hover:bg-gray-700 p-2 rounded">Home</Link>
                    <Link href="/day-4-layouts/about" className="block hover:bg-gray-700 p-2 rounded">About</Link>
                    <Link href="/day-4-layouts/blog" className="block hover:bg-gray-700 p-2 rounded">Blog</Link>
                </nav>
            </aside>
            {/* Main Content */}
            <main className="flex-1 p-6 bg-gray-100 min-h-screen">
                {children}
            </main>
        </div>
    );
}
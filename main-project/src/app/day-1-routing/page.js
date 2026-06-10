import Link from 'next/link';

export default function Day1Home() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Day 1: File-based Routing Demo</h1>
            <nav className="space-x-4 mt-4">
                <Link href="/day-1-routing/about" className="text-blue-500">About</Link>
                <Link href="/day-1-routing/products" className="text-blue-500">Products</Link>
                <Link href="/day-1-routing/blog/2024/03/hello" className="text-blue-500">Sample Blog</Link>
            </nav>
        </div>
    );
}
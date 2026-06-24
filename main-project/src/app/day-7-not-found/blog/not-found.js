import Link from 'next/link';

export default function BlogNotFound() {
    return (
        <div className="p-6 min-h-[60vh] flex flex-col items-center justify-center text-center">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md">
                <h1 className="text-5xl font-bold text-red-400 mb-2">📭</h1>
                <h2 className="text-xl font-bold text-red-700 mb-2">Blog Post Not Found</h2>
                <p className="text-gray-600 mb-4">Ye blog post exist nahi karti.</p>
                <Link
                    href="/day-7-not-found/blog"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
                >
                    ← Back to Blog
                </Link>
            </div>
        </div>
    );
}
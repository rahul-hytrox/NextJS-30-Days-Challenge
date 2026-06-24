import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="p-6 min-h-[60vh] flex flex-col items-center justify-center text-center">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 max-w-md">
                <h1 className="text-6xl font-bold text-gray-300 mb-2">404</h1>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h2>
                <p className="text-gray-600 mb-4">
                    Oops! The page you are looking for does not exist in this section.
                </p>
                <Link
                    href="/day-7-not-found"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all shadow-sm hover:shadow"
                >
                    ← Back to Day 7 Home
                </Link>
            </div>
        </div>
    );
}
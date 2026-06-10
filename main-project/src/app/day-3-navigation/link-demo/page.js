import Link from 'next/link';

export default function LinkDemo() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">🔗 Link Component</h1>
            <p className="mt-2">Click these links – page won't fully reload (client-side navigation).</p>
            <div className="mt-4 space-x-4">
                <Link href="/day-3-navigation/link-demo" className="text-blue-500 underline">Same page (this)</Link>
                <Link href="/day-3-navigation/router-demo" className="text-blue-500 underline">Go to useRouter demo</Link>
                <Link href="/" className="text-blue-500 underline">Back to Home</Link>
            </div>
            <div className="mt-6 p-3 bg-gray-100 rounded">
                <p>✅ Prefetching: Links are automatically prefetched when they enter viewport.</p>
            </div>
        </div>
    );
}
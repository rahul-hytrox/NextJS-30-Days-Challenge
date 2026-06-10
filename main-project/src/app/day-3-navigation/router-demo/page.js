'use client';
import { useRouter } from 'next/navigation';

export default function RouterDemo() {
    const router = useRouter();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">🎮 useRouter Hook</h1>
            <p className="mt-2">Programmatic navigation with JavaScript.</p>
            <div className="mt-4 space-x-2">
                <button
                    onClick={() => router.push('/day-3-navigation/link-demo')}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                    Go to Link Demo
                </button>
                <button
                    onClick={() => router.back()}
                    className="bg-gray-500 text-white px-3 py-1 rounded"
                >
                    Go Back
                </button>
                <button
                    onClick={() => router.refresh()}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                >
                    Refresh Current Page
                </button>
            </div>
            <div className="mt-6 p-3 bg-gray-100 rounded">
                <p>🔁 router.push() / router.replace() / router.back() / router.forward() / router.refresh()</p>
            </div>
        </div>
    );
}
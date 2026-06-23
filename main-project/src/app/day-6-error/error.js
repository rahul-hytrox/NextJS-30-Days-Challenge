'use client';
import { useEffect } from "react";

export default function Error({
    error,
    reset
}) {
    useEffect(() => {
        console.log("DAY 6 ERROR:", error)
    }, [error]);

    return (
        <div className="p-6 text-center min-h-[60vh] flex flex-col items-center justify-center">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md">
                <h2 className="text-2xl font-bold text-red-600 mb-2">⚠️ Something Went Wrong</h2>
                <p className="text-gray-600 mb-4">
                    {error?.message || 'An unexpected error occurred.'}
                </p>
                <button
                    onClick={() => reset()}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all shadow-sm hover:shadow"
                >
                    🔄 Try Again
                </button>
            </div>
        </div>
    );
}
// main-project/src/app/day-5-loading/suspense-demo/page.js
import { Suspense } from 'react';
import CountriesList from './CountriesList';

export default function Page() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">🌍 Suspense Demo</h1>
            <p className="text-gray-600 mb-2">Page header aur ye text <strong>turant</strong> aa gaya!</p>

            {/* ✅ Yeh box turant dikhega, kyunki isme data fetch nahi ho raha */}
            <div className="bg-green-100 text-green-800 p-3 rounded mb-4">
                ✅ Page structure loaded instantly!
            </div>

            {/* ⏳ Ab is hisse mein data fetch ho raha hai, isliye Suspense use kiya */}
            <Suspense fallback={
                <div className="flex justify-center items-center h-40 border-2 border-dashed border-blue-300 rounded-lg">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                        <p className="mt-2 text-gray-500">Loading countries list...</p>
                    </div>
                </div>
            }>
                {/* Ye component async hai, isliye isme time lagega */}
                <CountriesList />
            </Suspense>
        </div>
    );
}
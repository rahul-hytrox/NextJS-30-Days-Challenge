import Link from 'next/link';

async function getCountry() {
    try {
        const res = await fetch('https://countries-states-cities-api-v2.vercel.app/api/countries');

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const result = await res.json();

        if (result.success && Array.isArray(result.data)) {
            return result.data;
        } else {
            console.error('API se data array nahi mila:', result);
            return [];
        }
    } catch (error) {
        console.error('Fetch error:', error);
        return [];
    }
}

export default async function Day5Page() {
    const countries = await getCountry();

    if (countries.length === 0) {
        return (
            <div className="p-6">
                <h1 className="text-2xl font-bold">⚠️ No Data</h1>
                <p className="text-gray-600">Countries list empty or API error.</p>
                <p className="text-sm text-red-500">Check terminal for error logs.</p>
            </div>
        );
    }

    return (
        <div className="p-6">
            {/* ✅ Heading ke saath hi Link daal diya */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <h1 className="text-2xl font-bold">🌍 Countries List</h1>
                <Link
                    href="/day-5-loading/suspense-demo"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow"
                >
                    ⚡ Suspense Demo
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </Link>
            </div>

            <p className="text-gray-600 mb-4">Total Countries: {countries.length}</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {countries.slice(0, 300).map((country) => (
                    <div
                        key={country.id}
                        className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all hover:border-blue-400 bg-white"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl">{country.emoji}</span>
                            <h3 className="font-semibold text-gray-800 text-sm truncate" title={country.name}>
                                {country.name}
                            </h3>
                        </div>
                        <div className="text-xs text-gray-500 space-y-1 mt-2 border-t pt-2 border-gray-100">
                            <p><span className="font-medium">Country Code :</span> {country.iso3}</p>
                            <p><span className="font-medium">Phone Code :</span> +{country.phonecode}</p>
                            <p><span className="font-medium">Currency :</span> {country.currency_symbol} - {country.currency}</p>
                            <p><span className="font-medium">Region :</span> {country.region}</p>

                            {/* Location Link - Google Maps */}
                            <p className="flex items-center gap-1">
                                <span className="font-medium text-gray-600">📍 Location :</span>
                                {country.latitude && country.longitude ? (
                                    <a
                                        href={`https://www.google.com/maps?q=${country.latitude},${country.longitude}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center gap-1"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        {parseFloat(country.latitude).toFixed(4)}, {parseFloat(country.longitude).toFixed(4)}
                                    </a>
                                ) : (
                                    <span className="text-gray-400">Coordinates N/A</span>
                                )}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
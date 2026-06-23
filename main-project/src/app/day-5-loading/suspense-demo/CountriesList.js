async function getCountries() {
    // Thoda artificial delay daalte hain taaki loader dikhe
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const res = await fetch('https://countries-states-cities-api-v2.vercel.app/api/countries');
    const result = await res.json();

    if (result.success && Array.isArray(result.data)) {
        return result.data;
    }
    return [];
}

export default async function CountriesList() {
    const countries = await getCountries();

    return (
        <div className="border-2 border-blue-200 p-4 rounded-lg bg-blue-50">
            <h2 className="font-bold text-lg mb-2">📋 Country List ({countries.length})</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {countries.slice(0, 20).map((country) => (
                    <div key={country.id} className="bg-white p-2 rounded shadow-sm text-sm">
                        <span className="mr-1">{country.emoji}</span> {country.name}
                    </div>
                ))}
            </div>
        </div>
    );
}
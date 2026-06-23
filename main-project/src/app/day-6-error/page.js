export const dynamic = 'force-dynamic';

async function getData() {
    throw new Error('Something went wrong, while fetching data!');
}

export default async function Day6Page() {
    const data = await getData();
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">✅ Data Loaded Successfully</h1>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
}

import CounterClient from './CounterClient';

async function getInitialValue() {
    // Simulate a server-side computation or DB call
    return 100;
}

export default async function MixedDemo() {
    const initial = await getInitialValue();
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">🔄 Mixed: Server + Client</h1>
            <p className="text-gray-600 mb-4">Server component fetches initial value, client component makes it interactive.</p>
            <CounterClient initial={initial} />
        </div>
    );
}
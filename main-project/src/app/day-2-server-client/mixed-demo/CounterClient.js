'use client';
import { useState } from 'react';

export default function CounterClient({ initial }) {
    const [count, setCount] = useState(initial);
    return (
        <div>
            <p>Server sent initial value: <strong>{initial}</strong></p>
            <button
                onClick={() => setCount(c => c + 1)}
                className="bg-green-500 text-white px-4 py-2 rounded mt-2"
            >
                Increment ({count})
            </button>
        </div>
    );
}
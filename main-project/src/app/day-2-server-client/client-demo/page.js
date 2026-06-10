'use client';
import { useState } from 'react';

export default function ClientDemo() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">🖱️ Client Component</h1>
            <p className="text-gray-600">Interactive: useState, onClick, onChange</p>
            <button
                onClick={() => setCount(c => c + 1)}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            >
                Clicked {count} times
            </button>
            <div className="mt-4">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type something"
                    className="border p-2 rounded"
                />
                <p className="mt-2">You typed: {text}</p>
            </div>
        </div>
    );
}   
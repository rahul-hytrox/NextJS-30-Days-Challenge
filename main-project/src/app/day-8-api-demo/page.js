'use client';
import { useState } from 'react';

export default function ApiDemo() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    // Fetch Users (GET)
    const fetchUsers = async () => {
        setLoading(true);
        const res = await fetch('/api/users');
        const data = await res.json();
        setUsers(data.users);
        setLoading(false);
    };

    // Add User (POST)
    const addUser = async () => {
        if (!name.trim()) return;
        const res = await fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name }),
        });
        const data = await res.json();
        console.log(data);
        setName('');
        fetchUsers(); // Refresh list
    };

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">📡 Day 8: API Routes Demo</h1>

            <div className="space-y-4">
                <button
                    onClick={fetchUsers}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    {loading ? 'Loading...' : 'Fetch Users (GET /api/users)'}
                </button>

                <div className="flex gap-2">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                        className="border p-2 flex-1"
                    />
                    <button
                        onClick={addUser}
                        className="bg-green-600 text-white px-4 py-2 rounded"
                    >
                        Add User (POST /api/users)
                    </button>
                </div>

                <ul className="mt-4 space-y-1">
                    {users.map((u) => (
                        <li key={u.id} className="border p-2 rounded bg-gray-50">
                            {u.id}. {u.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
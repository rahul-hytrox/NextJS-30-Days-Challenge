async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
}

export default async function ServerDemo() {
    const users = await getUsers();
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">🖥️ Server Component</h1>
            <p className="text-gray-600">Data fetched on server. View page source: HTML has user names.</p>
            <ul className="mt-4 space-y-2">
                {users.map(user => <li key={user.id} className="border-b pb-1">{user.name}</li>)}
            </ul>
        </div>
    );
}
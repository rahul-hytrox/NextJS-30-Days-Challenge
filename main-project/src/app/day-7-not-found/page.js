export default function Day7Page() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">📄 Day 7: Custom 404 Page</h1>
            <p className="text-gray-600">Ye page exist karta hai. Isko dekhne ke liye sahi URL use karo.</p>

            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded">
                <p className="text-sm">✅ Is folder mein <code>not-found.js</code> bhi hai.</p>
                <p className="text-sm">Agar tum koi galat URL daalte ho, toh custom 404 page dikhega.</p>
            </div>
        </div>
    );
}
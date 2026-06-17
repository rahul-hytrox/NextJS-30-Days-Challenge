export default function BlogHome() {
    return (
        <div>
            <h2 className="text-xl font-bold">📚 All Blog Posts</h2>
            <p>This page is inside Blog Layout (which is inside Main Layout).</p>
            <ul className="list-disc ml-6 mt-2">
                <li>Post 1: Next.js Basics</li>
                <li>Post 2: Server Actions</li>
                <li>Post 3: Deployment</li>
            </ul>
        </div>
    );
}
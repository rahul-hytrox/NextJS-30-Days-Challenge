export default function BlogLayout({ children }) {
    return (
        <div>
            {/* Nested Header / Sub-nav */}
            <div className="bg-blue-100 p-3 rounded mb-4 flex space-x-4">
                <span className="font-semibold">📰 Blog Section</span>
                <a href="/day-4-layouts/blog" className="text-blue-600 hover:underline">All Posts</a>
                <a href="/day-4-layouts/blog/tutorial" className="text-blue-600 hover:underline">Tutorials</a>
                <a href="/day-4-layouts/blog/review" className="text-blue-600 hover:underline">Reviews</a>
            </div>
            <div>{children}</div>
        </div>
    );
}
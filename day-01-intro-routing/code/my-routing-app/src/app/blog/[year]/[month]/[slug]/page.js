export default async function BlogPost({ params }) {
    const { year, month, slug } = await params;  // ✅ await karo

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Blog Post: {slug}</h1>
            <p>Date: {year}-{month}</p>
            <p>This is a demo of nested dynamic routes.</p>
        </div>
    );
}
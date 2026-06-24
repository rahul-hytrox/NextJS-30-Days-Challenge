import Link from "next/link";

export default function BlogPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">📝 Blog Section</h1>
            <p className="text-gray-600">Here you are in blog Page.</p>
            <Link href="/day-7-not-found" className="text-blue-500 underline">Back</Link>
        </div>
    );
}
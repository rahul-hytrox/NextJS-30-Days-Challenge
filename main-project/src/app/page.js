import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Next.js Routing Demo</h1>
      <nav className="space-x-4">
        <Link href="/about" className="text-blue-500 hover:underline">About</Link>
        <Link href="/products" className="text-blue-500 hover:underline">Products</Link>
        <Link href="/blog/2024/03/hello-world" className="text-blue-500 hover:underline">Sample Blog</Link>
      </nav>
    </div>
  );
}
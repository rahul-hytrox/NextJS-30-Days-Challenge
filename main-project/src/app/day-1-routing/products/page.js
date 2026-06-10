import Link from 'next/link';

const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 599 },
    { id: 3, name: 'Headphones', price: 199 },
]

export default function ProductList() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">All Products</h1>
            <ul className="space-y-2">
                {products.map(product => (
                    <li key={product.id}>
                        <Link href={`/day-1-routing/products/${product.id}`} className="text-blue-500 hover:underline">
                            {product.name} - ${product.price}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
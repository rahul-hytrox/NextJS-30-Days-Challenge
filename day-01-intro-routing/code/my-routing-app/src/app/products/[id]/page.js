export default async function ProductDetail({ params }) {
    const { id } = await params;  // ✅ await karo

    const products = {
        1: { name: 'Laptop', price: 999, description: 'High performance laptop' },
        2: { name: 'Phone', price: 599, description: 'Latest smartphone' },
        3: { name: 'Headphones', price: 199, description: 'Noise cancelling' },
    };
    const product = products[id];

    if (!product) {
        return <div className="p-6">Product not found</div>;
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-lg">Price: ${product.price}</p>
            <p>{product.description}</p>
        </div>
    );
}
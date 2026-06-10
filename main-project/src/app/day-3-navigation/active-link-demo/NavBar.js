'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { name: 'Home', href: '/day-3-navigation/active-link-demo' },
    { name: 'About', href: '/day-3-navigation/active-link-demo/about' },
    { name: 'Contact', href: '/day-3-navigation/active-link-demo/contact' },
];

export default function NavBar() {
    const pathname = usePathname();
    return (
        <nav className="flex space-x-4 border-b pb-2 mb-4">
            {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`px-3 py-1 rounded ${isActive ? 'bg-blue-600 text-white' : 'text-blue-500 hover:bg-gray-100'
                            }`}
                    >
                        {item.name}
                    </Link>
                );
            })}
        </nav>
    );
}
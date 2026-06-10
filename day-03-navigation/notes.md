# Day 3: Navigation in Next.js

Next.js provides two main ways to handle navigation:

1. **`<Link>` component** – for client‑side transitions (no full page reload)
2. **`useRouter` hook** – for programmatic navigation (e.g., after form submit)
3. **Active link highlighting** – using `usePathname` to style current route

---

## 1. `<Link>` Component

Import from `next/link` and wrap any clickable element.

```jsx
import Link from 'next/link';

export default function Nav() {
  return (
    <Link href="/about" className="text-blue-500">
      Go to About
    </Link>
  );
}
```

### Features:

1. **Prefetches linked pages automatically** (when link enters viewport)
2. **No full page reload – SPA‑like experience**
3. **Works with dynamic routes:** `href="/products/[id]" as="/products/123"`

## 2. useRouter Hook (Client Component only)
**-Import from next/navigation inside a `'use client'` component.**

```jsx
'use client';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  return <button onClick={() => router.back()}>Go Back</button>;
}
```

### Available methods:

* `router.push('/path')` – navigate to new page (adds to history)
* `router.replace('/path')` – replace current history entry
* `router.back()` – go to previous page
* `router.forward()` – go to next page
* `router.refresh()` – refresh current page (re‑fetch data)

**⚠️ useRouter can only be used in Client Components (add 'use client').**

### 3. Active Link Highlighting

Use `usePathname()` to get current URL and compare with link href.

```jsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav>
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className={pathname === link.href ? 'active' : ''}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
```

**Common pattern: create a separate NavBar component (Client) and reuse it across pages.**

### Important Notes

* `<Link>` is preferred for most navigation (faster, prefetching).
* `useRouter` is used when navigation happens after an action (login, form submit).
* `usePathname` also works in Server Components? No – it’s a client hook. Keep active‑link logic in a client component.
* Dynamic routes: href can accept an object:`{ pathname: '/blog/[slug]', query: { slug: 'hello' } }`


## Code Examples in this Repo

See /day-3-navigation inside main-project/src/app/:

* `link-demo/` – basic `<Link>` usage
* `router-demo/` – programmatic navigation with buttons
* `active-link-demo/` – navbar that highlights current page
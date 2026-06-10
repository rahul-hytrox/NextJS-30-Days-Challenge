### 📄 `day-03-navigation/questions.md`


# Day 3 – Questions & Answers

## Q1: What is the difference between `<Link>` from `next/link` and a regular `<a>` tag?

**Answer:**  
`<Link>` performs client‑side navigation without reloading the page. It also prefetches linked pages automatically. An `<a>` tag would cause a full browser refresh.


## Q2: How do you navigate programmatically after a form submission?

**Answer:**  
Use the `useRouter` hook inside a Client Component:

```js
'use client';
import { useRouter } from 'next/navigation';

export default function Form() {
  const router = useRouter();
  const handleSubmit = async () => {
    await saveData();
    router.push('/success');
  };
  return <form onSubmit={handleSubmit}>...</form>;
}
```

## Q3: Can you use useRouter in a Server Component?

**Answer:**  
No. useRouter is a client hook and requires 'use client' at the top of the file.

## Q4: What does router.refresh() do?

**Answer:**  
It re‑fetches the current route data from the server and re‑renders the page without reloading the browser. Useful after a mutation that changes data on the same page.

## Q5: How do you highlight the active link in a navigation bar?

**Answer:**  
Use usePathname() hook to get the current path, then compare it with each link’s href to conditionally apply a CSS class.

## Q6: Does <Link> prefetch all linked pages?

**Answer:**  
By default, <Link> prefetches pages when they enter the viewport (user scrolls near them). You can disable prefetching with `prefetch={false}`.

## Q7: Write code to navigate to /products/5 using useRouter.

**Answer:**  

```js
router.push('/products/5');
// or dynamic style:
router.push(`/products/${id}`);
```

## Q8: What is the main advantage of using <Link> over router.push()?

**Answer:**  
`<Link>` is declarative and easier to use for standard navigation (like menus, lists). It also prefetches automatically. `router.push()` is imperative and used when navigation must happen after some logic.

## Q9: How can you pass query parameters (like ?sort=asc) with `<Link>`?

**Answer:**  
You can pass an object to the `href` prop:

```js
<Link 
  href={{ 
    pathname: '/products', 
    query: { sort: 'asc', page: 1 } 
  }}
>
  View Products
</Link>
```

## Q10: Explain the difference between router.push() and router.replace().

**Answer:**  
- `router.push(url)`: Adds a new entry to browser history. The user can go back using the back button.  
- `router.replace(url)`: Replaces the current history entry. The user cannot go back to the previous page. Use this for redirects or after auth actions.


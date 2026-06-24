# Day 7: Custom 404 Page (`not-found.js`)

## Core Concept
When a user visits a URL that does not exist, Next.js shows a default 404 page. You can customize this by adding `not-found.js` inside any folder.

## How It Works
- Create `not-found.js` inside any route folder.
- When a route does not match any `page.js` in that folder, Next.js automatically renders `not-found.js`.
- You can also manually trigger it by calling `notFound()` inside a Server Component.

## `not-found.js` vs `error.js`

| Feature | `error.js` | `not-found.js` |
|---------|------------|----------------|
| Trigger | Runtime errors (`throw new Error()`) | Route not found (404) |
| Scope | Catches component crashes | Handles missing pages |
| Recovery | Has `reset()` button | Usually just a link back home |

## Nested 404
- You can have multiple `not-found.js` files.
- If you have `app/day-7/blog/not-found.js`, then any unmatched route inside `/blog` will show that specific 404.
- This allows different sections to have different 404 designs.

## Manual Trigger
In a Server Component, you can force a 404:

```javascript
import { notFound } from 'next/navigation';

export default async function Page({ params }) {
  const data = await getData(params.id);
  if (!data) {
    notFound(); // Triggers the closest not-found.js
  }
  return <div>{data.title}</div>;
}
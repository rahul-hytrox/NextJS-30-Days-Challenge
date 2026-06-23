# Day 5: Loading UI & Suspense

## Core Concept
When a page fetches data from the server, it takes time. Next.js provides two ways to show a loader/placeholder to the user during this wait:

1. **`loading.js` (Automatic)** – Blocks the entire page.
2. **`<Suspense>` (Manual)** – Blocks only a specific component.

---

## 1. `loading.js` (Folder Level)
- It is a special Next.js file.
- When you create `loading.js` inside a folder, Next.js automatically wraps the `page.js` of that folder in a `<Suspense>` boundary.
- **Behavior:** `loading.js` renders until all `async` data fetching in `page.js` is complete.
- **Drawback:** If a page has two API calls (one fast, one slow), `loading.js` will not disappear until *both* are complete. The entire page remains blank or shows a loader.

## 2. Manual `<Suspense>` (Component Level)
- This is a built-in React component. You must import it: `import { Suspense } from 'react'`.
- **Behavior:** You wrap only specific components. The rest of the page renders immediately.
- **Advantage:** Headers, sidebars, and footers load instantly. Only the slow component shows a "Loading..." placeholder. This provides a much better user experience.

## Practical Example (Countries API)
- We used the API: `https://countries-states-cities-api-v2.vercel.app/api/countries`
- **Important:** This API does not return an array directly. It returns an object containing a `data` key where the actual array resides.
- **Code Snippet:**
  ```javascript
  const result = await res.json();
  if (result.success && Array.isArray(result.data)) {
    return result.data; // Actual country array
  }
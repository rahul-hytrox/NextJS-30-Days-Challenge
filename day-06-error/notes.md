# Day 6: Error Handling (`error.js`)

## Core Concept
When an API fails or a component crashes, Next.js provides a built-in way to show a clean, custom error page to the user instead of the ugly default error screen.

## How It Works
- Create an `error.js` file inside any folder.
- When `page.js` in that folder throws an error, Next.js automatically renders `error.js`.
- `error.js` must be a **Client Component** (requires `'use client'`).

## Error File Types

| File | Scope | Description |
|------|-------|-------------|
| `error.js` | Folder level | Catches errors in that folder and its sub-pages. |
| `global-error.js` | Entire app | Catch-all for errors not caught by `error.js`. Must include its own `<html>` and `<body>` tags. |
| `not-found.js` | Folder level | Custom 404 page for that route. |

## The `error` and `reset` Props

```js
'use client';
export default function Error({ error, reset }) {
  // error → the actual error object
  // reset → function to re-render the page (try again)
}
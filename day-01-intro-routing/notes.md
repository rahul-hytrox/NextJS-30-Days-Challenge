# Day 1: Next.js Intro & File-based Routing

## 📌 What is Next.js?

Next.js is a **React framework** that builds on top of React with additional features including:

- **Server-Side Rendering (SSR)**
- **Static Site Generation (SSG)**
- **Built-in file-based routing**

---

## ⚡ Why Next.js over React?

| Feature | React (Client-side only) | Next.js |
|---------|--------------------------|---------|
| SEO | ❌ Poor (empty initial HTML) | ✅ Excellent (pre-rendered content) |
| Routing | Manual (`react-router-dom`) | Automatic file-based routing |
| Backend | ❌ No (separate API needed) | ✅ Built-in API routes |
| Rendering | Client-side only | Client + Server components |

---

## 📁 File-based Routing (App Router)

- Every `page.js` file inside the `app/` folder becomes a route
- **Folder structure = URL path**

### Routing Examples

```
app/page.js              →  /
app/about/page.js        →  /about
app/blog/page.js         →  /blog
```

> **Golden Rule:** Every folder that represents a URL must contain a `page.js` file.

---

## 🔀 Dynamic Routes

Use `[folderName]` syntax to create dynamic URL segments. Access the value via `params` in the component.

**File structure:**
```
app/products/[id]/page.js  →  /products/123
```

**Component:**
```javascript
export default function ProductPage({ params }) {
  return <div>Product ID: {params.id}</div>;
}
```

---

## 🪆 Nested Dynamic Routes

```
app/blog/[year]/[month]/[slug]/page.js
```

**Example URL:** `/blog/2024/03/nextjs-tutorial`

---

## 🚀 Project Setup

```bash
npx create-next-app@latest my-app
```

**Recommended options during setup:**

| Option | Selection |
|--------|-----------|
| TypeScript | No |
| ESLint | Yes |
| Tailwind CSS | Yes |
| `src/` directory | Yes |
| App Router | Yes |

```bash
npm run dev
```

> Starts the development server at [http://localhost:3000](http://localhost:3000) with hot reload.

---

## 🛠️ Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build the app for production |
| `npm start` | Start the production server |


### Next.js 15 Breaking Change: `params` is now a Promise

In Next.js 15, dynamic route parameters are now asynchronous. Always use `async` and `await`:

```javascript
// ✅ Correct
export default async function Page({ params }) {
  const { id } = await params;
  // ...
}
# Day 4: Layouts & Nested Layouts

## What is a Layout?

A **layout** is a shared UI wrapper that persists across multiple pages.  
In Next.js, `layout.js` defines a component that wraps all pages inside its folder.

---

## Types of Layouts

### 1. Root Layout (`app/layout.js`)
- **Required** – every Next.js app must have one.
- Wraps the **entire application**.
- Contains `<html>` and `<body>` tags.
- You cannot have multiple root layouts.

### 2. Page Layout (Folder‑level)
- Created by placing `layout.js` inside any folder.
- Wraps **all pages** inside that folder.
- Example: `app/day-4-layouts/layout.js` adds a sidebar to all pages under `/day-4-layouts`.

### 3. Nested Layout (Child folder)
- Created by placing `layout.js` inside a sub‑folder.
- Renders **inside** the parent layout.
- Example: `app/day-4-layouts/blog/layout.js` adds a blog sub‑nav inside the sidebar layout.

---

## How Layouts Work (Hierarchy)

```text
Root Layout (app/layout.js)
    └── Page Layout (app/day-4-layouts/layout.js)
            └── Nested Layout (app/day-4-layouts/blog/layout.js)
                    └── Page (app/day-4-layouts/blog/page.js)
```

***Rule: Layouts nest automatically – child layout renders inside parent layout’s {children}.***

### Key Points

* Persistent State – layout components do not remount when navigating between pages inside the same layout. This makes them perfect for sidebars, headers, footers, and tabs.

* `{ children }` – every layout receives a children prop where the page or child layout renders.

* No 'use client' needed – layouts are Server Components by default (can be made client if needed).

* Page‑specific metadata – you can export metadata from a page; it merges with the layout’s metadata.

---
### Layout vs Template

| Feature | Layout | Template |
|---------|--------|----------|
| Remounts on navigation | ❌ No (preserves state) | ✅ Yes (creates new instance) |
| Use case | Persistent UI (sidebar, header) | Animations, `useEffect` on every route change |

**Use Layout** for UI that should persist (sidebars, headers, footers). **Use Template** when you want a fresh UI instance on every route change (scroll position reset, animations).
---

### Code Example from this Repo

* **Page Layout** → `src/app/day-4-layouts/layout.js` – adds a gray sidebar.
* **Nested Layout** → `src/app/day-4-layouts/blog/layout.js` – adds a blue blog sub-nav.
* **Pages** → `page.js`, `about/page.js`, `blog/page.js`, `blog/tutorial/page.js`
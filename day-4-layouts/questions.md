

## 📄 `day-04-layouts/questions.md`

```markdown
# Day 4 – Questions & Answers

## Q1: What is the purpose of `layout.js` in Next.js?

**Answer:**  
It defines a UI wrapper that is shared across all pages inside its folder. It persists across navigation and helps reduce code duplication (header, sidebar, footer, etc.).


## Q2: How do nested layouts work?

**Answer:**  
A child layout (inside a sub‑folder) renders inside the parent layout’s `{children}` slot. The hierarchy is: Root Layout → Folder Layout → Sub‑folder Layout → Page.


## Q3: Can a layout be a Client Component?

**Answer:**  
Yes. If you need interactivity (e.g., a collapsible sidebar), add `'use client'` at the top of `layout.js`.


## Q4: What happens if you have both `layout.js` and `page.js` in the same folder?

**Answer:**  
The `layout.js` wraps the `page.js` and any other pages inside that folder. The `page.js` is rendered inside the layout’s `{children}`.


## Q5: Does a layout re‑render when you navigate between pages inside it?

**Answer:**  
No. Layouts do not re‑render or remount on client‑side navigation. This preserves state (e.g., sidebar collapse, input values) across pages.


## Q6: What is the difference between a layout and a template?

**Answer:**  
- **Layout** – persists state, does not remount.
- **Template** – creates a new instance on every navigation, good for animations or `useEffect` that should run on every route change.


## Q7: How do you add metadata (like page title) in a layout?

**Answer:**  
Export a `metadata` object or use `generateMetadata` function from `layout.js` or `page.js`. Page metadata overrides layout metadata for duplicate fields.


## Q8: Is the Root Layout required in every Next.js project?

**Answer:**  
Yes. Every Next.js app must have exactly one root layout at `app/layout.js`. It wraps the entire application and includes the `<html>` and `<body>` tags.


## Q9: What happens if you use a `<Link>` inside a layout?

**Answer:**  
It works normally. Since the layout persists, the `<Link>` remains in the DOM and provides fast client‑side navigation.


## Q10: Can you have multiple layouts for different routes?

**Answer:**  
Yes. Each folder can have its own `layout.js`. This creates a layout hierarchy (e.g., `/dashboard` has a dashboard layout, `/admin` has an admin layout).
# Day 1 - Questions & Answers

## Q1: Which two Next.js features are most useful for an e-commerce website?

**Answer:**

1. **SEO (Server-Side Rendering)** – Product pages get indexed properly by search engines
2. **API Routes** – Can build backend endpoints (add to cart, checkout) within the same project

---

## Q2: What does `npm run dev` command do?

**Answer:**

Starts the development server with hot reload. Any code change automatically refreshes the browser. Access the app at `http://localhost:3000`.

---

## Q3: What is the file structure for `/products/laptop/dell-xps` in App Router?

**Answer:**

```
app/
└── products/
    └── [category]/
        └── [slug]/
            └── page.js
```

This automatically handles `/products/laptop/dell-xps` where `category = "laptop"` and `slug = "dell-xps"`.

---

## Q4: Which URL does `app/blog/[year]/[month]/[slug]/page.js` represent? Give an example.

**Answer:**

URL pattern: `/blog/2024/03/nextjs-tutorial`

- `year = 2024`
- `month = 03`
- `slug = nextjs-tutorial`

---

## Q5: What is the golden rule of Next.js routing?

**Answer:**

> Every folder that represents a URL segment must contain a `page.js` file.
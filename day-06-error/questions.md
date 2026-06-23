
---

## 📄 `day-06-error/questions.md`

```markdown
# Day 6 – Questions & Answers

## Q1: What is the purpose of `error.js` in Next.js?

**Answer:**  
`error.js` provides a custom UI for when a page throws an error. It replaces the default error screen with a user-friendly message and optionally a "Try Again" button.

---

## Q2: Why must `error.js` be a Client Component?

**Answer:**  
Because handling errors requires React hooks like `useEffect` and state management to reset the page. These features are only available in Client Components.

---

## Q3: What props does `error.js` receive?

**Answer:**  
It receives `error` (the error object) and `reset` (a function that re-renders the page).

---

## Q4: What is the difference between `error.js` and `global-error.js`?

**Answer:**  
- `error.js` is scoped to a specific folder and its sub-pages.  
- `global-error.js` catches any errors that fall through `error.js` and covers the entire app. It replaces the root layout, so it must include its own `<html>` and `<body>` tags.

---

## Q5: Does `error.js` catch errors in `layout.js`?

**Answer:**  
No. `error.js` does not catch errors inside `layout.js`. To catch layout errors, you must use `global-error.js`.

---

## Q6: What does the `reset` function do?

**Answer:**  
It attempts to re-render the page. If the error was temporary (like a network timeout), it might succeed and the user can continue.

---

## Q7: Why didn't `error.js` show during development?

**Answer:**  
During development, Next.js displays an error overlay to help developers debug. To see `error.js`, you need to run a production build (`npm run build && npm start`).

---

## Q8: What is `not-found.js` and how is it different from `error.js`?

**Answer:**  
- `not-found.js` handles 404 errors (page not found).  
- `error.js` handles runtime errors (API failures, component crashes). Both can coexist in the same folder.
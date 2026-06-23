
---

### 📄 `day-05-loading/questions.md` (English)

```markdown
# Day 5 – Questions & Answers

## Q1: What is the practical difference between `loading.js` and manual `<Suspense>`?

**Answer:**  
`loading.js` blocks the entire page. The loader does not disappear until all async dependencies of the page are resolved.  
However, `<Suspense>` blocks only the specific component that is wrapped. The rest of the page renders immediately.

## Q2: If I want the Header to appear instantly and the Products list to load later, which should I use?

**Answer:**  
Manual `<Suspense>`.  
Because I don't want the user to see a blank page; I want the Header to appear first and only show a loader where the Products list goes.

## Q3: Do we need to write `import { Suspense } from 'react'` for `loading.js` to work?

**Answer:**  
No. Next.js handles the Suspense boundary internally and automatically. We never imported it, yet `loading.js` worked perfectly.

## Q4: How did we extract the countries array from the API response?

**Answer:**  
The API returns an object: `{ success: true, data: [...] }`.  
We first checked `result.success` and verified `Array.isArray(result.data)`, then returned `result.data` to get the actual country list.

## Q5: What causes the hydration error in Firefox and how do we fix it?

**Answer:**  
Firefox's "Enhanced Tracking Protection" modifies the server HTML for `localhost`, causing a mismatch during React hydration.  
**Fix:** Click the shield icon in the Firefox address bar and turn off Enhanced Tracking Protection for that specific site.

## Q6: What was special about the Suspense demo page?

**Answer:**  
In the demo, we manually wrapped the `CountriesList` component in `<Suspense fallback={<Loader />}>`.  
Because of this, the page heading and a green info box appeared instantly, while the countries list appeared 3 seconds later. This clearly demonstrates the UX improvement of partial loading.
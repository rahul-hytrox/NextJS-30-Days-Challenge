# React Interview Questions & Answers

> Q&A organized by topic, matching `notes.md`. Use for quick revision before interviews.

---

## 1. React Fundamentals

**Q1. What is JSX? Why do we use it?**
A: JSX (JavaScript XML) is a syntax extension that lets us write HTML-like code inside JavaScript. It gets transpiled by Babel into `React.createElement()` calls. It's used because it makes UI code more readable and declarative compared to writing `createElement` calls manually.

**Q2. Can a component return multiple JSX elements without a wrapper div?**
A: Yes, by using a **React Fragment**: `<>...</>` or `<React.Fragment>...</React.Fragment>`. This avoids adding unnecessary DOM nodes.

**Q3. Difference between functional and class components?**
A: Functional components are plain JS functions that use Hooks for state/lifecycle; they're simpler and recommended today. Class components extend `React.Component`, use `this.state` and lifecycle methods (`componentDidMount`, etc.) — mostly seen in legacy code.

**Q4. What are props? Are they mutable?**
A: Props are inputs passed from a parent component to a child. They are **read-only/immutable** — a child component should never modify its own props directly.

**Q5. Why do we need `key` prop in lists? What happens if we use array index as key?**
A: `key` helps React's reconciliation algorithm identify which items changed, were added, or removed, so it can update the DOM efficiently. Using array index as key works fine for static lists, but causes bugs (wrong item state/re-render) if the list is reordered, filtered, or items are inserted/removed.

**Q6. What's the difference between controlled and uncontrolled components?**
A: In a **controlled** component, the form input's value is driven by React state (`value` + `onChange`). In an **uncontrolled** component, the DOM manages its own state internally, and we access the value via `ref` when needed. Controlled is generally preferred for predictability and validation.

**Q7. How do you conditionally render JSX?**
A: Using ternary operators (`condition ? A : B`), logical `&&` (`condition && <A />`), or early returns with `if` statements outside the JSX.

---

## 2. Core Hooks

**Q8. What is `useEffect` used for, and how does the dependency array work?**
A: `useEffect` runs side effects (API calls, subscriptions, timers, DOM updates) after render.
- No dependency array → runs after every render
- `[]` → runs only once after mount
- `[dep]` → runs on mount + whenever `dep` changes
A cleanup function (returned from the effect) runs before the next effect call or on unmount — used to clear intervals, unsubscribe, etc.

**Q9. How do you replicate `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` using hooks?**
A:
```
useEffect(() => {
  // componentDidMount + componentDidUpdate (if dep changes)
  return () => {
    // componentWillUnmount
  };
}, [dependency]);
```

**Q10. What is `useRef` and how is it different from `useState`?**
A: `useRef` returns a mutable object (`{ current: value }`) that persists across renders **without** triggering a re-render when changed. `useState` triggers a re-render whenever updated. `useRef` is commonly used to access DOM nodes directly or store values that shouldn't cause re-renders (like previous values, timers, etc.).

**Q11. What problem does `useContext` solve?**
A: It solves **prop drilling** — instead of passing data through every intermediate component, `useContext` lets any descendant component directly access shared data from a `Context.Provider`.

**Q12. Difference between `useMemo` and `useCallback`?**
A: `useMemo` memoizes a **computed value** (e.g., result of an expensive calculation). `useCallback` memoizes a **function reference** itself, so it doesn't get recreated on every render — useful when passing callbacks to memoized child components to avoid unnecessary re-renders.

**Q13. When should you avoid using `useMemo`/`useCallback`?**
A: When there's no actual performance problem. Overusing them adds complexity and a small memory/computation overhead for the memoization check itself. Use only when profiling shows a genuine re-render or expensive computation issue.

**Q14. What is `useReducer` and when would you use it over `useState`?**
A: `useReducer` manages state via a reducer function `(state, action) => newState`, similar to Redux. Use it when state logic is complex (multiple related sub-values, many possible actions/transitions) — it keeps update logic centralized and predictable rather than scattering multiple `useState` calls.

**Q15. What is a custom hook? Give an example use case.**
A: A custom hook is a reusable function (prefixed with `use`) that encapsulates stateful logic, built from other hooks. Example: `useFetch(url)` to reuse data-fetching logic (loading/error/data state) across multiple components instead of duplicating `useEffect` + `useState` logic everywhere.

**Q16. What are the Rules of Hooks?**
A:
1. Only call hooks at the **top level** of a function component (not inside loops, conditions, or nested functions).
2. Only call hooks from **React function components** or **custom hooks** (not regular JS functions).

---

## 3. Component Architecture

**Q17. Why does React favor composition over inheritance?**
A: Composition (combining small components via `children`/props) is more flexible and predictable than class inheritance. It avoids tight coupling and deep inheritance chains, making components easier to reuse and reason about independently.

**Q18. What does "lifting state up" mean?**
A: When two or more sibling components need to share/sync state, you move that state to their closest common parent component, which then passes it down via props. This keeps a single source of truth.

**Q19. What is prop drilling? What's the downside?**
A: Prop drilling is passing data through multiple layers of components — including components that don't use the data themselves — just so a deeply nested child can access it. Downside: makes code harder to maintain/refactor, since changing the data shape means touching every intermediate component.

**Q20. How do you avoid prop drilling?**
A: Using `useContext` for moderate cases, or external state management libraries (Zustand, Redux Toolkit) for larger, frequently-changing global state.

**Q21. What is a Higher-Order Component (HOC)? Give a real example.**
A: An HOC is a function that takes a component and returns a new, enhanced component — used for reusing logic across components (e.g., `withAuth(Component)` to add authentication checks, or `withLoading(Component)` to show a spinner). Mostly replaced by custom hooks in modern React, but still common in some libraries (e.g., `react-redux`'s `connect()`).

**Q22. What is the render props pattern?**
A: A pattern where a component takes a function as a prop (often called `render` or as `children`) and calls it with internal state/data, letting the parent decide how to render that data. Example: a `MouseTracker` component that exposes mouse coordinates via a render prop function.

---

## 4. Routing

**Q23. How do you set up basic routing in React?**
A: Wrap the app in `<BrowserRouter>`, define routes using `<Routes>` and `<Route path="..." element={<Component />} />`, and navigate using `<Link to="...">` or programmatically with `useNavigate()`.

**Q24. How do you access dynamic URL parameters?**
A: Define the route as `<Route path="/user/:id" element={<UserProfile />} />`, then inside the component use `const { id } = useParams();`.

**Q25. How do you implement protected/private routes?**
A: Create a wrapper component that checks authentication status; if not authenticated, redirect using `<Navigate to="/login" />`, otherwise render the children/outlet.
```
function ProtectedRoute({ children }) {
  const isAuth = useAuth();
  return isAuth ? children : <Navigate to="/login" />;
}
```

**Q26. What is `<Outlet />` used for?**
A: It's a placeholder used in a parent route's component to render whichever **nested/child route** is currently matched — enabling nested routing layouts (e.g., a dashboard with sidebar + changing content area).

**Q27. Difference between `<Link>` and `useNavigate()`?**
A: `<Link>` is declarative — used in JSX for user-clickable navigation (renders an `<a>` tag). `useNavigate()` is imperative — used to navigate programmatically inside event handlers/effects (e.g., redirect after form submit or login success).

---

## 5. State Management

**Q28. When would you use Context API vs Redux/Zustand?**
A: Context API is fine for **low-frequency updates** and smaller apps (theme, auth, locale). For **frequently changing** or **complex/large-scale** global state, Redux Toolkit or Zustand are better since Context re-renders *all* consumers on any value change, which can hurt performance at scale.

**Q29. What problem does Context API have at scale?**
A: Every time the context value changes, **all components consuming that context re-render**, even if they only care about a small part of the value — this can cause unnecessary re-renders in large apps.

**Q30. Why is Zustand considered "lightweight" compared to Redux?**
A: Zustand doesn't require a `Provider` wrapper, has minimal boilerplate (no actions/reducers/dispatch ceremony), and state updates are simple function calls (`set((state) => ({...}))`) — making it faster to set up than Redux Toolkit.

**Q31. What is Redux Toolkit and how does it differ from plain Redux?**
A: Redux Toolkit (RTK) is the official, recommended way to write Redux logic. It simplifies boilerplate via `createSlice` (auto-generates action creators/types), uses Immer internally (so you can "mutate" state directly in reducers), and includes built-in tools like `configureStore` and `createAsyncThunk`.

**Q32. What's the difference between client state and server state? Why does React Query exist?**
A: Client state is data owned entirely by the frontend (UI state, form inputs, toggles). Server state is data that actually lives on a server/database and can become stale (user lists, posts, etc.). React Query (TanStack Query) specializes in managing server state — caching, background refetching, deduplication, and synchronization — which plain `useState`/Redux aren't designed to handle well.

**Q33. What is an optimistic update?**
A: Updating the UI immediately as if a mutation succeeded (before the server responds), to make the app feel faster. If the request fails, the UI is rolled back to the previous state.

---

## 6. Styling

**Q34. What problem do CSS Modules solve?**
A: They scope class names locally to the component file (by generating unique class names at build time), preventing global class name collisions across the app.

**Q35. What is CSS-in-JS? Name a library.**
A: Writing CSS styles directly inside JavaScript/component files, scoped automatically to that component. Examples: `styled-components`, `Emotion`. Benefits: dynamic styling based on props, no class name conflicts, co-located styles and logic.

**Q36. What's the advantage of Tailwind CSS over traditional CSS?**
A: Tailwind is utility-first — you compose pre-defined utility classes directly in JSX (`className="bg-blue-500 p-4"`) instead of writing separate CSS files. This speeds up development, avoids context-switching between files, and keeps bundle size small via purging unused classes.

**Q37. What's the difference between MUI, Chakra UI, and shadcn/ui?**
A: MUI follows Google's Material Design system with ready-made styled components. Chakra UI is a simpler, accessible, themeable component library. shadcn/ui isn't a typical npm package — it's a collection of copy-paste components built on Radix UI + Tailwind that you own and customize directly in your codebase.

---

## 7. Forms & Validation

**Q38. Why use React Hook Form instead of manually managing form state with `useState`?**
A: React Hook Form uses **uncontrolled inputs internally** (via refs) and minimizes re-renders on every keystroke, making it more performant for larger forms. It also has built-in validation support and integrates easily with schema validators like Zod/Yup.

**Q39. What's the role of Zod or Yup in form handling?**
A: They define a **validation schema** (shape, types, rules) for form data, which can be plugged into React Hook Form via a `resolver` (e.g., `zodResolver(schema)`), centralizing validation logic instead of writing manual `if` checks for each field.

**Q40. Difference between Zod and Yup?**
A: Both do schema validation, but Zod is TypeScript-first (infers static types directly from schemas, no separate type definitions needed) and has a slightly more modern/chainable API. Yup is older, also widely used, originally more JS-focused (though it supports TS too).

---

## 8. API & Data Fetching

**Q41. Difference between `fetch` and `axios`?**
A: `fetch` is a native browser API; doesn't auto-parse JSON errors, requires manual `res.json()` and checking `res.ok`. `axios` is a third-party library with automatic JSON transformation, better error handling (rejects on non-2xx by default), request/response interceptors, and easier syntax for things like timeouts and cancellation.

**Q42. Why use React Query/SWR instead of plain `useEffect` + `fetch`?**
A: They provide automatic caching, deduplication of identical requests, background refetching, stale-data handling, retries, and loading/error state management out of the box — reducing a lot of boilerplate and bugs you'd otherwise write manually with `useEffect`.

**Q43. What are the three states you should always handle when fetching data?**
A: **Loading**, **error**, and **success** (data available) — to ensure a good UX and avoid rendering broken/undefined UI.

**Q44. What is an optimistic update and how is it implemented with React Query?**
A: (See Q33) — implemented using `onMutate` to update cache immediately, storing the previous value in case of rollback via `onError`, and finally syncing with the server using `onSettled` → `invalidateQueries`.

---

## 9. Performance Optimization

**Q45. What does `React.memo` do? When should you use it?**
A: `React.memo` wraps a component and skips re-rendering it if its **props haven't changed** (shallow comparison). Use it for components that render often with the same props, especially "pure" presentational components — not necessary for every component, only where re-renders are measurably wasteful.

**Q46. What is code splitting, and how do you implement it in React?**
A: Code splitting breaks the JS bundle into smaller chunks loaded on demand, instead of one large bundle upfront. Implemented using `React.lazy(() => import('./Component'))` combined with `<Suspense fallback={...}>` to show a fallback while the chunk loads.

**Q47. What is list virtualization and why is it useful?**
A: Virtualization (e.g., via `react-window` or `react-virtualized`) renders **only the items currently visible** in the viewport instead of the entire list — drastically improving performance for very long lists (thousands of rows) by reducing DOM nodes.

**Q48. What causes unnecessary re-renders in React, and how can you prevent them?**
A: Common causes: parent re-renders causing all children to re-render even with unchanged props; passing new object/array/function references inline as props on every render; overly broad state objects causing wide re-render scope.
Prevention: `React.memo`, `useMemo`/`useCallback` to stabilize references, splitting state into smaller pieces, and using the React DevTools Profiler to verify actual impact before optimizing.

**Q49. How do you use React DevTools Profiler to debug performance issues?**
A: Open the **Profiler** tab in React DevTools, click record, interact with the app, then stop recording. It shows a flame graph of which components rendered, how long each took, and (with "Why did this render?") what prop/state change triggered it — helping you pinpoint exactly where to optimize.

**Q50. What's the difference between `useMemo` and `React.memo`?**
A: `useMemo` memoizes a **value** computed inside a component (used internally). `React.memo` memoizes an entire **component**, skipping its re-render if props are unchanged (used externally, wrapping the component definition).

---

## 10. React 18/19 Advanced Features

**Q51. What is `useTransition` and what problem does it solve?**
A: `useTransition` lets you mark a state update as **non-urgent**, so React can keep urgent updates (like typing in an input) responsive while a slower/heavier update (like filtering a huge list) happens in the background without blocking the UI. It returns `[isPending, startTransition]` — `isPending` is a flag to show a loading state, and `startTransition` wraps the low-priority update.

**Q52. What is `useDeferredValue` and how is it different from `useTransition`?**
A: `useDeferredValue` defers the re-render of a **value** itself (not a state setter you control) — useful when the value comes from props or external state. `useTransition` wraps a state-update *function* you call yourself. Use `useTransition` when you trigger the update; use `useDeferredValue` when you just receive a value and want its dependent UI to lag behind smoothly.

**Q53. Give a practical example of where you'd use `useTransition`.**
A: A search/filter UI with a large dataset — typing in the search box updates instantly (urgent), while the filtered results list (expensive to compute/render) updates slightly after, wrapped in `startTransition`, so typing never feels laggy.

**Q54. What are React Server Components (RSC)? Why were they introduced?**
A: Server Components are components that render **only on the server** — their code never gets bundled and shipped to the browser. They were introduced to reduce client-side JS bundle size, allow direct backend access (DB queries, file reads, secrets) inside components, and improve initial load performance, especially for content-heavy pages.

**Q55. How do you mark a component as a Client Component in a Server-Components-based app (e.g., Next.js App Router)?**
A: By adding the `"use client"` directive at the very top of the file. This is required for any component that uses hooks (`useState`, `useEffect`), event handlers, or browser-only APIs — since Server Components can't use any of these.

**Q56. Can a Server Component use `useState` or `useEffect`?**
A: No. Server Components run only on the server and have no client-side lifecycle — hooks like `useState`/`useEffect` require the browser/client runtime, so any component needing interactivity must be a Client Component (`"use client"`).

**Q57. Why is this topic relevant to Next.js specifically?**
A: Next.js 15+ runs on React 19, and its **App Router** architecture defaults every component to a Server Component unless explicitly marked `"use client"`. Understanding RSC is essential for working with modern Next.js projects, not just an optional React feature.

**Q58. What is the React Compiler? Is it a hook?**
A: No, it's not a hook — it's a **build-time tool** (a Babel plugin) introduced with React 19 that automatically analyzes component code and inserts memoization (similar to what `useMemo`/`useCallback`/`React.memo` do manually) without the developer writing it by hand. The goal is to let developers write simple, "naive" React code while the compiler handles performance optimization automatically.

**Q59. Does the React Compiler mean you should stop using `useMemo`/`useCallback`?**
A: Not entirely — the compiler aims to make most manual memoization unnecessary in newer codebases, but adoption is still rolling out, and existing codebases/libraries still rely on manual memoization. It's good to understand both: manual hooks (for current/legacy code and interviews) and the compiler's purpose (for where React is heading).

**Q60. What React version introduced `useTransition`/`useDeferredValue`, and what version introduced Server Components + React Compiler as stable features?**
A: `useTransition` and `useDeferredValue` were introduced in **React 18** (as part of concurrent rendering features). Server Components (as a stable, App-Router-integrated feature) and the React Compiler are associated with **React 19**.

---

## Bonus: Rapid-Fire One-Liners

| Question | Answer |
|---|---|
| What hook avoids prop drilling? | `useContext` |
| What hook accesses DOM nodes? | `useRef` |
| What hook memoizes a value? | `useMemo` |
| What hook memoizes a function? | `useCallback` |
| What's the array-index-as-key warning about? | Bugs when dynamic lists reorder/filter |
| What does `Suspense` do? | Shows fallback UI while lazy-loaded component/data loads |
| What library manages server state best? | TanStack Query (React Query) |
| What's the lightest global state library mentioned? | Zustand |
| What pattern solves "function as a prop"? | Render props |
| What's the modern replacement for most HOCs? | Custom Hooks |
| Which hook marks an update as low priority? | `useTransition` |
| Which hook defers re-render of a value? | `useDeferredValue` |
| Which directive marks a Client Component? | `"use client"` |
| What ships zero JS to the browser? | Server Components |
| What automates memoization at build time? | React Compiler |

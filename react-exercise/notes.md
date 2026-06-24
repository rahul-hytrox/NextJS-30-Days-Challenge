# React Notes (Basic to Advance)

> Complete notes for revision — concepts + syntax + code examples.

---

## Table of Contents
1. [React Fundamentals](#1-react-fundamentals)
2. [Core Hooks](#2-core-hooks)
3. [Component Architecture](#3-component-architecture)
4. [Routing](#4-routing)
5. [State Management](#5-state-management)
6. [Styling](#6-styling)
7. [Forms & Validation](#7-forms--validation)
8. [API & Data Fetching](#8-api--data-fetching)
9. [Performance Optimization](#9-performance-optimization)
10. [React 18/19 Advanced Features](#10-react-1819-advanced-features)

---

## 1. React Fundamentals

### 1.1 JSX Syntax
JSX (JavaScript XML) lets us write HTML-like syntax inside JavaScript. It gets compiled (via Babel) into `React.createElement()` calls.

```jsx
const element = <h1>Hello, World!</h1>;

// Compiles to:
const element = React.createElement('h1', null, 'Hello, World!');
```

**Rules of JSX:**
- Must return a **single root element** (use Fragments `<>...</>` if needed)
- Use `className` instead of `class`
- Use `{}` to embed JavaScript expressions
- Self-close tags without children: `<img />`, `<input />`

```jsx
function App() {
  const name = "Suraj";
  return (
    <>
      <h1>Hello, {name}!</h1>
      <img src="profile.png" alt="profile" />
    </>
  );
}
```

---

### 1.2 Components (Functional vs Class)

**Functional Component** (modern, preferred — uses Hooks):
```jsx
function Greeting() {
  return <h1>Hello from Functional Component</h1>;
}
```

**Class Component** (legacy, still seen in older codebases):
```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello from Class Component</h1>;
  }
}
```

| Functional | Class |
|---|---|
| Simpler syntax | Verbose (constructor, `this`) |
| Hooks for state/lifecycle | `this.state`, lifecycle methods |
| Recommended in modern React | Mostly legacy code |

---

### 1.3 Props and PropTypes

**Props** = data passed from parent to child component (read-only).

```jsx
function UserCard({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

// Usage
<UserCard name="Suraj" age={22} />
```

**PropTypes** (runtime type-checking, optional but good practice):
```jsx
import PropTypes from 'prop-types';

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};
```

> Note: In TypeScript projects, we use **interfaces/types** instead of PropTypes.

---

### 1.4 State (`useState`)

State = data that changes over time and triggers re-render.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
    </div>
  );
}
```

**Important:** Always use the functional form `setCount(prev => prev + 1)` when the new state depends on the previous state — avoids stale state bugs.

---

### 1.5 Event Handling

```jsx
function Button() {
  const handleClick = (e) => {
    console.log("Button clicked!", e.target);
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

- Event names are camelCase: `onClick`, `onChange`, `onSubmit`
- React wraps native events in **SyntheticEvent**
- Passing arguments: `onClick={() => handleClick(id)}`

---

### 1.6 Conditional Rendering

```jsx
function Status({ isLoggedIn }) {
  // Using ternary
  return <p>{isLoggedIn ? "Welcome back!" : "Please log in"}</p>;
}

function Notification({ count }) {
  // Using && (short-circuit)
  return (
    <div>
      {count > 0 && <span>You have {count} new messages</span>}
    </div>
  );
}

function Page({ status }) {
  // Using if-else (outside JSX)
  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Something went wrong</p>;
  return <p>Data loaded!</p>;
}
```

---

### 1.7 Lists and Keys

```jsx
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
```

**Why `key`?**
- Helps React identify which items changed/added/removed
- Should be a **stable, unique** value (avoid using array `index` if list order can change)

---

### 1.8 Forms and Controlled Inputs

**Controlled Component** = input value is controlled by React state.

```jsx
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

**Uncontrolled Component** (uses `ref` instead of state):
```jsx
function UncontrolledInput() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 2. Core Hooks

### 2.1 useEffect (Side Effects, Lifecycle)

Runs side effects after render: API calls, subscriptions, DOM manipulation, timers.

```jsx
import { useEffect, useState } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    // Cleanup function — runs on unmount or before next effect
    return () => clearInterval(interval);
  }, []); // empty dependency array = runs once on mount

  return <p>Seconds: {count}</p>;
}
```

**Dependency array behavior:**
| Dependency Array | Behavior |
|---|---|
| No array | Runs after every render |
| `[]` | Runs once on mount only |
| `[value]` | Runs on mount + whenever `value` changes |

**Lifecycle mapping (class → hook):**
| Class Lifecycle | Hook Equivalent |
|---|---|
| `componentDidMount` | `useEffect(() => {...}, [])` |
| `componentDidUpdate` | `useEffect(() => {...}, [dep])` |
| `componentWillUnmount` | return cleanup function inside `useEffect` |

---

### 2.2 useRef

Holds a mutable value that **doesn't trigger re-render** when changed. Commonly used to access DOM nodes.

```jsx
function FocusInput() {
  const inputRef = useRef(null);

  const focusField = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusField}>Focus Input</button>
    </>
  );
}
```

Also useful for storing previous values:
```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
```

---

### 2.3 useContext

Avoids prop drilling by sharing data across the component tree.

```jsx
// 1. Create Context
const ThemeContext = createContext();

// 2. Provide Context
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// 3. Consume Context
function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div className={theme}>Toolbar</div>;
}
```

---

### 2.4 useMemo / useCallback

**useMemo** — memoizes a **computed value** (avoids expensive recalculation):
```jsx
const expensiveResult = useMemo(() => {
  return numbers.reduce((sum, n) => sum + n, 0);
}, [numbers]);
```

**useCallback** — memoizes a **function reference** (avoids unnecessary child re-renders):
```jsx
const handleClick = useCallback(() => {
  console.log("Clicked", id);
}, [id]);
```

| Hook | Memoizes |
|---|---|
| `useMemo` | A value |
| `useCallback` | A function |

> Both are performance optimizations — don't overuse them. Only use when you have an actual measured performance issue (e.g., expensive calculation, or passing callback to a memoized child).

---

### 2.5 useReducer

Alternative to `useState` for complex state logic (similar to Redux pattern).

```jsx
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error('Unknown action');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  );
}
```

---

### 2.6 Custom Hooks

Reusable logic extracted into a function starting with `use`.

```jsx
// Custom hook: useFetch.js
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

// Usage
function UserProfile() {
  const { data, loading, error } = useFetch('/api/user/1');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return <p>{data.name}</p>;
}
```

---

## 3. Component Architecture

### 3.1 Composition vs Inheritance
React favors **composition** over inheritance — building components by combining smaller components rather than extending classes.

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function ProfileCard() {
  return (
    <Card>
      <h2>Suraj</h2>
      <p>Frontend Developer</p>
    </Card>
  );
}
```

### 3.2 Lifting State Up
When two sibling components need to share state, move (lift) it to their closest common parent.

```jsx
function Parent() {
  const [value, setValue] = useState("");

  return (
    <>
      <Input value={value} onChange={setValue} />
      <Display value={value} />
    </>
  );
}
```

### 3.3 Prop Drilling
Passing data through multiple layers of components via props, even when intermediate components don't use it themselves — just to reach a deeply nested child.

```jsx
function App() {
  const user = { name: "Suraj" };
  return <Layout user={user} />;
}
function Layout({ user }) {
  return <Sidebar user={user} />; // Layout doesn't use 'user' itself
}
function Sidebar({ user }) {
  return <Profile user={user} />; // Sidebar doesn't use it either
}
function Profile({ user }) {
  return <p>{user.name}</p>; // Finally used here
}
```

**Problem:** Messy, hard to maintain in deep trees.
**Solution:** `useContext`, or state management libraries (Zustand, Redux).

### 3.4 Component Splitting / Reusability
Break large components into small, focused, reusable pieces (Single Responsibility Principle).

```jsx
// Instead of one giant ProfilePage component, split into:
<ProfilePage>
  <ProfileHeader />
  <ProfileStats />
  <ProfilePosts />
</ProfilePage>
```

### 3.5 Higher-Order Components (HOC)
A function that takes a component and returns an enhanced component. Mostly legacy now (replaced by custom hooks), but still appears in libraries.

```jsx
function withLoading(Component) {
  return function WrappedComponent({ isLoading, ...props }) {
    if (isLoading) return <p>Loading...</p>;
    return <Component {...props} />;
  };
}

const UserListWithLoading = withLoading(UserList);
// Usage: <UserListWithLoading isLoading={true} users={[]} />
```

### 3.6 Render Props Pattern
Passing a function as a prop that returns JSX — allows sharing logic between components.

```jsx
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return <div onMouseMove={handleMouseMove}>{render(position)}</div>;
}

// Usage
<MouseTracker render={({ x, y }) => <p>Mouse at {x}, {y}</p>} />
```

---

## 4. Routing

### React Router (v6+)

```bash
npm install react-router-dom
```

```jsx
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} /> {/* 404 */}
      </Routes>
    </BrowserRouter>
  );
}
```

**useNavigate** — programmatic navigation:
```jsx
function LoginButton() {
  const navigate = useNavigate();
  const handleLogin = () => {
    // after successful login
    navigate('/dashboard');
  };
  return <button onClick={handleLogin}>Login</button>;
}
```

**useParams** — read dynamic URL params:
```jsx
function UserProfile() {
  const { id } = useParams(); // from /user/:id
  return <p>User ID: {id}</p>;
}
```

**Nested Routes:**
```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="settings" element={<Settings />} />
  <Route path="profile" element={<Profile />} />
</Route>

// Inside Dashboard component:
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet /> {/* Child routes render here */}
    </div>
  );
}
```

**Protected Routes:**
```jsx
function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth(); // custom hook/check
  if (!isAuthenticated) return <Navigate to="/login" />;
  return children;
}

// Usage
<Route path="/dashboard" element={
  <ProtectedRoute><Dashboard /></ProtectedRoute>
} />
```

---

## 5. State Management

### 5.1 Context API
Good for small/medium apps, low-frequency updates (theme, auth, language).

```jsx
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for convenience
function useAuth() {
  return useContext(AuthContext);
}
```
**Limitation:** Any value change re-renders **all** consumers — not ideal for frequently-changing or large global state.

### 5.2 Zustand (Lightweight, Popular)

```bash
npm install zustand
```

```jsx
import { create } from 'zustand';

const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

function Counter() {
  const { count, increment, decrement } = useCounterStore();
  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}
```
No Provider needed, minimal boilerplate, great DX.

### 5.3 Redux Toolkit (For Larger Apps)

```bash
npm install @reduxjs/toolkit react-redux
```

```jsx
// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
  },
});
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: { counter: counterReducer },
});

// Component
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  );
}
```

### 5.4 React Query / TanStack Query (Server State)
Manages **server-side** state (caching, refetching, background updates) — separate from client state.

```jsx
import { useQuery } from '@tanstack/react-query';

function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then((res) => res.json()),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching users</p>;
  return (
    <ul>
      {data.map((u) => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
```

---

## 6. Styling

### 6.1 CSS Modules
Scoped CSS, no class name collisions.

```css
/* Button.module.css */
.primary {
  background: blue;
  color: white;
}
```
```jsx
import styles from './Button.module.css';

function Button() {
  return <button className={styles.primary}>Click</button>;
}
```

### 6.2 Styled-components / Emotion
CSS-in-JS.

```jsx
import styled from 'styled-components';

const StyledButton = styled.button`
  background: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;

  &:hover {
    background: darkblue;
  }
`;

function App() {
  return <StyledButton>Click Me</StyledButton>;
}
```

### 6.3 Tailwind CSS
Utility-first CSS framework.

```jsx
function Button() {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
      Click Me
    </button>
  );
}
```

### 6.4 Component Libraries
- **shadcn/ui** — copy-paste accessible components built on Radix + Tailwind
- **MUI (Material UI)** — Google's Material Design components
- **Chakra UI** — accessible, themeable component library

```jsx
// MUI example
import Button from '@mui/material/Button';
<Button variant="contained">Click Me</Button>
```

---

## 7. Forms & Validation

### 7.1 React Hook Form
Performant form library — minimal re-renders, easy validation.

```bash
npm install react-hook-form
```

```jsx
import { useForm } from 'react-hook-form';

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", { required: "Email is required" })}
        placeholder="Email"
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        {...register("password", { required: true, minLength: 6 })}
        type="password"
      />

      <button type="submit">Submit</button>
    </form>
  );
}
```

### 7.2 Zod / Yup (Schema Validation)

**Zod:**
```jsx
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Min 6 characters"),
});

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });
  // ...rest same as above
}
```

**Yup:**
```jsx
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});
```

---

## 8. API & Data Fetching

### 8.1 Fetch / Axios

**Fetch (built-in):**
```jsx
useEffect(() => {
  fetch('/api/users')
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((err) => console.error(err));
}, []);
```

**Axios (popular library):**
```bash
npm install axios
```
```jsx
import axios from 'axios';

useEffect(() => {
  axios.get('/api/users')
    .then((res) => setUsers(res.data))
    .catch((err) => console.error(err));
}, []);
```

### 8.2 TanStack Query or SWR
(See section 5.4 for TanStack Query example)

**SWR:**
```jsx
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

function Profile() {
  const { data, error, isLoading } = useSWR('/api/user', fetcher);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load</p>;
  return <p>{data.name}</p>;
}
```

### 8.3 Handling Loading/Error States
Always handle 3 states: **loading, error, success**.

```jsx
function DataComponent() {
  const [state, setState] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    axios.get('/api/data')
      .then((res) => setState({ data: res.data, loading: false, error: null }))
      .catch((err) => setState({ data: null, loading: false, error: err.message }));
  }, []);

  if (state.loading) return <p>Loading...</p>;
  if (state.error) return <p>Error: {state.error}</p>;
  return <p>{JSON.stringify(state.data)}</p>;
}
```

### 8.4 Optimistic Updates
Update UI immediately (before server confirms), then rollback if it fails. Common with TanStack Query.

```jsx
const mutation = useMutation({
  mutationFn: updateTodo,
  onMutate: async (newTodo) => {
    await queryClient.cancelQueries(['todos']);
    const previousTodos = queryClient.getQueryData(['todos']);
    queryClient.setQueryData(['todos'], (old) => [...old, newTodo]); // optimistic update
    return { previousTodos };
  },
  onError: (err, newTodo, context) => {
    queryClient.setQueryData(['todos'], context.previousTodos); // rollback
  },
  onSettled: () => {
    queryClient.invalidateQueries(['todos']);
  },
});
```

---

## 9. Performance Optimization

### 9.1 React.memo
Prevents a component from re-rendering if its props haven't changed.

```jsx
const UserCard = React.memo(function UserCard({ name }) {
  console.log("Rendered:", name);
  return <p>{name}</p>;
});
```

### 9.2 Code Splitting & Lazy Loading

```jsx
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Dashboard />
    </Suspense>
  );
}
```
Splits the JS bundle so components are loaded only when needed — reduces initial load time.

### 9.3 Virtualization (react-window)
Renders only visible items in a long list — huge performance gain for large datasets.

```jsx
import { FixedSizeList as List } from 'react-window';

function BigList({ items }) {
  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={35}
      width={300}
    >
      {({ index, style }) => (
        <div style={style}>{items[index]}</div>
      )}
    </List>
  );
}
```

### 9.4 Avoiding Unnecessary Re-renders
- Use `React.memo` for pure components
- Use `useMemo`/`useCallback` to stabilize values/functions passed as props
- Avoid creating new objects/arrays/functions inline in JSX when passed to memoized children
- Split state — don't keep unrelated state in one object (causes wider re-render scope)
- Use keys correctly in lists

### 9.5 Profiling with React DevTools
- Install **React Developer Tools** browser extension
- Use the **"Profiler"** tab — record interactions and see which components re-rendered and why
- Highlights wasted renders, helps pinpoint exactly which prop/state change triggered a re-render

---

## 10. React 18/19 Advanced Features

### 10.1 useTransition
Lets you mark a state update as **non-urgent ("transition")**, so React keeps the UI responsive by not blocking urgent updates (like typing) while the non-urgent update renders in the background.

```jsx
import { useTransition, useState } from 'react';

function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value); // urgent — updates input immediately

    startTransition(() => {
      // non-urgent — heavy filtering won't block typing
      setResults(filterHugeList(value));
    });
  };

  return (
    <>
      <input value={query} onChange={handleChange} />
      {isPending && <p>Updating results...</p>}
      <ResultsList results={results} />
    </>
  );
}
```
- `isPending` → boolean flag to show a loading indicator while the transition is in progress
- `startTransition(callback)` → wraps the state update you want to deprioritize

---

### 10.2 useDeferredValue
Similar goal to `useTransition`, but used to **defer re-rendering a value** (rather than wrapping a state setter) — useful when you don't control the state update itself (e.g., value comes from a parent/prop).

```jsx
import { useDeferredValue, useState } from 'react';

function SearchPage() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      {/* This list re-renders with a slight delay, keeping typing smooth */}
      <ResultsList query={deferredQuery} />
    </>
  );
}
```

**`useTransition` vs `useDeferredValue`:**
| | useTransition | useDeferredValue |
|---|---|---|
| Wraps | A state **update function** | A **value** |
| Use case | You trigger the update yourself | Value comes from elsewhere (props/state you don't set directly) |
| Gives `isPending`? | Yes | No (compare `value !== deferredValue` to detect staleness) |

---

### 10.3 React Server Components (RSC) — React 19 / Next.js 15+
Server Components render **on the server only** — their code (and dependencies) never ships to the browser, reducing bundle size and allowing direct backend access (DB queries, file system, secrets) inside components.

```jsx
// app/users/page.jsx  (Server Component by default in Next.js App Router)
async function UsersPage() {
  const users = await db.user.findMany(); // direct DB call, runs only on server

  return (
    <ul>
      {users.map((u) => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}

export default UsersPage;
```

**Client Component** (needs interactivity — state, effects, browser APIs) must be explicitly marked:
```jsx
"use client"; // required directive at the top of the file

import { useState } from 'react';

function LikeButton() {
  const [liked, setLiked] = useState(false);
  return <button onClick={() => setLiked(!liked)}>{liked ? "❤️" : "🤍"}</button>;
}
```

| | Server Component | Client Component |
|---|---|---|
| Runs on | Server only | Server (initial HTML) + Browser (hydration) |
| Can use hooks (`useState`, `useEffect`)? | No | Yes |
| Can access DB/secrets directly? | Yes | No |
| Ships JS to browser? | No (zero bundle cost) | Yes |
| Directive | None (default) | `"use client"` |

> **Why it matters:** Next.js 15+ uses React 19, and the **App Router** is built around Server Components by default — this is now the standard architecture for new Next.js apps, not just an optional feature.

---

### 10.4 React Compiler (React 19)
The React Compiler is a **build-time tool** (not a hook/API) that automatically memoizes components and values — effectively doing the job of `useMemo`, `useCallback`, and `React.memo` for you, automatically, without manual code changes.

```jsx
// Before (manual memoization, React 18 style):
const ExpensiveList = React.memo(function ExpensiveList({ items }) {
  const sorted = useMemo(() => items.sort(), [items]);
  return <List data={sorted} />;
});

// With React Compiler enabled, you can often just write:
function ExpensiveList({ items }) {
  const sorted = items.sort();
  return <List data={sorted} />;
}
// Compiler automatically detects what should be memoized at build time.
```

**Key points:**
- It's a **Babel-based compiler plugin**, analyzes your component code and inserts memoization automatically.
- Goal: write normal, simple React code — let the compiler handle performance optimization instead of manually sprinkling `useMemo`/`useCallback` everywhere.
- Still rolling out gradually across the ecosystem (check current adoption status before relying on it in production, since tooling/support is evolving).

---

## Quick Revision Cheat Sheet

| Concept | One-liner |
|---|---|
| JSX | HTML-like syntax in JS, compiles to `React.createElement` |
| Props | Read-only data passed parent → child |
| State | Mutable data, triggers re-render on change |
| useEffect | Runs side effects after render |
| useRef | Mutable value, no re-render, DOM access |
| useContext | Share data without prop drilling |
| useMemo | Memoize a computed value |
| useCallback | Memoize a function |
| useReducer | Complex state logic via reducer pattern |
| Prop drilling | Passing props through unrelated intermediate components |
| HOC | Function that wraps a component, returns enhanced component |
| Render props | Function-as-prop pattern for sharing logic |
| Context API | Built-in, simple, re-renders all consumers |
| Zustand | Lightweight external store, minimal boilerplate |
| Redux Toolkit | Structured, scalable state management |
| React Query | Manages server state, caching, refetching |
| React.memo | Skip re-render if props unchanged |
| Code splitting | Load components only when needed |
| Virtualization | Render only visible list items |
| useTransition | Mark a state update as low-priority/non-urgent |
| useDeferredValue | Defer re-rendering of a value to keep UI responsive |
| Server Components | Render on server only, zero JS shipped to browser |
| React Compiler | Build-time auto-memoization, reduces manual useMemo/useCallback |

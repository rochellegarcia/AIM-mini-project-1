# Week 4 Reference App — Sari-Sari Dashboard

**This is a completed reference build, not a starter/pre-lab scaffold.**
It exists so Week 5 (M4B) can begin from a real, working, cumulative
codebase — the same way the bootcamp's own students would carry their
Week 4 work forward — rather than from a description of what Week 4
should have produced.

## Why this app looks the way it does

It's scoped tightly to **Week 4's own Lesson Plan outcomes** (M4A) —
nothing from Week 5 (routing, TanStack Query, global state) has been
pulled forward early:

- (a) **Components, Props & JSX** — `ProductCard` is a pure, stateless,
  props-driven component. `Dashboard` is pure composition.
- (b) **useState & handling user interaction** — the favourite-toggle
  button is wired through `onClick` → `onToggleFavourite(id)` → parent
  state update.
- (c) **useEffect + async/await for external data** — `ProductList`
  fetches from a public API (`fakestoreapi.com`) inside `useEffect`, with
  a local mock-JSON fallback if the network call fails (per the LP's own
  guidance on live-session API/internet flakiness).
- (d) **Component lifecycle & data flow** — data flows down via props
  (`{...product}`), events flow up via callbacks (`onToggleFavourite`).
- (e) **Scaffolding a React project with Vite** — the project uses Vite's
  React template.

### Correct state ownership (deliberately explicit)

`products`, `favourites`, and `status` all live in `ProductList`, **not**
in `ProductCard`. This isn't incidental — it's the concrete, gradeable
answer to the "where should this state live?" question the Thinking-in-
React lab asks learners to reason through:

- `products` is used by every card, so it must live above all of them.
- The live favourite **count** aggregates every card's toggle state — no
  single card can own that number; only a shared ancestor can.

See the comments at the top of `ProductList.jsx` and `ProductCard.jsx`
for the reasoning spelled out in place.

### What's deliberately *not* here

Per Week 4's own Instructor Notes ("prop drilling and global state are
Week 5's problem, not this week's — don't pre-empt them"), this app has:
- No routing (no dynamic `:id` product-detail view).
- No global/server state library (no Context, no TanStack Query).

Those are exactly the gaps Week 5 (M4B) builds on top of this app to
close.

## Tooling

- Vite 8 + React 19.
- **ESLint** (flat config, `eslint.config.js`) — swapped in for Vite's
  newer default `oxlint`, because Week 4's LP names ESLint explicitly as
  the module's tool, and Week 5's rubric now grades code quality against
  it.

## Verified

```
npm install     # clean install, 0 vulnerabilities
npx eslint .    # 0 errors, 0 warnings
npx vite build  # builds cleanly to dist/
```

## Running it

```
npm install
npm run dev
```

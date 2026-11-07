# To-do List Dashboard

A to-do list dashboard built with React. Browse tasks on a dashboard, open a task to see its details, and read the About page.

## Features

- **Dashboard** (`/`): lists tasks fetched from the JSONPlaceholder API, with loading, error, and empty states.
- **Task detail** (`/tasks/:id`): shows one task based on the `id` in the URL.
- **About** (`/about`): describes the app and its builder.

## Tech stack

- React 19
- React Router (routing)
- TanStack Query (server data fetching and caching)
- Tailwind CSS (styling)
- Vite (dev server and build)
- ESLint (linting)

## Setup

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the local address Vite prints in the terminal (usually `http://localhost:5173`).

## Other scripts

```bash
npm run build    # production build into dist/
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Screenshots

![Dashboard](screenshots/dashboard.png)
![Task detail](screenshots/task-detail.png)
![About page](screenshots/about.png)

## Project structure

```
src/
  App.jsx                    # route definitions
  main.jsx                   # providers: QueryClient and Router
  components/
    TaskPage.jsx             # dashboard layout and heading
    TaskList.jsx             # fetches and lists tasks
    TaskRow.jsx              # one task card
    TodoDetail.jsx           # single task page (/tasks/:id)
    About.jsx                # about page
```

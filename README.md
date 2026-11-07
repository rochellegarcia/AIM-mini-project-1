# To-do List Dashboard

A to-do list dashboard built with React. Browse tasks on a dashboard, filter them by category, search by title, open a task to see its details, and read the About page.

## Features

- **Dashboard** (`/`): lists tasks fetched from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/todos) API. Each card shows the task's title, category, and status.
  - **Categories:** open the Categories menu and pick Work, Personal, or House Chores to see only that category's tasks, with open tasks listed first. Pick **All** to see every task again.
  - **Search:** type in the search bar to find tasks by title across all categories.
- **Task detail** (`/tasks/:id`): shows one task's title, category, and status based on the `id` in the URL. Open it with the **Open Task** link on any task that is not completed.
- **About** (`/about`): describes the app and its builder.

The API has no categories, so each category is a group of API user IDs, set in `src/components/Categories.jsx`.

### Loading, error, and empty states

- **Loading:** shown while tasks or a single task are being fetched.
- **Error:** shown when the API request fails. To see it, block requests to `jsonplaceholder.typicode.com` in your browser's developer tools (Network panel, "Block request domain"), then reload the page.
- **Empty:** type a search that matches no task, such as `zzz`, to see "No tasks found." Visit a task id that does not exist, such as `/tasks/9999`, to see "Task not found."

## Tech stack

- React 19
- React Router (routing)
- TanStack Query (server data fetching and caching)
- Tailwind CSS (styling)
- Vite (dev server and build)
- ESLint (linting)

## Setup

Requires Node.js 20.19 or newer (needed by Vite 8).

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
  index.css                  # Tailwind CSS import
  components/
    TaskPage.jsx             # dashboard layout, categories menu, search bar
    TaskList.jsx             # fetches tasks, then filters, searches, and sorts them
    TaskRow.jsx              # one task card
    TaskDetail.jsx           # single task page (/tasks/:id)
    About.jsx                # about page
    Profile.jsx              # profile photo and greeting on the dashboard
    Categories.jsx           # category names and the user IDs in each
```

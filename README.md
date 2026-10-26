# FitLog — Workout Library

FitLog is a responsive workout library and daily workout planner built with Next.js. Browse exercises, review workout details, add up to five lifts to today's plan, save workouts for later, and track completed exercises.

## Technologies
- Next.js App Router
- React 19 and TypeScript
- Tailwind CSS with custom responsive styling
- Lucide React icons
- FitLog REST API
- Browser localStorage for persistence

## Key Features
1. Responsive dark UI inspired by the provided Figma references, with neon-lime accents.
2. Workout library with search, category tags, duration, calories, and rating.
3. Workout detail pages with equipment, difficulty, sets, reps, and instructions.
4. Today's Plan and Saved tabs, five-workout plan cap, live metrics, remove and mark-as-done actions.
5. localStorage persistence, toast feedback, loading skeletons, API fallback data, sorting, and a custom 404 page.

## Getting Started

Requirements: Node.js 18.18+ (Node.js 20 LTS recommended) and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## API
The app fetches workout data from `https://api.abcz.workers.dev/api/fitlog`. The normalizer supports common response wrappers such as `data`, `workouts`, `results`, and `items`, and common field-name variants. If the API is unavailable or rate-limited, the app uses sample data so the UI remains usable.

## Routes
- `/` — Workout library
- `/workout/[id]` — Workout detail
- `/my-plan` — Today's Plan and Saved workouts
- Any unknown route — Custom 404 page

## Deployment
Deploy on Vercel or another Next.js-compatible host. The App Router handles direct page requests; use a platform that supports Next.js routing rather than deploying this project as a plain static HTML folder.

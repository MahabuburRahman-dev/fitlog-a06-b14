import HomeClient from "@/components/HomeClient";
import { fallbackWorkouts, getWorkouts } from "@/lib/workouts";
export const dynamic = "force-dynamic";
export default async function HomePage() {
  let workouts = fallbackWorkouts;
  let apiError = false;
  try {
    const data = await getWorkouts();
    if (data.length) workouts = data;
    else apiError = true;
  } catch {
    apiError = true;
  }
  return <HomeClient workouts={workouts} apiError={apiError} />;
}

import JobForm from "./page/JobForm";
import { cookies } from "next/headers";
import { ThemeSwitcher } from "./components/theme-swither";

export default function Home() {
  const theme = cookies().get("theme")?.value === "dark" ? "dark" : "light";
  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen flex flex-col">
      <ThemeSwitcher theme={theme} />
      <main className="flex flex-col m-auto justify-center items-center flex-1">
        <JobForm />
      </main>
    </div>
  );
}

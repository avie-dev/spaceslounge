import { useRouter } from "next/router";

export default function NotFound() {
  const route = useRouter();

  return (
    <div className="flex flex-col justify-center items-center gap-8 h-screen">
      <h1 className="text-6xl">Page not found</h1>
      <button className="text-blue-600 underline" onClick={() => route.back()}>
        Home Page
      </button>
    </div>
  );
}

"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-red-500 text-6xl mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <h1 className="text-4xl mb-4">Error 404</h1>
      <p className="text-lg mb-8">La página que estás buscando no existe.</p>
      <button
        type="button"
        onClick={() => router.push("/")}
        className="bg-red-500 text-white p-2 rounded mr-6"
      >
        Volver al inicio
      </button>
    </div>
  );
}

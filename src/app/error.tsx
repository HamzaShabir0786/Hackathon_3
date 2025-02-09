"use client";
export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <>
      <h1 className="text-center text-red-500 font-bold">
        Something Wrong, Error... {error.message}
      </h1>
    </>
  );
}

import React from "react";

export default async function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 mt-5">
      <small className="mb-2 block text-xs">
        &copy; 2024 Luciano Guerrero
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend.
      </p>
    </footer>
  );
}

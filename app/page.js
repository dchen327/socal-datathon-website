"use client";
import React, { useEffect } from "react";
import About from "./components/about";
import FrequentlyAskedQuestions from "./components/faq";

export default function Home() {
  useEffect(() => {
    import("preline");
  }, []);

  return (
    <main>
      <div
        className="h-screen max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 bg-cover overflow-hidden bg-bottom"
        style={{
          backgroundImage: "url('/assets/splashscreen.png')",
        }}
      >
        <div className="absolute top-1/2 left-1/2 text-center">
          <h1 className="text-7xl text-white font-boldtransform -translate-x-1/2 -translate-y-1/2 font-semibold">
            Socal Datathon
          </h1>
          <h2 className="text-5xl text-white -translate-x-1/2 -translate-y-1/2">
            March 3, 2024
          </h2>
        </div>
      </div>

      <About />

      <FrequentlyAskedQuestions />
    </main>
  );
}

"use client";
import React, { useEffect } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export default function Register() {
  useEffect(() => {
    import("preline");
  }, []);

  return (
    <>
      {/* Blog Article */}
      <div className="px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        {/* Content */}
        <div className="space-y-5 md:space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold md:text-3xl dark:text-white">
              Qualifications
            </h2>
            <p className="text-lg text-gray-800 dark:text-gray-200">...</p>
            <h2 className="text-2xl font-bold md:text-3xl dark:text-white">
              Application
            </h2>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              Registration for the Socal Datathon will open 1/1/2024.
            </p>
          </div>
        </div>
        {/* End Content */}
      </div>
      {/* End Blog Article */}
    </>
  );
}

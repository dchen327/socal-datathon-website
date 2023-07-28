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
      <div className="max-w-screen-xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        {/* Content */}
        <div className="space-y-5 md:space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl py-1 font-bold md:text-3xl dark:text-white">
              Application
            </h2>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              Registration will open on November 1, 2022 and close on February
              1st, 2024.
            </p>
            <h2 className="text-2xl py-1 font-bold md:text-3xl dark:text-white">
              Eligibility
            </h2>
            <ul className="list-disc ml-8">
              <li>
                Must currently be a full-time college or university student in
                the United States to apply
              </li>
              <li>
                Students with strong backgrounds in math, computer science,
                statistics, data science, and other quantitative fields will be
                given preference.
              </li>
            </ul>
            <h2 className="text-2xl py-1 font-bold md:text-3xl dark:text-white">
              Notes
            </h2>
            <ul className="list-disc ml-8">
              <li>
                Students will compete in teams of 3-4. Applicants are encouraged
                to apply with their desired teammates, though applications from
                pairs and individuals will also be accepted.
              </li>
              <li>
                Students from across the country are invited to apply. Travel
                reimbursements will be provided to offset the cost of flights
                and car services to the venue.
              </li>
              <li>
                Food and accommodation will be provided to all participants.
              </li>
            </ul>
          </div>
        </div>
        {/* End Content */}
      </div>
      {/* End Blog Article */}
    </>
  );
}

"use client";
import { animateScroll, scroller } from "react-scroll";
import { useEffect, useState } from "react";

const scrollConfig = {
  duration: 500,
  smooth: true,
  offset: -75,
};

export function Navbar() {
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(window.location.pathname === "/");
  }, []);

  const handleHomeClick = () => {
    if (isHomePage) {
      animateScroll.scrollToTop({ duration: 500 });
    } else {
      window.location.href = "/";
    }
  };

  return (
    <header className="sticky top-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-3 dark:bg-gray-800">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <a className="flex-none text-xl font-semibold dark:text-white" href="#">
          SCDO
        </a>
        <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:pl-5">
          <a
            className="font-medium text-gray-600  hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
            onClick={handleHomeClick}
            aria-current="page"
          >
            Home
          </a>
          <a
            className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
            href="/#About"
          >
            About
          </a>
          <a
            className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
            href="/register"
          >
            Register
          </a>
          <a
            className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
            href="/sponsors"
          >
            Sponsors
          </a>
          <a
            className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
            href="faq"
          >
            FAQ
          </a>
        </div>
      </nav>
    </header>
  );
}

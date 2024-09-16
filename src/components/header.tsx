import React from "react";
import dynamic from "next/dynamic";
import { Search } from "../app/_comonents/search";
import { Dropdown } from "../components/ui/dropdown";

const ChangeTheme = dynamic(() => import("./change-theme"), {
  ssr: false,
});

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <ul className="flex items-center justify-between gap-6">
          <li>
              <a href="/">
              <img
              className="h-10 dark:invert"
              src="/header-logo.svg"
              alt="logo"
            />
              </a>
          </li>
          <li className="flex-grow">
            <Search />
          </li>
          <li>
            <Dropdown />
          </li>
          <li>
            <ChangeTheme />
          </li>
        </ul>
      </div>
    </header>
  );
};

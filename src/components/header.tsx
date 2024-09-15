import React from "react";
import dynamic from "next/dynamic";
import { Search } from "../app/_comonents/search";
import { Dropdown } from "../components/ui/dropdown";

const ChangeTheme = dynamic(() => import("./change-theme"), {
  ssr: false,
});

export const Header = () => {
  return (
    <header className="container mx-auto pt-6 pb-8">
      <ul className="flex items-center justify-between gap-6 bg-white dark:bg-gray-900 p-4 rounded-lg sh">
        <li>
          <img
            className="h-10 dark:invert"
            src="/header-logo.svg"
            alt="logo"
          />
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
    </header>
  );
};

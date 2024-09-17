"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Search } from "../app/_comonents/search";
import { Dropdown } from "../components/ui/dropdown";
import { FaBell } from "react-icons/fa6";
import { Sheets } from "../components/ui/shet";

const ChangeTheme = dynamic(() => import("./change-theme"), {
  ssr: false,
});

export const Header = () => {
  const handleBellClick = () => {
    console.log("Qo'ng'iroqcha bosildi!");
    alert("Bildirishnomalar yo'q!");
  };

  return (
    <header className="fixed top-0 left-0 w-full  bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img
            className="h-10 dark:invert"
            src="/header-logo.svg"
            alt="logo"
          />
        </a>
        <div className="flex-grow mt-4 md:mt-0">
          <Search />
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <span
            onClick={handleBellClick}
            className="cursor-pointer hover:scale-110 transition-transform duration-300"
          >
            <FaBell size={24} />
          </span>
          <Dropdown />
          <Sheets />
          <ChangeTheme />
        </div>
      </div>
    </header>
  );
};

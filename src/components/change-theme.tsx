"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { FaSun, FaMoon } from "react-icons/fa";

const ChangeTheme = () => {
  const { theme, setTheme } = useTheme();


  const buttonStyle =
    theme === "light"
      ? "bg-gray-200 text-gray-900"
      : "bg-gray-800 text-gray-100";

  return (
    <div>
      <Button
        variant={"secondary"}
        className={`flex items-center gap-2 ${buttonStyle} transition-all duration-300`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <FaSun /> : <FaMoon />}
      </Button>
    </div>
  );
};

export default ChangeTheme;

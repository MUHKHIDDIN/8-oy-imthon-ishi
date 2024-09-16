"use client";

import React from "react";
import { BsFillSearchHeartFill } from "react-icons/bs";

import { Button } from "../../components/ui/button";
import { RiListSettingsFill } from "react-icons/ri";

export const Search = () => {
  const [inputValue, setValue] = React.useState("");


  return (
    <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center">
      <div className="relative w-full flex items-center">
        <div className="relative flex items-center w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <BsFillSearchHeartFill className="text-2xl text-gray-500" />
          </div>
          <input
            onChange={(e) => setValue(e.target.value)}
            placeholder="Qidirish..."
            className="w-[800px] h-10 border-l border-y border-gray-300 bg-white px-4 pl-12 text-sm text-gray-800 shadow-md outline-none transition-all duration-300 ease-in-out focus:ring-2 focus:ring-green-500"
            type="text"
          />
          <Button
            className="h-10 border rounded-l-none border-gray-300 px-4 flex items-center gap-2 rounded-r-lg"
            variant="success"
          >
            <RiListSettingsFill className="text-lg" />
            Filter
          </Button>
        </div>
      </div>
      {inputValue.length >= 3 && (
        <div className="absolute left-1/2 top-full z-10 mt-4 w-full max-w-xl -translate-x-1/2 transform rounded-lg bg-[#bcb7cb] shadow-lg">
        </div>
      )}
    </div>
  );
};

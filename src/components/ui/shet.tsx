import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoIosContact } from "react-icons/io";
import { Button } from "./button";

export const Sheets = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <button className="flex items-center space-x-2 p-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <IoIosContact className="text-2xl text-blue-500 dark:text-blue-300" />
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Kirish
            </span>
          </button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="text-center">
            <SheetTitle className="text-2xl font-bold text-white dark:text-gray-100">
              Profilingiz
            </SheetTitle>
            <SheetDescription className="text-white dark:text-gray-400">
              Sizning profilingizdagi shaxsiy ma'lumotlar
            </SheetDescription>
          </SheetHeader>

          <div className="mt-6 flex flex-col items-center space-y-4">
            <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <IoIosContact className="text-5xl text-gray-500 dark:text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-white dark:text-gray-100">
              Saidturaev Muhiddin
            </h2>
            <p className="text-sm text-white dark:text-gray-400">
              muhiddinsaidturaev63@gmail.com
            </p>
          </div>

          <div className="mt-8 space-y-2 flex flex-col items-center">
            <Button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 transition">
              Profilni tahrirlash
            </Button>
            <Button className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800 transition">
              Chiqish
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

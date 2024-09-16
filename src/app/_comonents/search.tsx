"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { getNotebookByTitle } from "../../Service/Query/get-All data";
import { productTypes } from "../../Service/types/products";
import { Button } from "@/components/ui/button";
import { RiListSettingsFill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [results, setResults] = useState<productTypes[]>([]);
  const [filteredResults, setFilteredResults] = useState<productTypes[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const fetchSearchResults = async (query: string) => {
    try {
      const data = await getNotebookByTitle(query);
      setResults(data);
      setFilteredResults(data);
      setIsDropdownVisible(true);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleFilter = () => {
    if (searchQuery.length >= 3) {
      fetchSearchResults(searchQuery);
    } else {
      setFilteredResults([]);
      setIsDropdownVisible(false);
    }
  };

  const handleResultClick = (item: productTypes) => {
    setSearchQuery("");
    setResults([]);
    setFilteredResults([]);
    setIsDropdownVisible(false);
    router.push(`/Product-detail/${item.id}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleFilter();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setSearchQuery("");
        setResults([]);
        setFilteredResults([]);
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex items-center w-full max-w-xl mx-auto dark:bg-gray-800">
      <div className="relative flex items-center w-full">
        <BsSearch size={20} className="absolute left-3 text-gray-500 dark:text-gray-400" />
        <input
          type="text"
          ref={inputRef}
          className="w-full h-10 pl-10 pr-24 border border-gray-300 rounded-md focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"
          placeholder="Qidiruv..."
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
        />
        <Button
          className="absolute right-0 top-0 h-full px-4 bg-green-500 text-white hover:bg-green-600 rounded-r-lg flex items-center dark:bg-green-600 dark:hover:bg-green-700"
          onClick={handleFilter}
        >
          <RiListSettingsFill size={20} className="mr-2" />
          Filter
        </Button>
      </div>

      {isDropdownVisible && filteredResults.length > 0 && (
        <ul
          ref={dropdownRef}
          className="absolute top-full left-0 w-full bg-white border border-gray-300 mt-1 rounded-lg shadow-md z-10 max-h-60 overflow-y-auto dark:bg-gray-700 dark:border-gray-600"
        >
          {filteredResults.map((item) => (
            <li
              key={item.id}
              className="flex items-center p-3 hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-600"
              onClick={() => handleResultClick(item)}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-12 h-12 object-cover rounded-lg mr-4"
              />
              <div>
                <h3 className="text-sm font-semibold dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {searchQuery && searchQuery.length < 3 && (
        <p className="absolute top-full mt-2 text-sm text-gray-500 dark:text-gray-400">
          Qidiruv uchun kamida uchta harf kiriting.
        </p>
      )}
    </div>
  );
};

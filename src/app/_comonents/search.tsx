"use client";

import React, { useState, useEffect, useRef } from "react";
import { getNotebookByTitle } from "../../Service/Query/get-All data"; // Ensure the path is correct

interface SearchResult {
  id: number;
  img: string;
  title: string;
  price: string;
}

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLUListElement | null>(null);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length >= 3) {
      fetchSearchResults(query);
    } else {
      setResults([]);
      setIsDropdownVisible(false);
    }
  };

  // Fetch search results
  const fetchSearchResults = async (query: string) => {
    setIsLoading(true);
    try {
      const data = await getNotebookByTitle(query); // API call
      setResults(data);
      setIsDropdownVisible(true);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setIsLoading(false);
    }
  };

 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex items-center w-full max-w-xl">
   
      <input
        type="text"
        className="w-full h-10 px-4 border border-gray-300 rounded-l-lg focus:outline-none focus:border-green-500"
        placeholder="Qidiruv..."
        value={searchQuery}
        onChange={handleSearchChange}
      />

      <button className="h-10 px-4 bg-green-500 text-white hover:bg-green-600 rounded-r-lg">
        Filter
      </button>

  
      {isDropdownVisible && results.length > 0 && (
        <ul ref={dropdownRef} className="absolute top-full left-0 w-full bg-white border border-gray-300 mt-1 rounded-lg shadow-md z-10">
          {results.map((item) => (
            <li key={item.id} className="flex items-center p-3 hover:bg-gray-100 cursor-pointer">
              <img src={item.img} alt={item.title} className="w-12 h-12 object-cover rounded-lg mr-4" />
              <div>
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {isLoading && <p className="absolute top-full mt-2 text-sm text-gray-500">Yuklanmoqda...</p>}
    </div>
  );
};

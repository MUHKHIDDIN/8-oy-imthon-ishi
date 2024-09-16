"use client";
import React, { useEffect, useState } from "react";
import { getNotebook } from "../../Service/Query/get-notebook";
import { productTypes } from "../../Service/types/products";
import { Button } from "@/components/ui/button";
export const Product = () => {
  const [data, setData] = useState<productTypes[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getNotebook();
        setData(result);
      } catch (error) {
        setError((error as Error).message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-xl text-red-500 dark:text-red-400">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 dark:bg-gray-900">
      {data.slice(0, 4).map((item) => {
        const price = Number(item.price.replace(/\s/g, ""));

        return (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden dark:bg-gray-800 dark:text-gray-100"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2 dark:text-white">
                  {item.title}
                </h2>
                {item.brand && (
                  <p className="text-gray-600 dark:text-gray-300">
                    Brand: {item.brand}
                  </p>
                )}
                {item.color && (
                  <p className="text-gray-600 dark:text-gray-300">
                    Color: {item.color}
                  </p>
                )}
                {item.ram && (
                  <p className="text-gray-600 dark:text-gray-300">
                    RAM: {item.ram}
                  </p>
                )}
                {item.geForce && (
                  <p className="text-gray-600 dark:text-gray-300">
                    GeForce: {item.geForce}
                  </p>
                )}
                {item.core && (
                  <p className="text-gray-600 dark:text-gray-300">
                    Core: {item.core}
                  </p>
                )}
                {item.display && (
                  <p className="text-gray-600 dark:text-gray-300">
                    Display: {item.display}
                  </p>
                )}
                {item.memory && (
                  <p className="text-gray-600 dark:text-gray-300">
                    Memory: {item.memory}
                  </p>
                )}
                {item.weight && (
                  <p className="text-gray-600 dark:text-gray-300">
                    Weight: {item.weight}
                  </p>
                )}
                <p className="text-lg font-semibold text-gray-900 mt-4 dark:text-white">
                  Price: ${price.toFixed(2)}
                </p>

                <Button className="mt-4 w-full bg-[#1FBA4A] text-white py-2 rounded-md hover:bg-green-500 transition-colors duration-300">
                  Korzinka
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

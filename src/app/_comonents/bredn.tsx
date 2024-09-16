"use client";
import React, { useEffect, useState } from "react";
import { getBrend } from "../../Service/Query/get-brend";
import { productTypes } from "../../Service/types/products";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export const Brend = () => {
  const [data, setData] = useState<productTypes[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getBrend();
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
          <Link href={`/Product-detail/${item.id}`} key={item.id}>
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
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2 dark:text-white">
                  {item.title}
                </h2>
                <strong className="text-gray-800 dark:text-gray-300">
                  $ {item.price}
                </strong>
                <p className="text-gray-600 dark:text-gray-300">
                  Brand: {item.brand}
                </p>
                <Button className="mt-4 w-full bg-[#1FBA4A] text-white py-2 rounded-md hover:bg-green-600">
                  Korzinka
                </Button>
              </div>
            </div>
          </div>
        </Link>
        );
      })}
    </div>
  );
};

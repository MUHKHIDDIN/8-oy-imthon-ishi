"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getPhone } from "../../Service/Query/get-phones";
import { productTypes } from "../../Service/types/products";
import { Button } from "@/components/ui/button";

export const Phone = () => {
  const [data, setData] = useState<productTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getPhone();
        setData(result);
      } catch (error) {
        console.error("Error fetching phones:", (error as Error).message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6 dark:bg-gray-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.slice(0, 4).map((item) => {
          const price = item.price ? Number(item.price.replace(/\s/g, "")) : 0;

          return (
            <Link href={`/Product-detail/${item.id}`} key={item.id}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img
                  src={item.img || "/placeholder.png"} 
                  alt={item.title || "No Image"}
                  className="w-[100px] ml-auto mr-auto h-36 object-cover pt-4"
                />
                <div className="p-6 flex flex-col h-full">
                  <div className="flex flex-col flex-grow">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      {item.title}
                    </h2>
                    {item.brand && (
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Brand: {item.brand}
                      </p>
                    )}
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      Price: ${price.toFixed(2)}
                    </p>
                  </div>
                  <Button className="mt-4 w-full bg-[#1FBA4A] text-white py-2 rounded-md">
                    Korzinka
                  </Button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

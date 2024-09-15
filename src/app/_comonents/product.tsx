"use client";
import React, { useEffect, useState } from "react";
import { getNotebook } from "../../Service/Query/get-notebook";
import { productTypes } from "../../Service/types/products";

export const Product = () => {
  const [data, setData] = useState<productTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getNotebook();
        setData(result);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-xl text-gray-500">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-xl text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {data.slice(0, 4).map((item) => {
        // Narxni raqamga aylantirish va vergul yoki bo'shliqlarni olib tashlash
        const price = Number(item.price.replace(/\s/g, "")); // Bo'shliqlarni olib tashlash

        return (
          <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h2>
              {item.brand && <p className="text-gray-600">Brand: {item.brand}</p>}
              {item.color && <p className="text-gray-600">Color: {item.color}</p>}
              {item.ram && <p className="text-gray-600">RAM: {item.ram}</p>}
              {item.geForce && <p className="text-gray-600">GeForce: {item.geForce}</p>}
              {item.core && <p className="text-gray-600">Core: {item.core}</p>}
              {item.display && <p className="text-gray-600">Display: {item.display}</p>}
              {item.memory && <p className="text-gray-600">Memory: {item.memory}</p>}
              {item.weight && <p className="text-gray-600">Weight: {item.weight}</p>}
              <p className="text-lg font-semibold text-gray-900 mt-4">
                Price: ${price.toFixed(2)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

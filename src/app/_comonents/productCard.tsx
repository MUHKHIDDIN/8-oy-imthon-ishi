import React from "react";
import { Button } from "@/components/ui/button";
import { productTypes } from "../../Service/types/products";
import Link from "next/link";


export const ProductCard: React.FC<productTypes> = ({
  img,
  title,
  brand,
  price,
  color,
  ram,
  rame,
  geForce,
  core,
  display,
  memory,
  weight,
  text,
  name,
  id,
}) => {
  return (
    <Link href={`/Product-detail/${id}`} key={id}>
      <div className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700 rounded-lg overflow-hidden w-full max-w-xs p-4 hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
           <img className="w-[150px] ml-auto mr-auto h-36 object-cover" src= {img}alt="img" />
          <div className="absolute top-2 right-2 bg-[#1FBA4A] dark:bg-[#34D399] text-white px-2 py-1 rounded text-xs shadow-lg">
            ${price}
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-1">
            {title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Brand: {brand}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Color: {color}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">RAM: {ram}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Extended RAM: {rame}
          </p>
          {geForce && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              GeForce: {geForce}
            </p>
          )}
          {core && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Core: {core}
            </p>
          )}
          {display && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Display: {display}
            </p>
          )}
          {memory && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Memory: {memory}
            </p>
          )}
          {weight && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Weight: {weight}
            </p>
          )}
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{text}</p>
          <Button className="mt-4 w-full bg-[#1FBA4A] dark:bg-[#34D399] text-white py-2 rounded-md hover:bg-green-500 dark:hover:bg-green-600 transition-colors duration-300">
            Korzinka
          </Button>
        </div>
      </div>
    </Link>
  );
};

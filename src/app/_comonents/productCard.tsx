import React from "react";
import { Button } from "@/components/ui/button";

interface productTypes {
  img: string;
  title: string;
  brand: string;
  price: string;
  color: string;
  ram: string;
  rame: string;
  geForce?: string | null;
  core?: string;
  display?: string;
  memory?: string | null;
  weight?: string;
  text: string;
  name: string;
  id: number;
}

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
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-xs p-4 hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={img}
          alt={title}
          className="w-full h- object-cover rounded-md"
        />
        <div className="absolute top-2 right-2 bg-[#1FBA4A] text-white px-2 py-1 rounded text-xs shadow-lg">
          ${price}
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-md font-semibold text-gray-800 mb-1">{title}</h2>
        <p className="text-sm text-gray-600">Brand: {brand}</p>
        <p className="text-sm text-gray-600">Color: {color}</p>
        <p className="text-sm text-gray-600">RAM: {ram}</p>
        <p className="text-sm text-gray-600">Extended RAM: {rame}</p>
        {geForce && <p className="text-sm text-gray-600">GeForce: {geForce}</p>}
        {core && <p className="text-sm text-gray-600">Core: {core}</p>}
        {display && <p className="text-sm text-gray-600">Display: {display}</p>}
        {memory && <p className="text-sm text-gray-600">Memory: {memory}</p>}
        {weight && <p className="text-sm text-gray-600">Weight: {weight}</p>}
        <p className="text-sm text-gray-600 mt-2">{text}</p>
        <Button className="mt-4 w-full bg-[#1FBA4A] text-white py-2 rounded-md hover:bg-green-500 transition-colors duration-300">
          Korzinka
        </Button>
      </div>
    </div>
  );
};

"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getNotebookById } from "../../../Service/Query/get-catalog";
import { productTypes } from "../../../Service/types/products";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

const ProductDetail = () => {
  const { Product_title } = useParams();
  const [product, setProduct] = useState<productTypes | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!Product_title || Array.isArray(Product_title)) return;
      try {
        const result = await getNotebookById(Product_title);
        setProduct(result);
      } catch (error) {
        setError((error as Error).message);
      }
    };

    fetchProduct();
  }, [Product_title]);

  if (error) {
    return (
      <div className="flex items-center justify-center">
        <div className="text-xl text-red-500 dark:text-red-400">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 dark:bg-gray-900 pt-[150px]">
      <Link href={"/"}>
        <Button
          variant={"secondary"}
          className="flex items-center gap-2 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <BiArrowBack /> Orqaga
        </Button>
      </Link>
      {product && (
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between mt-6">
          <div>
            <img
              className="w-[400px] h-auto object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              src={product.img}
              alt="img"
            />
          </div>

          <div className="flex flex-col justify-between h-full text-gray-800 dark:text-gray-300 w-full">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {product.title}
            </h2>

            <div className="flex items-center mb-2">
              <span className="text-yellow-500">★★★★☆</span>
              <span className="ml-2 text-gray-600 dark:text-gray-400 text-sm">(34 ta sharh)</span>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-3xl font-bold text-green-600">
                Price : {product.price}
              </p>
              <p className="text-xl line-through text-gray-500 dark:text-gray-400">
                26 689 520 so'm
              </p>
              <span className="bg-red-500 text-white px-2 py-1 text-sm rounded">
                -20%
              </span>
            </div>

            <div className="mt-6">
              <p className="text-lg font-medium mb-2">Rangi:</p>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full border border-gray-300 cursor-pointer dark:border-gray-600"></div>
                <div className="w-8 h-8 bg-gray-200 rounded-full border border-gray-300 cursor-pointer dark:bg-gray-600 dark:border-gray-400"></div>
                <div className="w-8 h-8 bg-yellow-500 rounded-full border border-gray-300 cursor-pointer"></div>
                <div className="w-8 h-8 bg-blue-400 rounded-full border border-gray-300 cursor-pointer"></div>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-lg dark:bg-green-800 dark:text-green-300">
                <span>Omborda mavjud</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-lg dark:bg-gray-800 dark:text-gray-300">
                <span>O'zbekiston bo'ylab yetkazib berish</span>
                <span className="text-sm">(14 ish kuni)</span>
              </div>
            </div>

            <Button className="mt-6 w-full bg-[#1FBA4A] text-white py-3 rounded-lg shadow-md hover:bg-green-500 dark:hover:bg-green-600 transition-colors duration-300">
              Savatchaga
            </Button>
          </div>
        </div>
      )}
      {product && (
        <div className="text-gray-600 mt-7 dark:text-gray-400">
          <h2 className="text-2xl font-bold mb-4">Detailed information</h2>
          <table className="w-full text-left border-collapse">
            <tbody>
              {product.brand && (
                <tr className="border-b dark:border-gray-600">
                  <th className="py-2 font-bold dark:text-gray-300">Brand</th>
                  <td className="py-2">{product.brand}</td>
                </tr>
              )}
              {product.color && (
                <tr className="border-b dark:border-gray-600">
                  <th className="py-2 font-bold dark:text-gray-300">Color</th>
                  <td className="py-2">{product.color}</td>
                </tr>
              )}
              {product.ram && (
                <tr className="border-b dark:border-gray-600">
                  <th className="py-2 font-bold dark:text-gray-300">RAM</th>
                  <td className="py-2">{product.ram}</td>
                </tr>
              )}
              {product.geForce && (
                <tr className="border-b dark:border-gray-600">
                  <th className="py-2 font-bold dark:text-gray-300">Graphics Card</th>
                  <td className="py-2">{product.geForce}</td>
                </tr>
              )}
              {product.weight && (
                <tr className="border-b dark:border-gray-600">
                  <th className="py-2 font-bold dark:text-gray-300">Weight</th>
                  <td className="py-2">{product.weight}</td>
                </tr>
              )}
              {product.display && (
                <tr className="border-b dark:border-gray-600">
                  <th className="py-2 font-bold dark:text-gray-300">Display</th>
                  <td className="py-2">{product.display}</td>
                </tr>
              )}
              {product.memory && (
                <tr className="border-b dark:border-gray-600">
                  <th className="py-2 font-bold dark:text-gray-300">Memory</th>
                  <td className="py-2">{product.memory}</td>
                </tr>
              )}
              {product.text && (
                <tr className="border-b dark:border-gray-600">
                  <th className="py-2 font-bold dark:text-gray-300">Description</th>
                  <td className="py-2">{product.text}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

import React from "react";
import { getNotebookById } from "../../../Service/Query/get-catalog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { BsCartPlus } from "react-icons/bs";

interface ProductDetailProps {
  params: {
    Product_title: string;
  };
}

async function ProductDetail({ params }: ProductDetailProps) {
  const { Product_title } = params;
  const product = Product_title ? await getNotebookById(Product_title) : null;

  return (
    <div className="container mx-auto pt-[200px] sm:mt-[80px] sm:p-[50px] lg:p-[140px] dark:bg-gray-900 ">
      <Link
        href="/"
        className="flex items-center text-gray-600 dark:text-gray-400 hover:underline"
      >
        <BiArrowBack className="w-5 h-5 mr-2" />
      Orqaga
      </Link>
      {product && (
        
        <div className="flex flex-col md:flex-row gap-6 lg:gap-10 items-center justify-center mt-6">
          
          <div className="flex-shrink-0   sm:w-1/1 md:w-1/2 lg:w-1/3">
            <img
              className="w-[300px]   m-auto h-auto object-cover rounded-lg shadow-lg"
              src={product.img}
              alt={product.title}
            />
          </div>

          <div className="flex flex-col justify-between text-gray-800 dark:text-gray-300 w-full md:w-1/2 lg:w-2/3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {product.title}
            </h2>

            <div className="flex items-center mb-2">
              <span className="text-yellow-500 text-xl">★★★★☆</span>
              <span className="ml-2 text-gray-600 dark:text-gray-400 text-sm">
                (34 ta sharh)
              </span>
            </div>

            <div className="flex items-center gap-4 transition-transform duration-300 transform hover:scale-105">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600">
                Price: {product.price}
              </p>
              <p className="text-sm sm:text-base md:text-xl line-through text-gray-500 dark:text-gray-400">
                26 689 520 so'm
              </p>
              <span className="bg-red-500 text-white px-2 py-1 text-xs sm:text-sm md:text-base rounded">
                -20%
              </span>
            </div>

            <div className="mt-6">
              <p className="text-lg font-medium mb-2">Rangi:</p>
              <div className="flex flex-wrap gap-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gray-800 rounded-full border border-gray-300 cursor-pointer dark:border-gray-600 hover:ring-2 hover:ring-gray-400 transition-all duration-300"></div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gray-200 rounded-full border border-gray-300 cursor-pointer dark:bg-gray-600 dark:border-gray-400 hover:ring-2 hover:ring-gray-400 transition-all duration-300"></div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-yellow-500 rounded-full border border-gray-300 cursor-pointer hover:ring-2 hover:ring-yellow-400 transition-all duration-300"></div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-blue-400 rounded-full border border-gray-300 cursor-pointer hover:ring-2 hover:ring-blue-400 transition-all duration-300"></div>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4 flex-wrap">
              <div className="flex items-center gap-2 bg-green-100 text-green-700 px-2 py-1 rounded-lg dark:bg-green-800 dark:text-green-300 text-sm sm:text-base md:text-sm transition-colors duration-300">
                <span>Omborda mavjud</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 text-gray-700 px-2 py-1 rounded-lg dark:bg-gray-800 dark:text-gray-300 text-sm sm:text-base md:text-sm transition-colors duration-300">
                <span>O'zbekiston bo'ylab yetkazib berish</span>
                <span className="text-xs sm:text-sm">(14 ish kuni)</span>
              </div>
            </div>

            <Button className="mt-6 w-full md:w-[300px] bg-[#1FBA4A] text-white py-3 rounded-lg shadow-md hover:bg-green-500 dark:hover:bg-green-600 transition-colors duration-300 flex items-center justify-center gap-2">
              <BsCartPlus size={20} /> Korzinka
            </Button>
          </div>
        </div>
      )}

      {product && (
        <div className="text-gray-600 mt-7 dark:text-gray-400">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Detailed information
          </h2>
          <table className="w-full text-left border-collapse">
            <tbody>
              {product.brand && (
                <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                  <th className="py-2 font-bold dark:text-gray-300">Brand</th>
                  <td className="py-2">{product.brand}</td>
                </tr>
              )}
              {product.color && (
                <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                  <th className="py-2 font-bold dark:text-gray-300">Color</th>
                  <td className="py-2">{product.color}</td>
                </tr>
              )}
              {product.ram && (
                <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                  <th className="py-2 font-bold dark:text-gray-300">RAM</th>
                  <td className="py-2">{product.ram}</td>
                </tr>
              )}
              {product.geForce && (
                <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                  <th className="py-2 font-bold dark:text-gray-300">Graphics Card</th>
                  <td className="py-2">{product.geForce}</td>
                </tr>
              )}
              {product.weight && (
                <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                  <th className="py-2 font-bold dark:text-gray-300">Weight</th>
                  <td className="py-2">{product.weight}</td>
                </tr>
              )}
              {product.display && (
                <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                  <th className="py-2 font-bold dark:text-gray-300">Display</th>
                  <td className="py-2">{product.display}</td>
                </tr>
              )}
              {product.memory && (
                <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                  <th className="py-2 font-bold dark:text-gray-300">Memory</th>
                  <td className="py-2">{product.memory}</td>
                </tr>
              )}
              {product.text && (
                <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
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
}

export default ProductDetail;

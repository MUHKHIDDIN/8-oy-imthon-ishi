"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; 
import { getNotebookById } from "../../../Service/Query/get-catalog"; 
import { productTypes } from "../../../Service/types/products";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { Product_title } = useParams(); 
  const [product, setProduct] = useState<productTypes | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!Product_title) return;
      try {
        console.log("Fetching product with ID:", Product_title); 
        const result = await getNotebookById(Product_title);
        console.log("Product fetched:", result); 
        setProduct(result);
      } catch (error) {
        console.error("Error fetching product:", error); 
        setError((error as Error).message);
      }
    };
  
    fetchProduct();
  }, [Product_title]);
  
  if (error) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-xl text-red-500 dark:text-red-400">
          Error: {error}
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-xl text-gray-500 dark:text-gray-300">
          Loading...
        </div>
      </div>
    );
  }

  const price = product.price ? Number(product.price.replace(/\s/g, "")) : 0;

  return (
    <div className="p-6 dark:bg-gray-900 pt-[150px]">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.img || "/placeholder.png"} 
          alt={product.title || "No Image"}
          className=" md:w-1/2 h-auto object-cover"
        />
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
              {product.title}
            </h2>
            {product.brand && (
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Brand: {product.brand}
              </p>
            )}
            <p className="text-2xl font-semibold text-gray-900 mb-4 dark:text-white">
              Price: ${price.toFixed(2)}
            </p>
            <Button className="w-full bg-[#1FBA4A] text-white py-2 rounded-md hover:bg-green-500 transition-colors duration-300">
              Korzinka
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

"use server";
import { getNotebook } from "../../Service/Query/get-notebook";
import { productTypes } from "../../Service/types/products";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Notebook = async () => {
  let data: productTypes[] = [];

  try {
    data = await getNotebook();
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 dark:bg-gray-900">
        {data.slice(0, 4).map((item) => {
          return (
            <Link href={`/Product-detail/${item.id}`} key={item.id}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden dark:bg-gray-800 dark:text-gray-100 cursor-pointer block">
                <img
                  src={item.img || "/placeholder.png"}
                  alt={item.title || "No Image"}
                  className="w-[130px] ml-auto mr-auto h-36 object-cover pt-4"
                />
                <div className="p-4 flex flex-col h-full">
                  <div className="flex flex-col flex-grow">
                    <h2 className="text-lg font-bold text-gray-800 mb-2 dark:text-white truncate">
                      {item.title}
                    </h2>
                    {item.brand && (
                      <p className="text-gray-600 dark:text-gray-300 truncate">
                        Brand: {item.brand}
                      </p>
                    )}
                    <p className="text-lg font-semibold text-gray-900 mt-4 dark:text-white truncate">
                      Price: {item.price}
                    </p>
                  </div>
                  <Button className="mt-auto w-full bg-[#1FBA4A] text-white py-2 rounded-md hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-2">
                    <AiOutlineShoppingCart className="text-xl" />
                    <span>Korzinka</span>
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

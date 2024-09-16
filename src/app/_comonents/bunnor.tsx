"use client";

import React, { useEffect, useState } from "react";
import getBunnor from "../../Service/Query/get-bunnor";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
 
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { productTypes } from "../../Service/types/products";

export const Bunnor = () => {
  const [data, setData] = useState<productTypes[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getBunnor();
        setData(result);
      } catch (error) {
        setError((error as Error).message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [data.length]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="relative h-96 overflow-hidden container mx-auto">
      <Carousel>
        <CarouselPrevious
          onClick={() =>
            setActiveIndex((prevIndex) =>
              prevIndex === 0 ? data.length - 1 : prevIndex - 1
            )
          }
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white dark:bg-gray-300 dark:text-black p-2 z-10"
        >
          ‹
        </CarouselPrevious>

        <CarouselContent
          className="flex transition-transform ease-in-out duration-700"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {data.map((item) => (
            <CarouselItem key={item.id} className="w-full flex-shrink-0">
              <img
                src={item.img}
                alt={`Banner ${item.id}`}
                className="w-full h-auto object-cover filter brightness-100 dark:filter dark:brightness-75"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext
          onClick={() =>
            setActiveIndex((prevIndex) => (prevIndex + 1) % data.length)
          }
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white dark:bg-gray-300 dark:text-black p-2 z-10"
        >
          ›
        </CarouselNext>
      </Carousel>
    </div>
  );
};

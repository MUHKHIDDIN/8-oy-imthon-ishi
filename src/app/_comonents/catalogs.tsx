import { getCatalog } from "@/Service/Query/get-catalog";
import Link from "next/link";
import React from "react";

export const Catalogs = async () => {
  const catalog = await getCatalog();
  return (
    <>


      <div>
        <h1 className="text-2xl py-3 px-[10px]  bg-[#1FBA4A] text-white mb-2">
          Maxsus buyirtma
        </h1>

        <div className="flex flex-col border-[2px] shadow-md p-2 h-[1470px] w-[200px] text-center gap-2">
          {catalog.map((catalogs) => (
            <>
              <Link key={catalogs.id} href={`/catalog-list/${catalogs.name}`}>
                <div>
                  <strong className="hover:text-[#1FBA4A] cursor-pointer text-center">{catalogs.text}</strong>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

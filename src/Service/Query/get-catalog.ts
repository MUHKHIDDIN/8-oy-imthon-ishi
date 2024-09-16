"use server";

import { productTypes } from "../types/products";
const url = process.env.APP_URL;

export const getCatalog = async (): Promise<productTypes[]> => {
  try {
    const res = await fetch(`${url}/catalog`);
    if (!res.ok) {
      throw new Error("Failed to fetch catalog");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getNotebookById = async (id: string): Promise<productTypes> => {
  try {

    const endpoints = [
      `/phones/${id}`,
      `/notebook/${id}`,
      `/washingM/${id}`,
      `/steeringWheel/${id}`,
      `/sport/${id}`,
      `/computers/${id}`,
      `/all/${id}`,
    ];


    for (const endpoint of endpoints) {
      const res = await fetch(`${url}${endpoint}`);
      if (res.ok) {
        const data = await res.json();
        return data;
      }
    }

 
    throw new Error(`Product with ID ${id} not found in any endpoint.`);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

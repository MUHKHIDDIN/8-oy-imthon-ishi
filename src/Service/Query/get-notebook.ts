"use server";

import { productTypes } from "../types/products";
const url = process.env.APP_URL;


export const getNotebook = async (): Promise<productTypes[]> => {
  try {
    const res = await fetch(`${url}/notebook`);
    if (!res.ok) {
      throw new Error(`Server error: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(message);
  }
};




"use server";

import { productTypes } from "../types/products";
const url = process.env.APP_URL;

export const getCatalog = async (): Promise<productTypes[]> => {
  try {
    const res = await fetch(`${url}/catalog`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getNotebookById = async (id: string): Promise<productTypes> => {
  try {
    let res = await fetch(`${url}/phones/${id}`);
    if (!res.ok) {
      res = await fetch(`${url}/notebook/${id}`);
      if (!res.ok) {
        res = await fetch(`${url}/washingM/${id}`);
        if (!res.ok) {
          res = await fetch(`${url}/sport/${id}`);
          if (!res.ok) {
            res = await fetch(`${url}/computers/${id}`);
            if (!res.ok) {
              throw new Error(`Product with ID ${id} not found in any endpoint.`);
            }
          }
        }
      }
    }
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

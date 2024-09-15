"use server"

const url = process.env.APP_URL;
import {productTypes} from "../types/products";

const getBunnor = async (): Promise<productTypes[]> => {
  if (!url) {
    throw new Error("APP_URL environment variable is not defined");
  }

  try {
    const res = await fetch(`${url}/banners`);
    
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`);
    }

    const data: productTypes[] = await res.json();
    return data;
  } catch (error) {
    const err = (error as Error).message;
    throw new Error(`Error fetching banners: ${err}`);
  }
};

export default getBunnor;

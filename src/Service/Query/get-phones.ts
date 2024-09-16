"use server"  
import { productTypes } from "../types/products";
const url = process.env.APP_URL



 export const getPhone = async ():Promise<productTypes[]> => {
    try {
        const res = await fetch(`${url}/phones`)
        const data = res.json()
        return data
    } catch (error) {
        const err = (error as Error).message
        throw new Error(err)
    }
}



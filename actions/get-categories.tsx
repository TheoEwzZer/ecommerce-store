import { Category } from "@/types";
import axios, { AxiosResponse } from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

async function getCategories(): Promise<Category[]> {
  const res: AxiosResponse<any, any> = await axios.get(URL);

  return res.data;
}

export default getCategories;

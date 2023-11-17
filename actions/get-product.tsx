import { Product } from "@/types";
import axios, { AxiosResponse } from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

async function getProduct(id: string): Promise<Product> {
  const res: AxiosResponse<any, any> = await axios.get(`${URL}/${id}`);

  return res.data;
}

export default getProduct;

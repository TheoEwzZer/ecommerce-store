import { Product } from "@/types";
import axios, { AxiosResponse } from "axios";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

async function getProducts(query: Query): Promise<Product[]> {
  const url: string = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const res: AxiosResponse<any, any> = await axios.get(url);

  return res.data;
}

export default getProducts;

import { Size } from "@/types";
import axios, { AxiosResponse } from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

async function getSizes(): Promise<Size[]> {
  const res: AxiosResponse<any, any> = await axios.get(URL);

  return res.data;
}

export default getSizes;

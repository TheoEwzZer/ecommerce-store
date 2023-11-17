import { Billboard } from "@/types";
import axios, { AxiosResponse } from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

async function getBillboard(id: string): Promise<Billboard> {
  const res: AxiosResponse<any, any> = await axios.get(`${URL}/${id}`);

  return res.data;
}

export default getBillboard;

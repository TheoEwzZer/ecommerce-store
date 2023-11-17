import { Color } from "@/types";
import axios, { AxiosResponse } from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

async function getColors(): Promise<Color[]> {
  const res: AxiosResponse<any, any> = await axios.get(URL);

  return res.data;
}

export default getColors;

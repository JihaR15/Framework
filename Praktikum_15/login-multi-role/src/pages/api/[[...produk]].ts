import type { NextApiRequest, NextApiResponse } from "next";
import { retrieveProductById,  retrieveProducts } from "../../utils/db/servicefirebase";


type Data = {
  status: boolean;
  status_code: number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.query.produk![1]) {
    const data = await retrieveProductById("produk", req.query.produk![1]);
    res.status(200).json({ status: true, status_code: 200, data: data });
    return;
  } else {
    const data = await retrieveProducts("produk");
    res.status(200).json({ status: true, status_code: 200, data: data });
  }
}

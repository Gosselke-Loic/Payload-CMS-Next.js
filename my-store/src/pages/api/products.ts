import { Get } from '@/libraries';
import { endpoints } from '@/core';
import { AxiosResponse } from 'axios';
import { ProductModel, ApiResponse, ProductArray } from '@/shared';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
    try {
		const fetch = await Get<AxiosResponse>(`${endpoints.external.datas.products}`);
		const extraction: ProductArray = fetch.data;
        const data: ProductModel[] = extraction.docs;
		res.status(200).json( data )
    } catch (error) {
      	res.status(500).json("failed to load data" )
    }
}
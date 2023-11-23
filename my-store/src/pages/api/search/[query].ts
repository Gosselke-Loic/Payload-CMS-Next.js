import { Get } from '@/libraries';
import { endpoints } from '@/core';
import { AxiosResponse } from 'axios';
import type { ProductModel, ApiResponse } from '@/shared';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ApiResponse>
) {
    const { query } = req.query;
    try {
		const fetch = await Get<AxiosResponse>(`${endpoints.external.datas.products}?where[name][contains]=${query}`);
		const data: ProductModel[] = fetch.data.docs;
		res.status(200).json(data)
    } catch (error) {
        res.redirect(500, "/500")
    }
}
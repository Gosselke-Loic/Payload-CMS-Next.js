import {
	GlobalApiResponse,
	GlobalHomepage,
	GlobalLogin,
	GlobalRegister,
	GlobalComponents
} from '@/shared';
import { Get } from '@/libraries';
import { endpoints } from '@/core';
import { AxiosResponse } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<GlobalApiResponse>
) {
    const { nameOfComponent } = req.query;
	const data = await handleTypeOfGlobal(nameOfComponent);
	if(typeof data !== "string") return res.status(200).json( data );
	return res.redirect(500, "/500");
}

async function handleTypeOfGlobal(query: string | string[] | undefined): Promise<GlobalApiResponse> {
	if(query === undefined) return "failed to load data" as string;
	try {
		if(query === GlobalComponents.HOMEPAGE) {
			const fetch = await Get<AxiosResponse>(`${endpoints.external.globals.homepage}`);
			const data: GlobalHomepage = fetch.data;
			return data;
		}
		if(query === GlobalComponents.LOGIN) {
			const fetch = await Get<AxiosResponse>(`${endpoints.external.globals.login}`);
			const data: GlobalLogin = fetch.data;
			return data;
		}
		if(query === GlobalComponents.REGISTER) {
			const fetch = await Get<AxiosResponse>(`${endpoints.external.globals.register}`);
			const data: GlobalRegister = fetch.data;
			return data;
		}
		return "failed to load data" as string;
	} catch (error) {
		return "failed to load data" as string;
	}
}
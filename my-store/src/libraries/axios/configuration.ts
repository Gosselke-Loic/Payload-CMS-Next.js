import { AxiosRequestConfig } from "axios";

// env BASE URL

export const axiosRequestConfiguration: AxiosRequestConfig = {
    baseURL: "http://localhost:3000/api",
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json'
    },
};
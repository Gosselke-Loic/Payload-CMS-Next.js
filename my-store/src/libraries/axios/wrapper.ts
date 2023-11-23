
import { axiosRequestConfiguration } from "./configuration";
import init from "./instance";

const axiosInstance = init(axiosRequestConfiguration);

async function Get<T>(url: string): Promise<T> {
    try {
        console.log("[Wrapper][get]", url);  
        return await axiosInstance.get(url);
    } catch (error: any) {
        console.error("[Wrapper][get]", error);
        throw Error(error);
    }
} 

async function Post <T>(url: string, body: object | string): Promise<T> {
    try {
        console.log("[Wrapper][post]", url, body);
        return await axiosInstance.post(url, body);
    } catch (error: any) {
        console.error("[Wrapper][post]", error);
        throw Error(error);
    }
}

async function Update <T>(url: string, body: object): Promise<T> {
    try {
        console.log("[Wrapper][update]", url, body);
        return await axiosInstance.put(url, body);
    } catch (error: any) {
        console.error("[Wrapper][update]", error);
        throw Error(error);
    }
}

async function Remove <T>(url: string): Promise<T> {
    try {
        console.log("[Wrapper][remove]", url);
        return await axiosInstance.delete(url);
    } catch (error: any) {
        console.error("[Wrapper][remove]", error);
        throw Error(error);
    }
}

export {
    Get,
    Post,
    Update,
    Remove
}
import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

const init = (config: AxiosRequestConfig): AxiosInstance => {
    const axiosInstance = axios.create(config);

    axiosInstance.interceptors.request.use(function (config) {
        /*  if(!!token) {
            config.headers = { "Authorization": `Bearer ${token}` };
            if(!!currentTenant) config.headers = { "X-Tenant": `${currentTenant}` };
        } */
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    return axiosInstance;
}

export default init;
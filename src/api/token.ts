import { axiosInstance } from "./axios";

export const userTokenRefresh = () => {
    return axiosInstance.post("/auth/token/refresh");
};

export const userTokenVerify = () => {
    return axiosInstance.post(`/auth/token/verify`);
};

import { authAxiosInstance, axiosInstance } from "./axios";

export const POST_loginGoogle = (token: string) => {
    const accessData = {
        access_token: token,
    };
    return axiosInstance.post("/auth/google/receiver", accessData);
};

export const POST_newToken = (refresh: string) => {
    const refreshData = {
        refresh_token: refresh,
    };

    return axiosInstance.post("auth/token/refresh", refreshData);
};

export const GET_verifyToken = () => {
    return authAxiosInstance.get(`/auth/token/status`);
};

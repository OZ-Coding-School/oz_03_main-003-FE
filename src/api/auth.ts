import { axiosInstance } from "./axios";

export const userLoginGoogle = (token: string) => {
    const accessData = {
        access_token: token,
    };
    return axiosInstance.post("/auth/google/receiver", accessData);
};

export const userLogoutGoogle = () => {
    return axiosInstance.post("/auth/logout");
};

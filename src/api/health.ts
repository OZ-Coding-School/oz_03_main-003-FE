import { axiosInstance } from "./axios";

export const healthCheck = async () => {
    return await axiosInstance.get("/health");
};

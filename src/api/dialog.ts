import { axiosInstance } from "./axios";

export const sendUserMessage = (uuid: string, message: string) => {
    return axiosInstance.post(`/dialog/message/user/${uuid}`, { message });
};

export const getUserMessage = (uuid: string) => {
    return axiosInstance.get(`/dialog/message/user/${uuid}`);
};

import { axiosInstance } from "./axios";

export const sendUserMessage = (uuid: string) => {
    return axiosInstance.post(`/dialog/message/user/${uuid}`);
};

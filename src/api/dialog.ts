import { axiosInstance } from "./axios";

export const sendUserMessage = (uuid: string, message: string) => {
    return axiosInstance.post(`/dialog/message/user/${uuid}`, { message });
};

export const getUserMessage = (uuid: string) => {
    return axiosInstance.get(`/dialog/message/user/${uuid}`);
};

export const postAIResponseMessage = (chatRoomUuid: string, messageUuid: string) => {
    return axiosInstance.post(`/dialog/message/ai/${chatRoomUuid}`, {
        message_uuid: messageUuid,
    });
};

import { axiosInstance } from "./axios";
export const sendUserMessage = (uuid: string, message: string) => {
    return axiosInstance.post(`/dialog/message/user/${uuid}`, { message });
};

export const getUserMessage = (uuid: string) => {
    return axiosInstance.get(`/dialog/message/user/${uuid}`);
};
export const getAiMessage = (uuid: string) => {
    return axiosInstance.get(`/dialog/message/ai/${uuid}`);
};

export const postAIMessage = (chatRoomUuid: string, messageUuid: string) => {
    return axiosInstance.post(
        `/dialog/message/ai/${chatRoomUuid}`,
        {
            message_uuid: messageUuid,
        },
        {
            validateStatus: () => true,
        }
    );
};

export const getDialogList = (chatRoomUuid: string) => {
    return axiosInstance.get(`dialog/${chatRoomUuid}`);
};

export const getAIDialogAppliedStatus = (messageUuid: string) => {
    return axiosInstance.get(`dialog/ai/${messageUuid}`);
};

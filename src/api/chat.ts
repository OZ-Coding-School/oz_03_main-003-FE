import { axiosInstance } from "./axios";

export const createChatRoom = (data: {
    user_uuid: string;
    chat_room_name: string;
    analyze_target_name: string;
    analyze_target_relation: string;
}) => {
    return axiosInstance.post("/chat/create", data);
};

export const getChatRooms = () => {
    return axiosInstance.get("/chat/rooms");
};

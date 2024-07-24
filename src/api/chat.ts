import { axiosInstance } from "./axios";

export const getChatRooms = () => {
    return axiosInstance.get("/chat");
};

export const CreateChatRoom = (params: {
    chat_room_name: string;
    analyze_target_name: string;
    analyze_target_relation: string;
}) => {
    return axiosInstance.post("/chat/new", params);
};

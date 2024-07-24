import { axiosInstance } from "./axios";

export const getTreeDataAll = async () => {
    const response = await axiosInstance.get("/trees");
    return response.data;
};

export const getChatRooms = async () => {
    const response = await axiosInstance.get("/chat");
    console.log("getChatRooms response:", response);
};

export const CreateChatRoom = async (params: {
    chat_room_name: string;
    analyze_target_name: string;
    analyze_target_relation: string;
    tree_uuid: string;
}) => {
    const response = await axiosInstance.post("/chat/new", params);
    console.log("CreateChatRoom response:", response);
    return response.data;
};

import { axiosInstance } from "./axios";

export const getTreeDataAll = async () => {
    try {
        const response = await axiosInstance.get("/trees/");
        return response.data;
    } catch (error) {
        console.error("Failed to fetch tree data:", error);
        throw error;
    }
};

export const getChatRooms = async () => {
    const response = await axiosInstance.get("/chat/");
    console.log("getChatRooms response:", response.data);
    const data = response.data.json();
    return data;
};
export const CreateChatRoom = async (params: { chat_room_name: string; tree_uuid: string }) => {
    const response = await axiosInstance.post("/chat/new", params);
    console.log("CreateChatRoom response:", response);
    return response.data;
};

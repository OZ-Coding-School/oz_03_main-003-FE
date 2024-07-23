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
    try {
        const response = await axiosInstance.get("/chat");
        console.log("getChatRooms response:", response);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch chat rooms:", error);
        throw error;
    }
};

export const CreateChatRoom = async (params: {
    chat_room_name: string;
    analyze_target_name: string;
    analyze_target_relation: string;
}) => {
    try {
        const response = await axiosInstance.post("/chat", params);
        console.log("CreateChatRoom response:", response);
        return response.data;
    } catch (error) {
        console.error("Failed to create chat room:", error);
        throw error;
    }
};

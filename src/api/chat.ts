import { axiosInstance } from "./axios";
import { CreateChatRoomRequest, CreateChatRoomResponse, ChatRoom } from "../config/types";

export const createChatRoom = async (data: CreateChatRoomRequest) => {
    try {
        const response = await axiosInstance.post<CreateChatRoomResponse>("/chat/new", data);
        return response.data;
    } catch (error) {
        console.error("Error creating chat room:", error);
        throw error;
    }
};

export const getChatRoomList = async (): Promise<ChatRoom[]> => {
    const response = await axiosInstance.get<ChatRoom[]>("/chat");
    return response.data;
};

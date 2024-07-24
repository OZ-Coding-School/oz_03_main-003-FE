import { axiosInstance } from "./axios";
import { CreateChatRoomRequest, CreateChatRoomResponse } from "../config/types";

export const createChatRoom = async (data: CreateChatRoomRequest) => {
    try {
        const response = await axiosInstance.post<CreateChatRoomResponse>("/chat/new", data);
        return response.data;
    } catch (error) {
        console.error("Error creating chat room:", error);
        throw error;
    }
};

import { axiosInstance } from "./axios";
import { CreateChatRoomRequest, CreateChatRoomResponse, ChatRoom } from "../config/types";

export const createChatRoom = async (
    data: CreateChatRoomRequest
): Promise<CreateChatRoomResponse> => {
    const response = await axiosInstance.post<CreateChatRoomResponse>("/chat/new", data);
    return response.data;
};
export const getChatRoomList = async (): Promise<ChatRoom[]> => {
    const response = await axiosInstance.get<ChatRoom[]>("/chat");
    return response.data;
};

export const deleteChatRoom = async (id: string) => {
    await axiosInstance.delete(`/chat/${id}`);
};

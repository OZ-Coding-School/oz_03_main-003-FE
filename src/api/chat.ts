import { axiosInstance } from "./axios";
import { CreateChatRoomRequest, CreateChatRoomResponse, ChatRoom } from "../config/types";

export const createChatRoom = (data: CreateChatRoomRequest) => {
    return axiosInstance.post<CreateChatRoomResponse>("/chat/new", data);
};

export const getChatRoomList = () => {
    return axiosInstance.get<ChatRoom[]>("/chat");
};

export const deleteChatRoom = (id: string) => {
    return axiosInstance.delete(`/chat/${id}`);
};

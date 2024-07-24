import { ChatRoom } from "../config/store";
import { axiosInstance } from "./axios";

export const getChatRooms = () => {
    return axiosInstance.get("/chat");
};

export const CreateChatRoom = async (params: {
    chat_room_name: string;
    analyze_target_name: string;
    analyze_target_relation: string;
}) => {
    try {
        console.log("Sending request to create chat room with params:", params);
        const response = await axiosInstance.post<ChatRoom>("/chat/new", params);
        console.log("Response from creating chat room:", response);
        return response;
    } catch (error) {
        console.error("Error in CreateChatRoom function:", error);
        throw error; // re-throw the error to be handled in the calling function
    }
};

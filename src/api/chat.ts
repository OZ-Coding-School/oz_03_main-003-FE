import { axiosInstance } from "./axios";

export const getChatRooms = async () => {
    const response = await axiosInstance.get("/chat");
    console.log("getChatRooms response:", response);
    return response.data;
};

export const CreateChatRoom = async (params: { chat_room_name: string; tree_uuid: string }) => {
    const response = await axiosInstance.post("/chat/new", params);
    console.log("CreateChatRoom response:", response);
    return response.data;
};

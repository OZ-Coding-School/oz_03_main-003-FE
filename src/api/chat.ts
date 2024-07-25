import { axiosInstance } from "./axios";
import {
    CreateChatRoomRequest,
    CreateChatRoomResponse,
    ChatRoom,
    UserTreeDetail,
} from "../config/types";
import { fetchTreeDataAll } from "./tree";

/**
 *
 * @description 채팅방 CRUD관련 api호출 함수
 * @returns createChatRoom 채팅방을 생성하고 생성된 채팅방의 데이터 반환
 * @returns getChatRoomList 모든 채팅방의 목록과 나무 데이터를 동시에 서버에서 가져와서 채팅방 목록에 나무 이름 매핑
 * @returns deleteChatRoom 특정 채팅방을 서버에서 삭제
 */
export const createChatRoom = async (data: CreateChatRoomRequest): Promise<ChatRoom> => {
    try {
        const response = await axiosInstance.post<CreateChatRoomResponse>("/chat/new", data);
        return {
            chat_room_uuid: response.data.chat_room_uuid,
            chat_room_name: data.chat_room_name,
            tree_uuid: data.tree_uuid,
        };
    } catch (error) {
        console.error("Error creating chat room:", error);
        throw error;
    }
};

export const getChatRoomList = async (): Promise<ChatRoom[]> => {
    try {
        const [chatRoomsResponse, trees] = await Promise.all([
            axiosInstance.get<ChatRoom[]>("/chat"),
            fetchTreeDataAll(),
        ]);

        return chatRoomsResponse.data.map((chatRoom) => {
            const tree = trees.find((t: UserTreeDetail) => t.tree_uuid === chatRoom.tree_uuid);
            return {
                ...chatRoom,
                tree_name: tree ? tree.tree_name : "No tree name",
            };
        });
    } catch (error) {
        console.error("Error fetching chat rooms:", error);
        throw error;
    }
};

export const deleteChatRoom = async (id: string) => {
    try {
        await axiosInstance.delete(`/chat/${id}`);
    } catch (error) {
        console.error("Error deleting chat room:", error);
        throw error;
    }
};

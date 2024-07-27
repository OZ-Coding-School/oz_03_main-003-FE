import { useCallback } from "react";
import { patchChatRoom } from "../api/chat";
import { UpdateChatRoom, ChatRoom } from "../config/types";
import { useUserChatStore } from "../config/store";

const useUpdateChatRoom = () => {
    const { chatRooms, setChatRooms } = useUserChatStore((state) => ({
        chatRooms: state.chatRooms,
        setChatRooms: state.setChatRooms,
    }));

    const updateChatRoom = useCallback(
        async (id: string, data: UpdateChatRoom) => {
            try {
                await patchChatRoom(id, data);
                const updatedRooms = chatRooms.map((room: ChatRoom) =>
                    room.chat_room_uuid === id ? { ...room, ...data } : room
                );
                setChatRooms(updatedRooms);
            } catch (error) {
                console.log("Failed to update chat room", error);
            }
        },
        [chatRooms, setChatRooms]
    );

    return { updateChatRoom };
};

export default useUpdateChatRoom;

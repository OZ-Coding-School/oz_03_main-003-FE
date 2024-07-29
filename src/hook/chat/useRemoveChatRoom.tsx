import { useCallback } from "react";
import { useUserChatStore } from "../../config/store";
import { deleteChatRoom } from "../../api/chat";

const useRemoveChatRoom = () => {
    const { setChatRooms, chatRooms } = useUserChatStore((state) => ({
        setChatRooms: state.setChatRooms,
        chatRooms: state.chatRooms,
    }));

    const removeChatRoom = useCallback(
        async (chat_room_uuid: string) => {
            try {
                await deleteChatRoom(chat_room_uuid);
                const updatedRooms = chatRooms.filter(
                    (room) => room.chat_room_uuid !== chat_room_uuid
                );
                setChatRooms(updatedRooms);
            } catch (error) {
                console.error("Failed to delete chat room", error);
            }
        },
        [setChatRooms, chatRooms]
    );

    return { removeChatRoom };
};

export default useRemoveChatRoom;

import { useCallback } from "react";
import { useUserChatStore } from "../config/store";
import { deleteChatRoom } from "../api/chat";

const useRemoveChatRoom = () => {
    const { setChatRooms } = useUserChatStore((state) => ({
        setChatRooms: state.setChatRooms,
    }));

    const removeChatRoom = useCallback(
        async (chat_room_uuid: string) => {
            try {
                await deleteChatRoom(chat_room_uuid);
                setChatRooms((prevRooms) =>
                    prevRooms.filter((room) => room.chat_room_uuid !== chat_room_uuid)
                );
            } catch (error) {
                console.log("Failed to delete chat room", error);
            }
        },
        [setChatRooms]
    );

    return { removeChatRoom };
};

export default useRemoveChatRoom;

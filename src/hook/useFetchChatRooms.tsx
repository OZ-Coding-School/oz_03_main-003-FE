import { useCallback } from "react";
import { useUserStore } from "../config/store";
import { getChatRoomList } from "../api/chat";
import { ChatRoom } from "../config/types";

const useFetchChatRooms = () => {
    const { setChatRooms } = useUserStore((state) => ({
        setChatRooms: state.setChatRooms,
    }));

    const fetchChatRooms = useCallback(async () => {
        try {
            const rooms: ChatRoom[] = await getChatRoomList();
            setChatRooms(rooms);
        } catch (error) {
            console.log("Failed to fetch chat rooms", error);
        }
    }, [setChatRooms]);

    return { fetchChatRooms };
};

export default useFetchChatRooms;
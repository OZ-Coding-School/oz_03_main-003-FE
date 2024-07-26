import { useState, useEffect, useCallback } from "react";
import { getUserMessage } from "../api/dialog";
import { useUserChatStore } from "../config/store";

const useFetchMessages = () => {
    const [currentChatRoomUuid, setCurrentChatRoomUuid] = useState<string | null>(null);
    const { setUserMessages } = useUserChatStore((state) => ({
        setUserMessages: state.setUserMessages,
    }));

    const fetchMessages = useCallback(
        async (chatRoomUuid: string) => {
            if (!chatRoomUuid) return;

            try {
                const response = await getUserMessage(chatRoomUuid);
                setUserMessages(chatRoomUuid, response.data);
            } catch (error) {
                console.error("Failed to fetch messages", error);
            }
        },
        [setUserMessages]
    );

    useEffect(() => {
        if (currentChatRoomUuid) {
            fetchMessages(currentChatRoomUuid);
        }
    }, [currentChatRoomUuid, fetchMessages]);

    const initializeFetch = useCallback((chatRoomUuid: string) => {
        setCurrentChatRoomUuid(chatRoomUuid);
    }, []);

    return { fetchMessages: initializeFetch };
};

export default useFetchMessages;

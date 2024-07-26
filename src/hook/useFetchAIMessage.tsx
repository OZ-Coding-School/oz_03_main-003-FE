import { useState, useEffect, useCallback } from "react";
import { postAIResponseMessage } from "../api/dialog";
import { useUserChatStore } from "../config/store";

const useFetchAIMessage = () => {
    const [currentChatRoomUuid, setCurrentChatRoomUuid] = useState<string | null>(null);
    const { setAIResponse } = useUserChatStore((state) => ({
        setAIResponse: state.setAIResponse,
    }));

    const fetchAIMessage = useCallback(
        async (chatRoomUuid: string, messageUuid: string) => {
            if (!chatRoomUuid || !messageUuid) return;

            try {
                const response = await postAIResponseMessage(chatRoomUuid, messageUuid);
                setAIResponse(chatRoomUuid, response.data);
            } catch (error) {
                console.error("Failed to fetch AI message", error);
            }
        },
        [setAIResponse]
    );

    useEffect(() => {
        if (currentChatRoomUuid) {
            // Note: You need to provide a messageUuid here. You might want to store the last message UUID in the store or pass it as a parameter.
            // fetchAIMessage(currentChatRoomUuid, lastMessageUuid);
        }
    }, [currentChatRoomUuid, fetchAIMessage]);

    const initializeFetch = useCallback(
        (chatRoomUuid: string, messageUuid: string) => {
            setCurrentChatRoomUuid(chatRoomUuid);
            fetchAIMessage(chatRoomUuid, messageUuid);
        },
        [fetchAIMessage]
    );

    return { fetchAIMessage: initializeFetch };
};

export default useFetchAIMessage;

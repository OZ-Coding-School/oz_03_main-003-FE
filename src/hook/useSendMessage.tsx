// src/hook/useSendMessage.ts
import { useCallback } from "react";
import { sendUserMessage, getUserMessage } from "../api/dialog";
import { useUserChatStore } from "../config/store";

const useSendMessage = () => {
    const { setUserMessages } = useUserChatStore((state) => ({
        setUserMessages: state.setUserMessages,
    }));

    const sendMessage = useCallback(
        async (chatRoomUuid: string, message: string) => {
            try {
                await sendUserMessage(chatRoomUuid, message);
                const response = await getUserMessage(chatRoomUuid);
                setUserMessages(chatRoomUuid, response.data);
            } catch (error) {
                console.error("Failed to send message", error);
            }
        },
        [setUserMessages]
    );

    return { sendMessage };
};

export default useSendMessage;

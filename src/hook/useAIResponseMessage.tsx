import { useCallback } from "react";
import { postAIResponseMessage } from "../api/dialog";
import { useUserChatStore } from "../config/store";

const useAIResponseMessage = () => {
    const { setAIResponse } = useUserChatStore((state) => ({
        setAIResponse: state.setAIResponse,
    }));

    const sendAIResponseMessage = useCallback(
        async (chatRoomUuid: string, messageUuid: string) => {
            try {
                const response = await postAIResponseMessage(chatRoomUuid, messageUuid);
                setAIResponse(chatRoomUuid, response.data);
            } catch (error) {
                console.error("Failed to send AI response message", error);
            }
        },
        [setAIResponse]
    );

    return { sendAIResponseMessage };
};

export default useAIResponseMessage;

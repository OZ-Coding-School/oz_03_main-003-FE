import { useCallback } from "react";
import { useDialogStore } from "../config/store";
import useSendMessage from "./useSendMessage";
import useFetchAIMessage from "./useFetchAIMessage";

const useUpdateDialog = () => {
    const { sendMessage } = useSendMessage();
    const { fetchAIMessage, isAILoading } = useFetchAIMessage();
    const { dialogList } = useDialogStore();

    const updateDialog = useCallback(
        async (chatRoomUuid: string, message: string) => {
            try {
                console.log("Sending user message:", message);
                const messageUuid = await sendMessage(chatRoomUuid, message);
                if (messageUuid) {
                    console.log("useUpdateDialog, User message sent, messageUuid:", messageUuid);
                    const aiMessage = await fetchAIMessage(chatRoomUuid, messageUuid);
                    console.log("AI message received:", aiMessage);

                    const updatedDialog = dialogList[chatRoomUuid];
                    console.log("useUpdateDialog, Updated dialog:", updatedDialog);
                }
            } catch (error) {
                console.error("Failed to update dialog", error);
            }
        },
        [sendMessage, fetchAIMessage, dialogList]
    );

    return { updateDialog, isAILoading };
};

export default useUpdateDialog;

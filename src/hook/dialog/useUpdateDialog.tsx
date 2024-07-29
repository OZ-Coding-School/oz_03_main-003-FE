import { useCallback } from "react";
import { useDialogStore } from "../../config/store";
import useSendMessage from "../message/useSendMessage";
import useFetchAIMessage from "../message/useFetchAIMessage";

const useUpdateDialog = () => {
    const { sendMessage } = useSendMessage();
    const { fetchAIMessage, isAILoading } = useFetchAIMessage();
    const { dialogList } = useDialogStore();

    const updateDialog = useCallback(
        async (chatRoomUuid: string, message: string) => {
            try {
                const messageUuid = await sendMessage(chatRoomUuid, message);
                if (messageUuid) {
                    await fetchAIMessage(chatRoomUuid, messageUuid);
                    dialogList[chatRoomUuid];
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

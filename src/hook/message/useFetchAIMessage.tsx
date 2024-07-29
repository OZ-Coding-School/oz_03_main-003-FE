import { useState, useCallback } from "react";
import { AIMessage, DialogItem } from "../../config/types";
import { dialogApi } from "../../api";
import { useDialogStore } from "../../config/store";
import useVerify from "../useVerify";

const useFetchAIMessage = () => {
    const { setAIMessage, updateDialogItem } = useDialogStore((state) => ({
        setAIMessage: state.setAIMessage,
        updateDialogItem: state.updateDialogItem,
    }));
    const { checkLoginStatus } = useVerify();

    const [isAILoading, setIsAILoading] = useState(false);

    const fetchAIMessage = useCallback(
        async (chatRoomUuid: string, messageUuid: string) => {
            if (!chatRoomUuid || !messageUuid) return;

            setIsAILoading(true);

            try {
                checkLoginStatus();
                const response = await dialogApi.postAIMessage(chatRoomUuid, messageUuid);
                const responseDate = response.headers["date"];

                const aiMessage: AIMessage = {
                    message_uuid: response.data.message_uuid,
                    message: response.data.message,
                    sentiments: response.data.sentiments,

                    date: responseDate,
                };
                setAIMessage(chatRoomUuid, aiMessage);

                const dialogs = useDialogStore.getState().dialogList[chatRoomUuid] || [];
                const existingDialogItemIndex = dialogs.findIndex(
                    (item) => item.userMessage.message_uuid === messageUuid
                );

                if (existingDialogItemIndex !== -1) {
                    const updatedDialogItem: DialogItem = {
                        ...dialogs[existingDialogItemIndex],
                        aiMessage: aiMessage,
                        applied_state: response.data.applied_state,
                    };
                    updateDialogItem(chatRoomUuid, existingDialogItemIndex, updatedDialogItem);
                }

                return aiMessage;
            } catch (error) {
                console.error("Failed to fetch AI message", error);
            } finally {
                setIsAILoading(false);
            }
        },
        [setAIMessage, updateDialogItem, checkLoginStatus]
    );

    return { fetchAIMessage, isAILoading };
};

export default useFetchAIMessage;

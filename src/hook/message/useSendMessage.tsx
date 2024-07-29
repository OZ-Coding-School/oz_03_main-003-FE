import { useCallback } from "react";
import { UserMessage, DialogItem } from "../../config/types";
import { dialogApi } from "../../api";
import { useDialogStore } from "../../config/store";
import useVerify from "../useVerify";

const useSendMessage = () => {
    const { setUserMessage, addDialogItem } = useDialogStore((state) => ({
        setUserMessage: state.setUserMessage,
        addDialogItem: state.addDialogItem,
    }));

    const { checkLoginStatus } = useVerify();

    const sendMessage = useCallback(
        async (chatRoomUuid: string, message: string) => {
            try {
                await checkLoginStatus();
                const response = await dialogApi.sendUserMessage(chatRoomUuid, message);
                const newMessage: UserMessage = {
                    message_uuid: response.data.message_uuid,
                    message: message,
                };

                setUserMessage(chatRoomUuid, newMessage);

                const newDialogItem: DialogItem = {
                    userMessage: newMessage,
                };
                addDialogItem(chatRoomUuid, newDialogItem);

                return newMessage.message_uuid;
            } catch (error) {
                console.error("Failed to send message", error);
            }
        },
        [setUserMessage, addDialogItem, checkLoginStatus]
    );

    return { sendMessage };
};

export default useSendMessage;

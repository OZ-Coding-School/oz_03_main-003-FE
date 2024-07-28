import { useCallback } from "react";
import { useDialogStore } from "../config/store";
import { UserMessage, DialogItem } from "../config/types";
import { dialogApi } from "../api";
const useSendMessage = () => {
    const { setUserMessage, addDialogItem } = useDialogStore((state) => ({
        setUserMessage: state.setUserMessage,
        addDialogItem: state.addDialogItem,
    }));

    const sendMessage = useCallback(
        async (chatRoomUuid: string, message: string) => {
            try {
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
                console.log("사용자 메시지 추가 완료:", newMessage);
                return newMessage.message_uuid;
            } catch (error) {
                console.error("Failed to send message", error);
            }
        },
        [setUserMessage, addDialogItem]
    );

    return { sendMessage };
};

export default useSendMessage;

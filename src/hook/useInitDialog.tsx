import { ResponseDialogList } from "../config/types";
import { useDialogStore } from "../config/store";
import { dialogApi } from "../api";
import { useCallback } from "react";

const useInitDialog = () => {
    const { chatroom_uuid, initUserMessages, initAiMessages } = useDialogStore();

    const initDialogList = useCallback(async () => {
        const responseList = await dialogApi.getDialogList(chatroom_uuid);
        const userData = responseList.data.map((response: ResponseDialogList) => {
            return {
                message_uuid: response.user.message_uuid,
                message: response.user.message,
            };
        });
        initUserMessages(userData);
        const aiData = responseList.data.map((response: ResponseDialogList) => {
            return {
                message_uuid: response.ai.message_uuid,
                message: response.ai.message,
                sentiments: response.ai.sentiments,
                applied_state: response.applied_state,
            };
        });
        initAiMessages(aiData);
    }, [chatroom_uuid, initAiMessages, initUserMessages]);

    return {
        initDialogList,
    };
};

export default useInitDialog;

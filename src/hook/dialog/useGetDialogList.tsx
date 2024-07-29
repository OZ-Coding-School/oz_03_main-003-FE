import { useCallback, useState } from "react";
import { useDialogStore } from "../../config/store";
import { DialogItem, DialogList } from "../../config/types";
import { dialogApi } from "../../api";
import useVerify from "../useVerify";

const useGetDialogList = (chatRoomUuid: string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { dialogList, addDialogItem } = useDialogStore();
    const { checkLoginStatus } = useVerify();

    const fetchDialogList = useCallback(async () => {
        if (dialogList[chatRoomUuid]) {
            setIsLoading(false);
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            await checkLoginStatus();
            const response = await dialogApi.getDialogList(chatRoomUuid);
            const fetchedDialogList: DialogItem[] = response.data.map((item: DialogList) => ({
                userMessage: item.user,
                aiMessage: item.ai,
                applied_state: item.applied_state,
            }));

            fetchedDialogList.forEach((dialogItem) => {
                addDialogItem(chatRoomUuid, dialogItem);
            });

            setIsLoading(false);
        } catch (err) {
            console.error("fetchDialogList Failed", err);
        } finally {
            setIsLoading(false);
        }
    }, [addDialogItem, chatRoomUuid, dialogList, checkLoginStatus]);

    const currentDialogList = dialogList[chatRoomUuid] || [];

    return { dialogList: currentDialogList, isLoading, error, fetchDialogList };
};

export default useGetDialogList;

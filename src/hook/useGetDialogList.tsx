import { useState, useEffect } from "react";
import { useDialogStore } from "../config/store";
import { DialogItem, DialogList } from "../config/types";
import { dialogApi } from "../api";

const useGetDialogList = (chatRoomUuid: string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { dialogList, addDialogItem } = useDialogStore();

    useEffect(() => {
        const fetchDialogList = async () => {
            if (dialogList[chatRoomUuid]) {
                setIsLoading(false);
                return;
            }

            setIsLoading(true);
            setError(null);
            try {
                const response = await dialogApi.getDialogList(chatRoomUuid);
                const fetchedDialogList: DialogItem[] = (response.data as DialogList[]).map(
                    (item) => ({
                        userMessage: item.user,
                        aiMessage: item.ai,
                    })
                );

                fetchedDialogList.forEach((dialogItem) => {
                    addDialogItem(chatRoomUuid, dialogItem);
                });

                setIsLoading(false);
            } catch (err) {
                // ... (error handling)
            } finally {
                setIsLoading(false);
            }
        };

        fetchDialogList();
    }, [chatRoomUuid, addDialogItem, dialogList]);

    const currentDialogList = dialogList[chatRoomUuid] || [];

    return { dialogList: currentDialogList, isLoading, error };
};

export default useGetDialogList;

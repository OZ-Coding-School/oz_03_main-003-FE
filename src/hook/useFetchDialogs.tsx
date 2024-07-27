import { useEffect } from "react";
import { useDialogStore } from "../config/store";
import { getDialogList } from "../api/dialog";
import { AxiosError } from "axios";

const useFetchDialogs = (chatRoomUuid: string) => {
    const { dialogs, setDialogs } = useDialogStore();

    useEffect(() => {
        const fetchDialogs = async () => {
            try {
                const response = await getDialogList(chatRoomUuid);
                setDialogs(chatRoomUuid, response.data);
            } catch (error) {
                if (error instanceof AxiosError) {
                    if (error.response && error.response.status === 404) {
                        console.error("Chat room not found or no messages in chat room:", error);
                        setDialogs(chatRoomUuid, []); // 기본적으로 빈 배열로 설정
                    } else {
                        console.error("Failed to fetch dialogs:", error);
                    }
                } else {
                    console.error("An unexpected error occurred:", error);
                }
            }
        };

        if (chatRoomUuid) {
            fetchDialogs();
        }
    }, [chatRoomUuid, setDialogs]);

    return { dialogs: dialogs[chatRoomUuid] || [] };
};

export default useFetchDialogs;

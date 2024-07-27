import { useDialogStore } from "../config/store";

export const useDialogRoom = (chatRoomUuid: string) => {
    const { dialogs } = useDialogStore((state) => ({
        dialogs: state.dialogs[chatRoomUuid] || [],
    }));

    return { dialogs };
};

import { useCallback } from "react";
import { useUserStore } from "../config/store";
import { createChatRoom } from "../api/chat";
import { ChatRoom, UserTreeDetail } from "../config/types";
import { fetchTreeDataAll } from "../api/tree";

const useAddChatRoom = () => {
    const { setChatRooms } = useUserStore((state) => ({
        setChatRooms: state.setChatRooms,
    }));

    const addChatRoom = useCallback(
        async (chat_room_name: string, tree_uuid: string) => {
            try {
                const newRoom: ChatRoom = await createChatRoom({ chat_room_name, tree_uuid });

                const trees: UserTreeDetail[] = await fetchTreeDataAll();
                const tree = trees.find((t) => t.tree_uuid === tree_uuid);

                setChatRooms((prevRooms) => [
                    ...prevRooms,
                    { ...newRoom, tree_name: tree ? tree.tree_name : "No tree name" },
                ]);
            } catch (error) {
                console.log("Failed to create chat room", error);
            }
        },
        [setChatRooms]
    );

    return { addChatRoom };
};

export default useAddChatRoom;

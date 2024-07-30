import { useCallback } from "react";
import { useUserStore, useUserChatStore } from "../../config/store";
import { createChatRoom } from "../../api/chat";
import { ChatRoom, CreateChatRoomResponse } from "../../config/types";

const useAddChatRoom = () => {
    const { setChatRooms } = useUserChatStore((state) => ({
        setChatRooms: state.setChatRooms,
    }));
    const { userData } = useUserStore();

    const addChatRoom = useCallback(
        async (chat_room_name: string, tree_uuid: string) => {
            try {
                const response = await createChatRoom({ chat_room_name, tree_uuid });
                const { chat_room_uuid }: CreateChatRoomResponse = response.data;
                const newRoom: ChatRoom = {
                    chat_room_uuid,
                    chat_room_name,
                    tree_uuid,
                };
                const trees = userData.treeDetail;
                const tree = trees.find((t) => t.tree_uuid === tree_uuid);
                const newChatRooms = [
                    { ...newRoom, tree_name: tree ? tree.tree_name : "No tree name" },
                ];
                setChatRooms(newChatRooms);
            } catch (error) {
                console.log("Failed to create chat room", error);
            }
        },
        [setChatRooms, userData.treeDetail]
    );

    return { addChatRoom };
};

export default useAddChatRoom;

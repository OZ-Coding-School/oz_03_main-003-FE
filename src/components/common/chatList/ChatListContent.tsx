import React from "react";
import ChatListItem from "./ChatListItem";
import { useUserStore } from "../../../config/store";

const ChatListContent: React.FC = () => {
    const chatRooms = useUserStore((state) => state.chatRooms);

    return (
        <div className="select-none overflow-y-auto w-fit flex flex-col">
            {chatRooms.map((item) => (
                <ChatListItem
                    key={item.chat_room_uuid}
                    item={{
                        chat_room_uuid: item.chat_room_uuid,
                        chat_room_name: item.chat_room_name,
                        tree_name: item.tree_name,
                        created_at: item.created_at,
                    }}
                />
            ))}
        </div>
    );
};

export default ChatListContent;

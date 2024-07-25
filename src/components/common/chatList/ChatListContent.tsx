import ChatListItem from "./ChatListItem";
import { useUserChatStore } from "../../../config/store";

const ChatListContent = () => {
    const { chatRooms } = useUserChatStore();

    return (
        <div className="select-none overflow-y-auto w-fit flex flex-col">
            {chatRooms.map((item) => (
                <ChatListItem
                    key={item.chat_room_uuid}
                    item={{
                        chat_room_uuid: item.chat_room_uuid,
                        chat_room_name: item.chat_room_name,
                    }}
                />
            ))}
        </div>
    );
};

export default ChatListContent;

import ChatListItem from "./ChatListItem";
import { useUserChatStore } from "../../../config/store";

interface ChatListContentProps {
    onChatItemClick: (chat_room_uuid: string) => void;
    onClose: () => void;
}

const ChatListContent = ({ onClose, onChatItemClick }: ChatListContentProps) => {
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
                    onClick={onChatItemClick}
                    onClose={onClose}
                />
            ))}
        </div>
    );
};

export default ChatListContent;

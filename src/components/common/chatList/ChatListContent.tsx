import ChatListItem from "./ChatListItem";
import { useUserChatStore } from "../../../config/store";
import dayjs from "dayjs";

interface ChatListContentProps {
    onChatItemClick: (chat_room_uuid: string) => void;
    onClose: () => void;
}

const ChatListContent = ({ onClose, onChatItemClick }: ChatListContentProps) => {
    const { chatRooms } = useUserChatStore();

    const sortedChatRooms = chatRooms.sort((a, b) => {
        const dateA = dayjs(a.updated_at).valueOf();
        const dateB = dayjs(b.updated_at).valueOf();
        return dateB - dateA;
    });

    return (
        <div className="select-none overflow-y-auto w-full flex flex-col">
            {sortedChatRooms.map((item) => (
                <ChatListItem
                    key={item.chat_room_uuid}
                    item={{
                        chat_room_uuid: item.chat_room_uuid,
                        chat_room_name: item.chat_room_name,
                        created_at: item.created_at as string,
                        updated_at: item.updated_at as string,
                    }}
                    onClick={onChatItemClick}
                    onClose={onClose}
                />
            ))}
        </div>
    );
};

export default ChatListContent;

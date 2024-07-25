import { useEffect } from "react";
import { useChatStore, ChatRoom } from "../../../config/store";
import { getChatRooms } from "../../../api/chat";
import ChatListItem from "../../../components/common/chatList/ChatListItem";

const ChatListContent = () => {
    const { chatList, setChatList } = useChatStore();

    useEffect(() => {
        const fetchChatRooms = async () => {
            try {
                const chatRooms = await getChatRooms();
                if (Array.isArray(chatRooms)) {
                    setChatList(chatRooms);
                }
            } catch (error) {
                console.error("Failed to fetch chat rooms:", error);
            }
        };

        fetchChatRooms();
    }, [setChatList]);

    return (
        <div className="select-none overflow-y-auto w-fit flex flex-col">
            {Array.isArray(chatList) &&
                chatList.map((item) => <ChatListItem key={item.chat_room_uuid} item={item} />)}
        </div>
    );
};

export default ChatListContent;

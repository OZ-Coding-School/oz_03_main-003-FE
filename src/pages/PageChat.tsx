import { useEffect, useState, FC } from "react";
import ChatListHeader from "../components/common/chatList/ChatListHeader";
import HeaderLoggedIn from "../components/common/header/HeaderLoggedIn";
import ModalCreateChat from "../components/common/modal/ModalCreateChat";
import useUserInfo from "../hook/useInfo";
import { useChatStore, ChatRoom, useUserStore } from "../config/store";
import ChatListContent from "../components/common/chatList/ChatListContent";
import { getChatRooms } from "../api/chat";

const PageChat: FC = () => {
    const { getUserInfo } = useUserInfo();
    const { setChatList, addChatRoom } = useChatStore();

    useEffect(() => {
        const refreshUserInfo = async () => {
            await getUserInfo();
        };
        refreshUserInfo();
    }, [getUserInfo]);

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

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleAddChatRoom = (newChatRoom: ChatRoom) => {
        addChatRoom(newChatRoom);
    };

    return (
        <>
            <HeaderLoggedIn />
            <div className="bg-black pt-[129px] w-full h-screen box-border">
                <div className="w-full h-full flex">
                    <div className="w-80 h-full border-r border-gray-600 overflow-y-auto">
                        <ChatListHeader onAddChatClick={openModal} />
                        <ChatListContent />
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <ModalCreateChat onClose={closeModal} onAddChatRoom={handleAddChatRoom} />
                </div>
            )}
        </>
    );
};

export default PageChat;

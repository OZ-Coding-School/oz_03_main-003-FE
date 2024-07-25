import { useEffect, useState } from "react";
import ChatListHeader from "../components/common/chatList/ChatListHeader";
import HeaderLoggedIn from "../components/common/header/HeaderLoggedIn";
import ModalCreateChat from "../components/common/modal/ModalCreateChat";
import useUserInfo from "../hook/useInfo";
import useChatRooms from "../hook/useChatRooms";
import ChatListContent from "../components/common/chatList/ChatListContent";

const PageChat = () => {
    const { getUserInfo } = useUserInfo();
    const { fetchChatRooms } = useChatRooms();

    useEffect(() => {
        const refreshUserInfo = async () => {
            await getUserInfo();
        };
        refreshUserInfo();
    }, [getUserInfo]);

    useEffect(() => {
        fetchChatRooms();
    }, [fetchChatRooms]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <HeaderLoggedIn />
            <div className="bg-black pt-[129px] w-full h-screen box-border">
                <div className="w-full h-full flex">
                    <div className="w-80 h-full border-r border-gray-600">
                        <ChatListHeader onAddChatClick={openModal} />
                        <ChatListContent />
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <ModalCreateChat onClose={closeModal} />
                </div>
            )}
        </>
    );
};

export default PageChat;

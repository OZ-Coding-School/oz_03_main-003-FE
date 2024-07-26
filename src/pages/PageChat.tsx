import { useEffect, useState } from "react";
import ChatListHeader from "../components/common/chatList/ChatListHeader";
import HeaderLoggedIn from "../components/common/header/HeaderLoggedIn";
import ModalCreateChat from "../components/common/modal/ModalCreateChat";
import useChatRooms from "../hook/useChatRooms";
import ChatListContent from "../components/common/chatList/ChatListContent";
import { useUserStore } from "../config/store";
import NonData from "../components/NonData";
import useInfo from "../hook/useInfo";
import Dialog from "../components/common/dialog/Dialog";

const PageChat = () => {
    const { fetchChatRooms } = useChatRooms();
    const { userData } = useUserStore();
    const { getUserInfo, getUserGridInfo, getUserLevelInfo } = useInfo();

    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const [selectedChatRoomUuid, setSelectedChatRoomUuid] = useState<string | null>(null);

    const openDialog = (chat_room_uuid: string): void => {
        setSelectedChatRoomUuid(chat_room_uuid);
        setIsDialogOpen(true);
    };

    const closeDialog = (): void => {
        setIsDialogOpen(false);
        setSelectedChatRoomUuid(null);
    };

    useEffect(() => {
        const refreshUserInfo = async () => {
            await getUserInfo();
            await getUserGridInfo();
            await getUserLevelInfo();
        };
        refreshUserInfo();
    }, [getUserInfo, getUserGridInfo, getUserLevelInfo]);

    useEffect(() => {
        fetchChatRooms();
    }, [fetchChatRooms]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
    };

    if (userData.tree.treeCurrent === 0) {
        return (
            <>
                <HeaderLoggedIn />
                <NonData />
            </>
        );
    }

    return (
        <>
            <HeaderLoggedIn />
            <div className="bg-black pt-[129px] w-full h-screen box-border">
                <div className="w-full h-full flex">
                    <div className="w-80 h-full border-r border-gray-600">
                        <ChatListHeader onAddChatClick={openModal} />
                        <ChatListContent onChatItemClick={openDialog} />
                    </div>
                    <div className="text-white w-full h-full">
                        {isDialogOpen && selectedChatRoomUuid && (
                            <Dialog chatRoomUuid={selectedChatRoomUuid} onClose={closeDialog} />
                        )}
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

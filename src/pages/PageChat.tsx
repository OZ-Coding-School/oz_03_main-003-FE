import { useEffect, useState } from "react";
import { contentDummy } from "../components/common/chatList/ChatListDummy";
import ChatListHeader from "../components/common/chatList/ChatListHeader";
import ChatListItem from "../components/common/chatList/ChatListItem";
import HeaderLoggedIn from "../components/common/header/HeaderLoggedIn";
import ModalCreateChat from "../components/common/modal/ModalCreateChat";
import useUserInfo from "../hook/useInfo";

const PageChat = () => {
    const { getUserInfo } = useUserInfo();

    useEffect(() => {
        const refreshUserInfo = async () => {
            await getUserInfo();
        };
        refreshUserInfo();
    }, [getUserInfo]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <HeaderLoggedIn />
            <div className="bg-black pt-[129px] w-full h-screen box-border">
                <div className="w-full h-full flex">
                    <div className="w-80 h-full border-r border-gray-600">
                        <ChatListHeader onAddChatClick={openModal} />
                        {contentDummy.map((item, index) => (
                            <ChatListItem key={index} item={item} />
                        ))}
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

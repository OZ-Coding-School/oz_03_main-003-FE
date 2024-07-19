import { useState } from "react";
import { contentDummy } from "../components/chatList/ChatListDummy";
import ChatListHeader from "../components/chatList/ChatListHeader";
import ChatListItem from "../components/chatList/ChatListItem";
import HeaderLoggedIn from "../components/header/HeaderLoggedIn";
import ModalCreateChat from "../components/modal/ModalCreateChat";

const PageChat = () => {
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

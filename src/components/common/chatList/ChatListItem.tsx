import { useState } from "react";
import { twMerge as tw } from "tailwind-merge";
import { IconChange, IconDeleteBtn } from "../../../config/IconData";
import ModalDeleteChat from "../modal/ModalDeleteChat";
import ModalUpdateChat from "../modal/ModalUpdateChat";
import { useUserChatStore, useUserStore } from "../../../config/store";

interface ChatListItemProps {
    item: {
        chat_room_uuid: string;
        chat_room_name: string;
        created_at?: string;
    };
    onClick: (chat_room_uuid: string) => void;
}

const ChatListItem = ({ item, onClick }: ChatListItemProps) => {
    const [hover, setHover] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const { userData } = useUserStore();
    const { chatRooms } = useUserChatStore();

    const treeUuid = chatRooms.find(
        (data) => data.chat_room_uuid === item.chat_room_uuid
    )?.tree_uuid;
    const treeName = userData.treeDetail.find((t) => t.tree_uuid === treeUuid)?.tree_name;

    const openDeleteModal = () => {
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };

    const openUpdateModal = () => {
        setIsUpdateModalOpen(true);
    };

    const closeUpdateModal = () => {
        setIsUpdateModalOpen(false);
    };

    const handleClick = () => {
        onClick(item.chat_room_uuid);
    };
    return (
        <>
            <div
                className={tw(
                    "text-white px-5 py-3 fill-white",
                    "w-[300px] h-16 flex justify-between items-center",
                    "hover:bg-gray-800 transition cursor-pointer"
                )}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={handleClick}
            >
                <nav className="flex flex-col">
                    <div className="text-sm">
                        {item.chat_room_name} <span className="text-primary">{treeName}</span>
                    </div>
                    <div className="text-gray-400 text-xs">{item.created_at || "No date"}</div>
                </nav>
                {hover && (
                    <nav className="flex gap-1">
                        <div className="w-8 h-8 cursor-pointer rounded-full transition flex hover:bg-gray-600 justify-center items-center">
                            <IconChange onClick={openUpdateModal} className="w-[18px] h-[18px]" />
                        </div>
                        <div className="w-8 h-8 cursor-pointer rounded-full transition flex hover:bg-gray-600 justify-center items-center">
                            <IconDeleteBtn
                                onClick={openDeleteModal}
                                className="w-[18px] h-[18px]"
                            />
                        </div>
                    </nav>
                )}
            </div>
            <ModalDeleteChat
                isOpen={isDeleteModalOpen}
                onClose={closeDeleteModal}
                chat_room_uuid={item.chat_room_uuid}
            />
            <ModalUpdateChat
                isOpen={isUpdateModalOpen}
                onClose={closeUpdateModal}
                chat_room_uuid={item.chat_room_uuid}
            />
        </>
    );
};

export default ChatListItem;

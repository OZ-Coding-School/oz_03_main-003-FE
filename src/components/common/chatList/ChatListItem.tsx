import { useState } from "react";
import { twMerge as tw } from "tailwind-merge";
import { IconChange, IconDeleteBtn } from "../../../config/IconData";
import ModalDeleteChat from "../modal/ModalDeleteChat";
import ModalUpdateChat from "../modal/ModalUpdateChat";

interface ChatListItemProps {
    item: {
        chat_room_uuid: string;
        chat_room_name: string;
        tree_name?: string;
        created_at?: string;
    };
}

const ChatListItem: React.FC<ChatListItemProps> = ({ item }) => {
    const [hover, setHover] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

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
    return (
        <>
            {" "}
            <div
                className={tw(
                    "text-white px-5 py-3 fill-white",
                    "w-[300px] h-16 flex justify-between items-center",
                    "hover:bg-gray-800 transition cursor-pointer"
                )}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <nav className="flex flex-col">
                    <div className="text-sm">
                        {item.chat_room_name} {item.tree_name ? `(${item.tree_name})` : ""}
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

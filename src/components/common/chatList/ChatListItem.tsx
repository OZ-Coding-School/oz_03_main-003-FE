import { useState } from "react";
import { twMerge as tw } from "tailwind-merge";
import { IconChange, IconDeleteBtn } from "../../../config/IconData";
import { useDialogStore, useUserChatStore, useUserStore } from "../../../config/store";
import ModalDeleteChat from "../modal/ModalDeleteChat";
import ModalUpdateChat from "../modal/ModalUpdateChat";
import useSound from "use-sound";
import btnPing from "../../../assets/sound/btn_ping.mp3";
import btnCollapse from "../../../assets/sound/btn_collapse.mp3";
import dayjs from "dayjs";

interface ChatListItemProps {
    item: {
        chat_room_uuid: string;
        chat_room_name: string;
        created_at: string;
        updated_at: string;
    };
    onClick: (chat_room_uuid: string) => void;
    onClose: () => void;
}

const ChatListItem = ({ item, onClick, onClose }: ChatListItemProps) => {
    const [hover, setHover] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const { userData } = useUserStore();
    const { chatRooms } = useUserChatStore();
    const [playPing] = useSound(btnPing, { volume: 0.75 });
    const [playCollapse] = useSound(btnCollapse, { volume: 0.75 });
    const treeUuid = chatRooms.find(
        (data) => data.chat_room_uuid === item.chat_room_uuid
    )?.tree_uuid;
    const treeName = userData.treeDetail.find((t) => t.tree_uuid === treeUuid)?.tree_name;
    const { setTreeData } = useDialogStore();
    const openDeleteModal = () => {
        setIsDeleteModalOpen(true);
        playPing();
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };

    const openUpdateModal = () => {
        setIsUpdateModalOpen(true);
        playCollapse();
    };

    const closeUpdateModal = () => {
        setIsUpdateModalOpen(false);
    };

    const handleClick = () => {
        setTreeData(treeUuid as string, treeName as string);
        onClick(item.chat_room_uuid);
    };

    return (
        <>
            <div
                className={tw(
                    "text-white px-5 py-3 fill-white",
                    "w-full h-16 flex justify-between items-center",
                    "hover:bg-gray-800 transition cursor-pointer"
                )}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={handleClick}
            >
                <nav className="flex flex-col">
                    <div className="flex gap-4">
                        <div className="text-primary text-base">{treeName}</div>
                        <div className="text-sm">{item.chat_room_name}</div>
                    </div>
                    <div className="text-sm text-gray-200">
                        {dayjs(item.updated_at).format("MM-DD hh:mm")}
                    </div>
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
            {isDeleteModalOpen && (
                <ModalDeleteChat
                    onClose={closeDeleteModal}
                    onDialogClose={onClose}
                    chat_room_uuid={item.chat_room_uuid}
                />
            )}
            {isUpdateModalOpen && (
                <ModalUpdateChat onClose={closeUpdateModal} chat_room_uuid={item.chat_room_uuid} />
            )}
        </>
    );
};

export default ChatListItem;

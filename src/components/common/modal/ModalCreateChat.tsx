// src/components/common/modal/ModalCreateChat.tsx
import ButtonDefault from "../button/ButtonDefault";
import { IconClose, IconSelectArrow } from "../../../config/IconData";
import ModalListItem from "./ModalListItem";
import { useState } from "react";
import { twMerge as tw } from "tailwind-merge";
import { useUserStore } from "../../../config/store";
import useChatRooms from "../../../hook/useChatRooms";
import ButtonDisable from "../button/ButtonDisable";
import useVerify from "../../../hook/useVerify";

interface ModalCreateChatProps {
    onClose: () => void;
}

const ModalCreateChat = ({ onClose }: ModalCreateChatProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedTree, setSelectedTree] = useState<{ name: string; uuid: string } | null>(null);
    const [chatRoomName, setChatRoomName] = useState("");
    const { treeDetail } = useUserStore((state) => state.userData);
    const { fetchChatRooms, addChatRoom } = useChatRooms();
    const { checkLoginStatus } = useVerify();
    const [requireRoomName, setRequireRoomName] = useState(false);
    const [requireSelectTree, setRequireSelectTree] = useState(false);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const handleItemClick = (tree: { name: string; uuid: string }) => {
        setSelectedTree(tree);
        setIsDropdownOpen(false);
        setRequireSelectTree(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setChatRoomName(value);
        if (value.trim() !== "") {
            setRequireRoomName(false);
        }
    };

    const handleSubmit = async () => {
        if (chatRoomName && selectedTree && !isSubmitting) {
            setIsSubmitting(true);
            try {
                await checkLoginStatus();
                await addChatRoom(chatRoomName, selectedTree.uuid);
                await fetchChatRooms();
                onClose();
            } catch (error) {
                console.error("Failed to create chat room", error);
            } finally {
                setIsSubmitting(false);
            }
        } else {
            if (chatRoomName === "") {
                setRequireRoomName(true);
            }
            if (selectedTree === null) {
                setRequireSelectTree(true);
            }
        }
    };

    return (
        <div
            className={tw(
                "p-5 bg-gray-800 text-white w-[360px]",
                "relative border border-gray-600"
            )}
        >
            <h3 className="font-title leading-5 text-gray-200">대화 분석방 생성</h3>
            <input
                type="text"
                placeholder="이름을 지어주세요."
                maxLength={8}
                onChange={handleInputChange}
                className={tw(
                    "mt-6 border-b outline-none border-gray-600",
                    "h-10 w-full bg-gray-800 placeholder:text-gray-600 focus:border-white"
                )}
            />
            {requireRoomName && (
                <p className="text-literal-error text-sm mt-1">채팅방 이름을 입력하세요.</p>
            )}
            <h3 className="font-title leading-5 mb-2 mt-6 text-gray-200">나무를 선택해 주세요.</h3>
            <div onClick={toggleDropdown} className="relative">
                <div
                    id="tab"
                    className={tw(
                        "py-3 px-4 bg-gray-600",
                        ` ${isDropdownOpen ? "" : "hover:bg-gray-400 cursor-pointer"}`,
                        "fill-white flex items-center justify-between select-none "
                    )}
                >
                    {selectedTree ? selectedTree.name : "함께할 나무 선택"}
                    <IconSelectArrow
                        className={`w-4 transition-transform duration-300 ${isDropdownOpen ? "transform rotate-180" : ""}`}
                    />
                </div>
                {/* tree list rendering */}
                {isDropdownOpen && (
                    <ul className="absolute left-0 top-13 right-0 z-10 cursor-pointer">
                        {treeDetail.map((item) => (
                            <ModalListItem
                                key={item.tree_uuid}
                                item={{ name: item.tree_name, uuid: item.tree_uuid }}
                                onClick={handleItemClick}
                            />
                        ))}
                    </ul>
                )}
                {requireSelectTree && (
                    <p className="text-literal-error text-sm mt-1">나무를 선택하세요.</p>
                )}
            </div>
            <div className="text-right mt-4">
                {isSubmitting ? (
                    <ButtonDisable className="ml-1">생성 중...</ButtonDisable>
                ) : (
                    <ButtonDefault className="ml-1" onClick={handleSubmit}>
                        생성하기
                    </ButtonDefault>
                )}
            </div>
            <button
                type="button"
                className="text-zero w-5 h-5 absolute right-5 top-5 fill-gray-600 hover:fill-white transition"
                onClick={onClose}
            >
                <IconClose />
                닫기
            </button>
        </div>
    );
};

export default ModalCreateChat;

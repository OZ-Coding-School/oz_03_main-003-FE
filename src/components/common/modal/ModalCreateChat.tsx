import { FC, useEffect, useRef, useState } from "react";
import ButtonDefault from "../button/ButtonDefault";
import { IconClose, IconSelectArrow } from "../../../config/IconData";
import ModalListItem from "./ModalListItem";
import { twMerge as tw } from "tailwind-merge";
import useVerify from "../../../hook/useVerify";
import { CreateChatRoom } from "../../../api/chat";
import { getTreeDataAll } from "../../../api/tree";
import { TreeItem } from "../../../config/types";
import { ChatRoom } from "../../../config/store";

interface ModalCreateChatProps {
    onClose: () => void;
    onAddChatRoom: (newChatRoom: ChatRoom) => void;
}

const ModalCreateChat: FC<ModalCreateChatProps> = ({ onClose, onAddChatRoom }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedTree, setSelectedTree] = useState<TreeItem | null>(null);
    const [chatRoomName, setChatRoomName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [trees, setTrees] = useState<TreeItem[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);
    const { checkLoginStatus } = useVerify();

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }

        const fetchTrees = async () => {
            try {
                const response = await getTreeDataAll();
                const treesData: TreeItem[] = response.data;
                setTrees(treesData);
            } catch (error) {
                console.error("Failed to fetch tree data:", error);
            }
        };

        fetchTrees();
    }, []);

    const createChatHandler = async () => {
        if (chatRoomName.trim() === "") {
            setErrorMessage("이름을 입력해주세요.");
            return;
        }

        if (!selectedTree) {
            setErrorMessage("트리를 선택해주세요.");
            return;
        }

        await checkLoginStatus();
        try {
            const result = await CreateChatRoom({
                chat_room_name: chatRoomName,
                tree_uuid: selectedTree.tree_uuid,
            });
            console.log("Chat room created:", result);

            onAddChatRoom({
                chat_room_uuid: result.chat_room_uuid,
                chat_room_name: chatRoomName,
                tree_uuid: selectedTree.tree_uuid,
                created_at: new Date().toISOString(),
            });

            onClose();
        } catch (error) {
            console.error("Error creating chat room:", error);
        }
    };

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const handleItemClick = (item: TreeItem) => {
        setSelectedTree(item);
        setIsDropdownOpen(false);
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
                value={chatRoomName}
                onChange={(e) => {
                    setChatRoomName(e.target.value);
                    setErrorMessage(""); // 입력값이 변경될 때 에러 메시지 초기화
                }}
                className={tw(
                    "mt-6 border-b outline-none border-gray-600",
                    "h-10 w-full bg-gray-800 placeholder:text-gray-600 focus:border-white"
                )}
            />
            {errorMessage && <div className="text-red-500 text-xs mt-1">{errorMessage}</div>}
            <h3 className="font-title leading-5 mb-2 mt-6 text-gray-200">나무를 선택해 주세요.</h3>
            <div className="relative">
                <div
                    id="tab"
                    className={tw(
                        "py-3 px-4 bg-gray-600",
                        `${isDropdownOpen ? "" : "hover:bg-gray-400 cursor-pointer"}`,
                        "fill-white flex items-center justify-between select-none"
                    )}
                    onClick={toggleDropdown}
                >
                    {selectedTree ? selectedTree.tree_name : "나무를 선택해 주세요."}
                    <IconSelectArrow
                        className={`w-4 transition-transform duration-300 ${isDropdownOpen ? "transform rotate-180" : ""}`}
                    />
                </div>
                {isDropdownOpen && (
                    <ul className="absolute left-0 top-full right-0 z-10 cursor-pointer bg-gray-800">
                        {trees.map((item) => (
                            <ModalListItem
                                key={item.tree_uuid}
                                item={item}
                                onClick={() => handleItemClick(item)}
                            />
                        ))}
                    </ul>
                )}
            </div>

            <div className="text-right mt-4">
                <ButtonDefault className="ml-1" onClick={createChatHandler}>
                    생성하기
                </ButtonDefault>
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

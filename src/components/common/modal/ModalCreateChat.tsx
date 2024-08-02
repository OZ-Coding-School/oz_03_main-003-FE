import { motion } from "framer-motion";
import ButtonDefault from "../button/ButtonDefault";
import { IconClose, IconSelectArrow } from "../../../config/IconData";
import ModalListItem from "./ModalListItem";
import { useEffect, useRef, useState } from "react";
import { twMerge as tw } from "tailwind-merge";
import { useUserStore } from "../../../config/store";
import useChatRooms from "../../../hook/chat/useChatRooms";
import ButtonDisable from "../button/ButtonDisable";
import useVerify from "../../../hook/useVerify";
import useSound from "use-sound";
import btnConfirm from "../../../assets/sound/btn_confirm.mp3";

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
    const inputRef = useRef<HTMLInputElement>(null);
    const [playConfirm] = useSound(btnConfirm, { volume: 0.75 });

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

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

    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };
    const handleSubmit = async () => {
        if (chatRoomName && selectedTree && !isSubmitting) {
            setIsSubmitting(true);
            try {
                await checkLoginStatus();
                await addChatRoom(chatRoomName, selectedTree.uuid);
                await fetchChatRooms();
                onClose();
                playConfirm();
            } catch (error) {
                console.error("Failed to create chat room", error);
            } finally {
                setIsSubmitting(false);
            }
        } else {
            if (chatRoomName.trim() === "") {
                setRequireRoomName(true);
                inputRef.current?.focus();
            }
            if (selectedTree === null) {
                setRequireSelectTree(true);
            }
        }
    };
    const closeHandler = () => {
        onClose();
    };
    return (
        <>
            <nav className="absolute opacity-50 top-0 left-0 w-full h-screen bg-black"></nav>

            <motion.div
                animate={{ opacity: [0, 1], scale: [0, 1] }}
                transition={{ duration: 0.5, type: "spring" }}
                onClick={closeHandler}
                onKeyDown={(e) => {
                    e.key === "Escape" && closeHandler();
                    e.key === "Enter" && handleSubmit();
                }}
                className={tw("inset-0 select-none z-0 fixed flex items-center justify-center")}
            >
                <div
                    className={tw(
                        "p-5 bg-gray-800 text-white",
                        "relative border border-gray-600",
                        "w-full h-full top-[129px] sm:w-[420px] sm:h-fit sm:top-[0px]"
                    )}
                    onClick={stopPropagation}
                >
                    <h3 className="font-title leading-5 mb-10 text-gray-200">대화 분석방 생성</h3>
                    <input
                        type="text"
                        placeholder="이름을 지어주세요."
                        ref={inputRef}
                        maxLength={8}
                        onChange={handleInputChange}
                        className={tw(
                            " border-b outline-none border-gray-600",
                            "h-10 w-full bg-gray-800 placeholder:text-gray-600 focus:border-white",
                            requireRoomName && "focus:border-literal-error"
                        )}
                    />
                    <p
                        className={tw(
                            "text-literal-error animate-blur text-sm mt-1 invisible",
                            requireRoomName && "visible"
                        )}
                    >
                        채팅방 이름을 입력하세요.
                    </p>
                    <h3 className="font-title leading-5 mb-2 mt-6 text-gray-200">
                        나무를 선택해 주세요.
                    </h3>
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
                        <p
                            className={tw(
                                "text-literal-error animate-blur text-sm mt-1 invisible",
                                requireSelectTree && "visible"
                            )}
                        >
                            나무를 선택하세요.
                        </p>
                    </div>
                    <div className="text-right mt-6">
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
            </motion.div>
        </>
    );
};

export default ModalCreateChat;

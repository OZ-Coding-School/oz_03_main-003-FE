import ButtonDefault from "../button/ButtonDefault";
import { IconClose, IconSelectArrow } from "../../../config/IconData";
// import { ContentDummy } from "./ModalContentDummy";
import ModalListItem from "./ModalListItem";
import { useState } from "react";
import { twMerge as tw } from "tailwind-merge";
import { useUserStore } from "../../../config/store";

interface ModalCreateChatProps {
    onClose: () => void;
}

const ModalCreateChat: React.FC<ModalCreateChatProps> = ({ onClose }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedTree, setSelectedTree] = useState("default");

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    // zustand store에서 treeDetail 데이터 받기
    const { treeDetail } = useUserStore((state) => state.userData);

    const handleItemClick = (treeName: string) => {
        setSelectedTree(treeName);
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
                className={tw(
                    "mt-6 border-b outline-none border-gray-600",
                    "h-10 w-full bg-gray-800 placeholder:text-gray-600 focus:border-white"
                )}
            />
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
                    {selectedTree === "default" ? "함께할 나무 선택" : selectedTree}
                    <IconSelectArrow
                        className={`w-4 transition-transform duration-300 ${isDropdownOpen ? "transform rotate-180" : ""}`}
                    />
                </div>
                {isDropdownOpen && (
                    <ul className="absolute left-0 top-13 right-0 z-10 cursor-pointer">
                        {treeDetail.map((item) => (
                            <ModalListItem
                                key={item.tree_uuid}
                                item={item}
                                onClick={handleItemClick}
                            />
                        ))}
                    </ul>
                )}
            </div>
            <div className="text-right mt-4">
                <ButtonDefault className="ml-1">생성하기</ButtonDefault>
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

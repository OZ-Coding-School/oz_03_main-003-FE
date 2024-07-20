import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import ButtonDefault from "../button/ButtonDefault";
import { IconClose } from "../../config/IconData";
import { twMerge as tw } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import useUserInfo from "../../hook/useUserInfo";
import { authApi } from "../../api";

interface ModalChangeNameProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalChangeName: React.FC<ModalChangeNameProps> = ({ isOpen, onClose }) => {
    const { getUserInfo } = useUserInfo();

    const inputRef = useRef<HTMLInputElement>(null);
    const [isUpdatedNewName, setIsUpdatedNewName] = useState("");
    useEffect(() => {
        if (inputRef.current && isOpen) {
            inputRef.current.focus();
        }
    }, [isOpen, getUserInfo]);

    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    const closeHandler = () => {
        onClose();
    };

    const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setIsUpdatedNewName(e.target.value);
    };

    const handleButtonClick = async () => {
        await authApi.updateUserInfoName(isUpdatedNewName);
        await getUserInfo();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    onClick={closeHandler}
                    onKeyDown={(e) => {
                        e.key === "Escape" && closeHandler();
                    }}
                    className={tw("inset-0 select-none z-0 fixed flex items-center justify-center")}
                >
                    <nav
                        onClick={stopPropagation}
                        className={tw(
                            "p-5 bg-gray-800 text-white w-80 border border-gray-600",
                            "absolute z-20"
                        )}
                    >
                        <h3 className="font-title leading-5 text-gray-200">닉네임 변경</h3>
                        <input
                            type="text"
                            placeholder="새 이름을 지어주세요."
                            className={tw(
                                "mt-6 border-b outline-none border-gray-600",
                                "h-10 w-full bg-gray-800 placeholder:text-gray-600 focus:border-white"
                            )}
                            onChange={handleInputValue}
                            ref={inputRef}
                        />
                        <div className="text-right mt-4">
                            <ButtonDefault
                                className="ml-1"
                                onClick={() => {
                                    handleButtonClick();
                                    onClose();
                                }}
                            >
                                변경하기
                            </ButtonDefault>
                        </div>
                        <button
                            type="button"
                            className="text-zero w-5 h-5 absolute right-5 top-5 fill-gray-600 hover:fill-white transition"
                            onClick={closeHandler}
                        >
                            <IconClose />
                            닫기
                        </button>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ModalChangeName;

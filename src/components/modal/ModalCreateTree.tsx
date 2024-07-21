import React, { useEffect, useRef } from "react";
import ButtonDefault from "../button/ButtonDefault";
import { IconClose } from "../../config/IconData";
import { twMerge as tw } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

interface ModalCreateTreeProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalCreateTree: React.FC<ModalCreateTreeProps> = ({ isOpen, onClose }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current && isOpen) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    const closeHandler = () => {
        onClose();
    };

    return (
        <>
            <nav className="absolute opacity-50 top-0 w-full h-screen bg-black"></nav>
            <AnimatePresence>
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
                        <h3 className="font-title leading-5 text-gray-200">새 나무 심기</h3>
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="이름을 지어주세요."
                            className={tw(
                                "mt-6 border-b outline-none border-gray-600",
                                "h-10 w-full bg-gray-800 placeholder:text-gray-600 focus:border-white"
                            )}
                        ></input>
                        <div className="text-right mt-4">
                            <ButtonDefault className="ml-1">나무 심기</ButtonDefault>
                        </div>
                        <button
                            type="button"
                            className="text-zero w-5 h-5 absolute right-5 top-5 fill-gray-600 hover:fill-white transition"
                            onClick={onClose}
                        >
                            <IconClose />
                            닫기
                        </button>
                    </nav>
                </motion.div>
            </AnimatePresence>
        </>
    );
};

export default ModalCreateTree;

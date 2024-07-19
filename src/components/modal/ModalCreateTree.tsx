import React from "react";
import ButtonDefault from "../button/ButtonDefault";
import { IconClose } from "../../config/IconData";
import { twMerge as tw } from "tailwind-merge";

interface ModalCreateTreeProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalCreateTree: React.FC<ModalCreateTreeProps> = ({ isOpen, onClose }) => {
    return (
        <>
            <style>
                {`
                    @keyframes scaleIn {
                        0% {
                            transform: scale(0.7);
                            opacity: 0;
                        }
                        100% {
                            transform: scale(1);
                            opacity: 1;
                        }
                    }

                    @keyframes scaleOut {
                        0% {
                            transform: scale(1);
                            opacity: 1;
                        }
                        100% {
                            transform: scale(0.7);
                            opacity: 0;
                        }
                    }

                    .animate-scaleIn {
                        animation: scaleIn 0.5s forwards;
                    }

                    .animate-scaleOut {
                        animation: scaleOut 0.5s forwards;
                    }
                `}
            </style>
            <div
                className={tw(
                    "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            >
                <div
                    className={tw(
                        "p-5 bg-gray-800 text-white w-80 border border-gray-600 rounded-lg",
                        "relative transform transition-transform duration-500",
                        isOpen ? "animate-scaleIn" : "animate-scaleOut"
                    )}
                >
                    <h3 className="font-title leading-5 text-gray-200">새 나무 심기</h3>
                    <input
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
                </div>
            </div>
        </>
    );
};

export default ModalCreateTree;

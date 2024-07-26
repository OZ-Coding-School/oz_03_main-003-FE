import { useEffect, useRef, useState } from "react";
import ButtonDefault from "../button/ButtonDefault";
import { IconClose } from "../../../config/IconData";
import { twMerge as tw } from "tailwind-merge";
import { motion } from "framer-motion";
import useInfo from "../../../hook/useInfo";
import { authApi } from "../../../api";
import useVerify from "../../../hook/useVerify";

interface ModalChangeNameProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalChangeName = ({ isOpen, onClose }: ModalChangeNameProps) => {
    const { getUserInfo } = useInfo();
    const { checkLoginStatus } = useVerify();
    const inputRef = useRef<HTMLInputElement>(null);
    const [isUpdatedNewName, setIsUpdatedNewName] = useState("");
    const [userNameAlert, setUserNameAlert] = useState(false);
    useEffect(() => {
        if (inputRef.current && isOpen) {
            inputRef.current.focus();
        }
    }, [isOpen, getUserInfo]);

    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    const handleButtonClick = async () => {
        if (isUpdatedNewName.trim() === "") {
            inputRef.current?.focus();
            return setUserNameAlert(true);
        }
        await checkLoginStatus();
        await authApi.updateUserInfoName(isUpdatedNewName);
        await getUserInfo();
        handleModalClose();
    };

    const handleModalClose = () => {
        onClose();
    };

    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserNameAlert(false);
        setIsUpdatedNewName(e.currentTarget.value);
    };

    return (
        <>
            <nav className="absolute opacity-50 top-0 w-full h-screen bg-black"></nav>
            <motion.div
                animate={{ opacity: [0, 1], scale: [0, 1] }}
                transition={{ duration: 0.5, type: "spring" }}
                onClick={handleModalClose}
                onKeyDown={(e) => {
                    e.key === "Escape" && handleModalClose();
                    e.key === "Enter" && handleButtonClick();
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
                        maxLength={15}
                        placeholder="새 이름을 지어주세요."
                        className={tw(
                            "mt-6 border-b outline-none border-gray-600",
                            "h-10 w-full bg-gray-800 placeholder:text-gray-600 focus:border-white",
                            userNameAlert && "border-literal-error focus:border-literal-error"
                        )}
                        onChange={handleInputValue}
                        ref={inputRef}
                    />
                    <p
                        className={tw(
                            "text-literal-error animate-blur text-xs",
                            !userNameAlert && "invisible"
                        )}
                    >
                        1글자 이상 작성해 주세요.
                    </p>
                    <div className="text-right mt-4">
                        <ButtonDefault
                            className="ml-1"
                            onClick={() => {
                                handleButtonClick();
                            }}
                        >
                            변경하기
                        </ButtonDefault>
                    </div>
                    <button
                        type="button"
                        className="text-zero w-5 h-5 absolute right-5 top-5 fill-gray-600 hover:fill-white transition"
                        onClick={handleModalClose}
                    >
                        <IconClose />
                        닫기
                    </button>
                </nav>
            </motion.div>
        </>
    );
};

export default ModalChangeName;

import { useEffect, useRef, useState } from "react";
import ButtonDefault from "../button/ButtonDefault";
import { IconClose } from "../../../config/IconData";
import { twMerge as tw } from "tailwind-merge";
import { motion } from "framer-motion";
import useInfo from "../../../hook/useInfo";
import { authApi } from "../../../api";
import useVerify from "../../../hook/useVerify";
import useSound from "use-sound";
import confirmSound from "../../../assets/sound/btn_confirm.mp3";

interface ModalChangeNameProps {
    onClose: () => void;
}

const ModalChangeName = ({ onClose }: ModalChangeNameProps) => {
    const { getUserInfo } = useInfo();
    const { checkLoginStatus } = useVerify();
    const inputRef = useRef<HTMLInputElement>(null);
    const [isUpdatedNewName, setIsUpdatedNewName] = useState("");
    const [userNameAlert, setUserNameAlert] = useState(false);
    const [playConfirm] = useSound(confirmSound, { volume: 0.75 });

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [getUserInfo]);

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
        playConfirm();
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
            <nav className="absolute opacity-50 top-0 left-0 w-full h-screen bg-black"></nav>
            <motion.div
                animate={{ opacity: [0, 1], scale: [0, 1] }}
                transition={{ duration: 0.5, type: "spring" }}
                onClick={handleModalClose}
                onKeyDown={(e) => {
                    e.key === "Escape" && handleModalClose();
                    e.key === "Enter" && handleButtonClick();
                }}
                className={tw(
                    "outline-none inset-0 select-none z-0 fixed flex items-center justify-center"
                )}
            >
                <nav
                    onClick={stopPropagation}
                    className={tw(
                        "p-5 bg-gray-800 text-white w-[420px] border border-gray-600 ",
                        "absolute z-20"
                    )}
                >
                    <h3 className="font-title leading-5 text-gray-200 mb-10">이름 변경</h3>
                    <input
                        type="text"
                        maxLength={15}
                        placeholder="새 이름을 지어주세요."
                        className={tw(
                            "border-b outline-none border-gray-600",
                            "h-10 w-full bg-gray-800 placeholder:text-gray-600 focus:border-white",
                            userNameAlert && "border-literal-error focus:border-literal-error"
                        )}
                        onChange={handleInputValue}
                        ref={inputRef}
                    />
                    <p
                        className={tw(
                            "text-literal-error animate-blur text-sm mt-1",
                            !userNameAlert && "invisible"
                        )}
                    >
                        1글자 이상 작성해 주세요.
                    </p>
                    <div className="text-right mt-8">
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

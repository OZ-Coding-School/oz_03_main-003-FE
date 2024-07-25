import ButtonError from "../button/ButtonError";
import { IconClose } from "../../../config/IconData";
import { twMerge as tw } from "tailwind-merge";
import { motion } from "framer-motion";
import ButtonDefault from "../button/ButtonDefault";
import { useEffect, useRef } from "react";
import useVerify from "../../../hook/useVerify";
import { authApi } from "../../../api";
import { useUserStore } from "../../../config/store";
import { useNavigate } from "react-router-dom";
interface ModalDeleteChatProps {
    onClose: () => void;
}

const ModalQuitSite = ({ onClose }: ModalDeleteChatProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { userData } = useUserStore();
    const { checkLoginStatus } = useVerify();
    const nav = useNavigate();

    const closeHandler = () => {
        onClose();
    };

    const authDeleteHandler = async () => {
        await checkLoginStatus();
        await authApi.deleteAccount(userData.user.email);
        nav("/");
    };

    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    }, []);

    return (
        <>
            <nav
                onClick={closeHandler}
                className="z-10 absolute opacity-50 top-0 w-full h-screen bg-black"
            ></nav>
            <motion.div
                ref={ref}
                tabIndex={-1}
                animate={{ opacity: [0, 1], scale: [0, 1] }}
                transition={{ duration: 0.5, type: "spring" }}
                onClick={closeHandler}
                onKeyDown={(e) => {
                    e.key === "Escape" && closeHandler();
                }}
                className={tw("inset-0 select-none z-20 fixed flex items-center justify-center")}
            >
                <nav
                    onClick={stopPropagation}
                    className={tw(
                        "p-5 bg-gray-800 text-white w-80 border border-gray-600",
                        "absolute z-20"
                    )}
                >
                    <h3 className="font-title leading-5 mb-4 text-gray-200">계정 탈퇴</h3>
                    <p>계정 정보를 삭제하시겠습니까?</p>
                    <p className="text-literal-error text-xs">삭제 된 내용은 복구되지 않습니다</p>
                    <div className="text-right mt-2.5">
                        <ButtonError onClick={authDeleteHandler}>삭제하기</ButtonError>
                        <ButtonDefault onClick={closeHandler} className="ml-1">
                            취소하기
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
        </>
    );
};

export default ModalQuitSite;

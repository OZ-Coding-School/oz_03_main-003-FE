import { useEffect, useRef } from "react";
import ButtonError from "../button/ButtonError";
import { IconClose } from "../../../config/IconData";
import { twMerge as tw } from "tailwind-merge";
import { motion } from "framer-motion";
import ButtonDefault from "../button/ButtonDefault";
import useChatRooms from "../../../hook/useChatRooms";
import useVerify from "../../../hook/useVerify";
import useSound from "use-sound";
import btnDelete from "../../../assets/sound/btn_delete.mp3";

interface ModalDeleteChatProps {
    onClose: () => void;
    chat_room_uuid: string;
    onDialogClose: () => void;
}

const ModalDeleteChat = ({ onClose, chat_room_uuid, onDialogClose }: ModalDeleteChatProps) => {
    const { removeChatRoom } = useChatRooms();
    const { checkLoginStatus } = useVerify();
    const ref = useRef<HTMLDivElement>(null);
    const [playDelete] = useSound(btnDelete, { volume: 0.75 });

    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    const closeHandler = () => {
        onClose();
    };

    const handleDelete = async () => {
        await checkLoginStatus();
        await removeChatRoom(chat_room_uuid);
        closeHandler();
        onDialogClose();
        playDelete();
    };

    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    }, []);

    return (
        <>
            <nav className="absolute opacity-50 top-0 left-0 w-full h-screen bg-black z-10"></nav>
            <motion.div
                tabIndex={-1}
                ref={ref}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                onClick={onClose}
                onKeyDown={(e) => {
                    e.key === "Escape" && closeHandler();
                    e.key === "Enter" && handleDelete();
                }}
                className={tw(
                    "outline-none inset-0 select-none z-10 fixed flex items-center justify-center"
                )}
            >
                <nav
                    onClick={stopPropagation}
                    className={tw(
                        "p-5 bg-gray-800 text-white w-[420px] border border-gray-600",
                        "absolute z-20"
                    )}
                >
                    <h3 className="font-title leading-5 mb-10 text-gray-200">대화 분석방 삭제</h3>
                    <p>대화 분석방을 삭제하시겠습니까?</p>
                    <p className="text-literal-error text-sm mt-2">
                        삭제 된 내용은 복구되지 않습니다
                    </p>
                    <div className="text-right mt-10">
                        <ButtonError onClick={handleDelete}>삭제하기</ButtonError>
                        <ButtonDefault className="ml-2">취소하기</ButtonDefault>
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

export default ModalDeleteChat;

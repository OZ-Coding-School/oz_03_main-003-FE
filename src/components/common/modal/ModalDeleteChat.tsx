import ButtonError from "../button/ButtonError";
import { IconClose } from "../../../config/IconData";
import { twMerge as tw } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import ButtonDefault from "../button/ButtonDefault";
interface ModalDeleteChatProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalDeleteChat: React.FC<ModalDeleteChatProps> = ({ isOpen, onClose }) => {
    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    const closeHandler = () => {
        onClose();
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
                        <h3 className="font-title leading-5 mb-4 text-gray-200">
                            대화 분석방 삭제
                        </h3>
                        <p>대화 분석방을 삭제하시겠습니까?</p>
                        <p className="text-literal-error text-xs">
                            삭제 된 내용은 복구되지 않습니다
                        </p>
                        <div className="text-right mt-2.5">
                            <ButtonError>삭제하기</ButtonError>
                            <ButtonDefault className="ml-1">취소하기</ButtonDefault>
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

export default ModalDeleteChat;

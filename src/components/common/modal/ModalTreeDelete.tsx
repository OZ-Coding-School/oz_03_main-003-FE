import { IconClose } from "../../../config/IconData";
import { twMerge as tw } from "tailwind-merge";
import { motion } from "framer-motion";
import ButtonDefault from "../button/ButtonDefault";
import { useEffect, useRef } from "react";
import ButtonError from "../button/ButtonError";
import { useUserStore } from "../../../config/store";
import ModalTreeDeleteChatList from "./ModalTreeDeleteChatList";
import useVerify from "../../../hook/useVerify";
import { treeApi } from "../../../api";
import useInfo from "../../../hook/useInfo";
import useSound from "use-sound";
import soundDelete from "../../../assets/sound/btn_delete.mp3";

interface ModalTreeDeleteProps {
    onClose: () => void;
    treeUUID: string;
}

const ModalTreeDelete = ({ onClose, treeUUID }: ModalTreeDeleteProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { userData } = useUserStore();
    const { checkLoginStatus } = useVerify();
    const { getUserGridInfo } = useInfo();
    const [playDelete] = useSound(soundDelete, { volume: 0.75 });
    const treeData = userData.treeDetail.find((item) => item.tree_uuid === treeUUID);

    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    }, []);

    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    const closeHandler = () => {
        onClose();
    };

    const deleteHandler = async () => {
        try {
            closeHandler();
            await checkLoginStatus();
            await treeApi.deleteTree(treeUUID);
            await getUserGridInfo();
            playDelete();
        } catch (error) {
            console.error("Tree Deletion Failed", error);
        }
    };

    return (
        <>
            <nav className="absolute opacity-50 top-0 left-0 z-10 w-screen h-screen bg-black"></nav>
            <motion.div
                ref={ref}
                tabIndex={-1}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                onClick={closeHandler}
                onKeyDown={(e) => {
                    e.key === "Escape" && closeHandler();
                    e.key === "Enter" && deleteHandler();
                }}
                className={tw(
                    "inset-0 outline-none select-none z-20 fixed flex items-center justify-center"
                )}
            >
                <nav
                    onClick={stopPropagation}
                    className={tw(
                        "p-5 bg-gray-800 text-white w-[420px] border border-gray-600",
                        "absolute z-20"
                    )}
                >
                    <h3 className="font-title leading-5 mb-10 text-gray-200 text-base">
                        나무를 삭제합니다
                    </h3>
                    <p>'{treeData!.tree_name}'를 삭제하시겠습니까?</p>
                    <p className="text-literal-error text-xs">
                        나무와 연결된 채팅방과 나무가 함께 삭제되며,
                    </p>
                    <p className="text-literal-error text-xs">복구되지 않습니다.</p>
                    <div className="mt-4 font-title text-gray-200 text-sm">
                        삭제되는 채팅방 리스트 :
                    </div>
                    <ModalTreeDeleteChatList treeUUID={treeUUID} />
                    <div className="text-right mt-4">
                        <ButtonError onClick={deleteHandler}>삭제하기</ButtonError>
                        <ButtonDefault onClick={closeHandler} className="ml-2">
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

export default ModalTreeDelete;

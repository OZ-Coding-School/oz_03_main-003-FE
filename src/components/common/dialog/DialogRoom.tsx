import { useRef, useEffect } from "react";
import { useUserChatStore, useUserStore } from "../../../config/store";
import ButtonEmoTree from "../button/ButtonEmoTree";
import useGetDialogList from "../../../hook/useGetDialogList";
import DialogHandle from "./DialogHandle";
import { motion } from "framer-motion";

interface DialogRoomProps {
    chatRoomUuid: string;
}
const DialogRoom = ({ chatRoomUuid }: DialogRoomProps) => {
    const { dialogList, error } = useGetDialogList(chatRoomUuid);
    const { chatRooms } = useUserChatStore();
    const { userData } = useUserStore();
    const treeUuid = chatRooms.find((data) => data.chat_room_uuid === chatRoomUuid)?.tree_uuid;
    const treeName = userData.treeDetail.find((t) => t.tree_uuid === treeUuid)?.tree_name;

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [dialogList]);

    if (dialogList.length === 0) return <DialogHandle text={"현재 대화내역이 없습니다."} />;
    if (error) return <DialogHandle text={`Rendering Error Issue : ${error}`} />;

    return (
        <div className="w-full h-full text-white overflow-y-auto">
            <div>
                {dialogList.map((dialogItem, index) => (
                    <div key={index}>
                        <div className="mb-4 mr-8">
                            <p className="p-8 bg-gray-800 rounded-md w-10/12 ml-auto">
                                {dialogItem.userMessage.message}
                            </p>
                        </div>
                        <motion.div
                            transition={{ duration: 0.5, type: "just" }}
                            animate={{ opacity: [0, 1] }}
                        >
                            {dialogItem.aiMessage && (
                                <div className="mb-10">
                                    <div className="p-8 border-b border-gray-800">
                                        <p className="text-gray-200 text-lg font-title mb-4">
                                            대화 속의 감정을 요약했습니다
                                        </p>
                                        {dialogItem.aiMessage.message}
                                    </div>
                                    <div className="p-8 border-b border-gray-800">
                                        <p className="text-gray-200 text-lg font-title mb-6">
                                            감정 키워드 !
                                        </p>
                                        {JSON.stringify(dialogItem.aiMessage.sentiments)}
                                    </div>
                                    <div className="p-8 border-b border-gray-600 pb-10">
                                        <p className="text-gray-200 text-lg font-title mb-4">
                                            감정을 전달하면{" "}
                                            <span className="text-primary">{treeName}</span>
                                            나무가 성장합니다!
                                        </p>
                                        <ButtonEmoTree>감정을 나무에 전달하기</ButtonEmoTree>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                ))}
            </div>
            <div ref={messagesEndRef} />
        </div>
    );
};

export default DialogRoom;

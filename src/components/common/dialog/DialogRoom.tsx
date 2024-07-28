import { useRef, useEffect } from "react";
import { useUserChatStore, useUserStore } from "../../../config/store";
import ButtonEmoTree from "../button/ButtonEmoTree";
import useGetDialogList from "../../../hook/useGetDialogList";

interface DialogRoomProps {
    chatRoomUuid: string;
}
const DialogRoom = ({ chatRoomUuid }: DialogRoomProps) => {
    const { dialogList, isLoading, error } = useGetDialogList(chatRoomUuid);
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

    if (isLoading) return <div>로딩 중...</div>;
    if (error) return <div>에러 발생: {error}</div>;
    return (
        <div className="w-full h-full text-white overflow-y-auto">
            <div>
                {dialogList.length === 0 ? (
                    <div>대화 기록이 없습니다.</div>
                ) : (
                    dialogList.map((dialogItem, index) => (
                        <div key={index}>
                            <div className="mb-4 mr-8">
                                <p className="p-8 bg-gray-800 rounded-md w-10/12 ml-auto">
                                    {dialogItem.userMessage.message}
                                </p>
                            </div>
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
                        </div>
                    ))
                )}
            </div>
            <div ref={messagesEndRef} />
        </div>
    );
};

export default DialogRoom;

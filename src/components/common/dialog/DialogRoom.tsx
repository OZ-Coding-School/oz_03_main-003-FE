import { useEffect, useRef } from "react";
import { useUserChatStore } from "../../../config/store";
import useFetchMessages from "../../../hook/useFetchMessage";
import useFetchAIMessage from "../../../hook/useFetchAIMessage";
import ButtonEmoTree from "../button/ButtonEmoTree";
interface DialogRoomProps {
    chatRoomUuid: string;
}

const DialogRoom = ({ chatRoomUuid }: DialogRoomProps) => {
    const { userMessages, aiResponses } = useUserChatStore((state) => ({
        userMessages: state.userMessages[chatRoomUuid] || [],
        aiResponses: state.aiResponses[chatRoomUuid] || [],
    }));
    const { fetchMessages } = useFetchMessages();
    const { fetchAIMessage } = useFetchAIMessage();

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        fetchMessages(chatRoomUuid);
    }, [chatRoomUuid, fetchMessages]);

    useEffect(() => {
        if (userMessages.length > 0) {
            const lastMessage = userMessages[userMessages.length - 1];
            fetchAIMessage(chatRoomUuid, lastMessage.message_uuid);
        }
    }, [chatRoomUuid, userMessages, fetchAIMessage]);

    useEffect(() => {
        scrollToBottom();
    }, [userMessages, aiResponses]);

    return (
        <div className="w-full h-full text-white overflow-y-auto">
            {userMessages.map((msg, index) => (
                <div key={msg.message_uuid}>
                    <div className="p-8 bg-gray-800 rounded-md mb-4 w-10/12 ml-auto mr-10">
                        {msg.message}
                    </div>
                    {aiResponses[index] && (
                        <div className="rounded-md mb-10">
                            <div className="p-8 border-b border-gray-800">
                                <p className="text-gray-200  text-lg font-title mb-4">
                                    대화 속의 감정을 요약했습니다
                                </p>
                                {aiResponses[index].message}
                            </div>
                            <div className="p-8 border-b border-gray-800">
                                <p className="text-gray-200  text-lg font-title mb-6">
                                    감정 키워드 !
                                </p>
                            </div>
                            <div className="p-8 border-b border-gray-600 pb-10">
                                <p className="text-gray-200  text-lg font-title mb-4">
                                    감정을 전달하면 나무가 성장합니다!
                                </p>
                                <ButtonEmoTree>감정을 나무에 전달하기</ButtonEmoTree>
                            </div>
                        </div>
                    )}
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default DialogRoom;

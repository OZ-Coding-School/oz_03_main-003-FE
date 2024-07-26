import { useEffect } from "react";
import { useUserChatStore } from "../../../config/store";
import useFetchMessages from "../../../hook/useFetchMessage";

interface DialogRoomProps {
    chatRoomUuid: string;
}

const DialogRoom = ({ chatRoomUuid }: DialogRoomProps) => {
    const { userMessages } = useUserChatStore((state) => ({
        userMessages: state.userMessages[chatRoomUuid] || [],
    }));

    const { fetchMessages } = useFetchMessages();

    useEffect(() => {
        fetchMessages(chatRoomUuid);
    }, [chatRoomUuid, fetchMessages]);

    return (
        <div className="w-full h-full text-white overflow-y-auto px-5">
            {userMessages.map((msg) => (
                <div className="p-5 bg-gray-800 rounded-md mb-4" key={msg.message_uuid}>
                    {msg.message}
                </div>
            ))}
        </div>
    );
};

export default DialogRoom;

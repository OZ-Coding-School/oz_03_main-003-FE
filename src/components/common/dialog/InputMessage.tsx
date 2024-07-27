import { useState } from "react";
import { IconSendMsg } from "../../../config/IconData";
import useSendMessage from "../../../hook/useSendMessage";

interface InputMessageProps {
    chatRoomUuid: string;
}
const InputMessage = ({ chatRoomUuid }: InputMessageProps) => {
    const [message, setMessage] = useState("");
    const { sendMessage } = useSendMessage();

    const handleSendMessage = async () => {
        if (message.trim() !== "") {
            await sendMessage(chatRoomUuid, message);
            setMessage("");
        }
    };

    const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            await handleSendMessage();
        }
    };

    return (
        <div className="px-5 shadow-black shadow-lg">
            <div className="border border-color-white h-12 px-5 rounded-full flex w-full box-border relative">
                <input
                    type="text"
                    value={message}
                    className="bg-transparent outline-none text-white flex-grow"
                    placeholder="대화를 입력해주세요."
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <div className="absolute right-1 top-1 rounded-full w-10 h-10 flex justify-center items-center hover:bg-gray-800 transition">
                    <button
                        type="button"
                        className="w-full h-full text-zero fill-white flex items-center justify-center"
                        onClick={handleSendMessage}
                    >
                        <IconSendMsg className="h-4.5" />
                        전송
                    </button>
                </div>
            </div>
            <p className="text-center text-sm  text-gray-200 mt-1 mb-4">
                emotree AI는 원하는 대상의 부가설명을 해주면 더 정확한 감정분석을 합니다.
            </p>
        </div>
    );
};

export default InputMessage;

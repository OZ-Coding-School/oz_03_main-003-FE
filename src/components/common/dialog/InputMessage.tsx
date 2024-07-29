import { useState } from "react";
import { IconSendMsg } from "../../../config/IconData";
import useUpdateDialog from "../../../hook/useUpdateDialog";
import InputLoadingBar from "./InputLoadingBar";
import useVerify from "../../../hook/useVerify";
import useSound from "use-sound";
import messageSound from "../../../assets/sound/message_request.mp3";
import responseSound from "../../../assets/sound/message_response.mp3";

interface InputMessageProps {
    chatRoomUuid: string;
}

const InputMessage = ({ chatRoomUuid }: InputMessageProps) => {
    const [message, setMessage] = useState("");
    const { updateDialog, isAILoading } = useUpdateDialog();
    const { checkLoginStatus } = useVerify();
    const [playSend] = useSound(messageSound, { volume: 0.75 });
    const [playResponse] = useSound(responseSound, { volume: 0.75 });

    const handleSendMessage = async () => {
        if (message.trim() !== "") {
            playSend();
            setMessage("");
            await checkLoginStatus();
            await updateDialog(chatRoomUuid, message);
            playResponse();
        }
    };

    return (
        <div className="px-5 shadow-black shadow-lg relative">
            <div className="border border-color-white h-12 px-5 rounded-full flex w-full box-border relative">
                <textarea
                    value={message}
                    className="overflow-y-hidden bg-transparent outline-none resize-none py-2.5 text-white flex-grow"
                    placeholder="대화를 입력해주세요."
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSendMessage()}
                    disabled={isAILoading}
                />
                <div className="absolute right-1 top-1 rounded-full w-10 h-10 flex justify-center items-center hover:bg-gray-800 transition">
                    <button
                        type="button"
                        className="w-full h-full text-zero fill-white flex items-center justify-center"
                        onClick={handleSendMessage}
                        disabled={isAILoading}
                    >
                        <IconSendMsg className="h-4.5" />
                        전송
                    </button>
                </div>
            </div>
            <p className="text-center text-sm  text-gray-200 mt-1 mb-4">
                emotree AI는 원하는 대상의 부가설명을 해주면 더 정확한 감정분석을 합니다.
            </p>
            {isAILoading && (
                <div className="text-white absolute top-[-100px] left-[50%] translate-x-[-50%]">
                    <InputLoadingBar />
                </div>
            )}
        </div>
    );
};

export default InputMessage;

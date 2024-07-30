import { useState } from "react";
import { IconSendMsg } from "../../../config/IconData";
import InputLoadingBar from "./InputLoadingBar";
import useVerify from "../../../hook/useVerify";
import useSound from "use-sound";
import messageSound from "../../../assets/sound/message_request.mp3";
import responseSound from "../../../assets/sound/message_response.mp3";
import { dialogApi } from "../../../api";
import { useDialogStore } from "../../../config/store";
import { ResponseAIMessage, UserMessage } from "../../../config/types";

const InputMessage = () => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const { checkLoginStatus } = useVerify();
    const { chatroom_uuid, setAiMessages, setUserMessages } = useDialogStore();
    const [playSend] = useSound(messageSound, { volume: 0.75 });
    const [playResponse] = useSound(responseSound, { volume: 0.75 });

    const handleSendMessage = async () => {
        if (message.trim() !== "") {
            const nowMessage = message;
            playSend();

            await checkLoginStatus();
            const responseUserMessage = await dialogApi.sendUserMessage(chatroom_uuid, message);
            setMessage("");
            setLoading(true);
            const responseAiMessage = await dialogApi.postAIMessage(
                chatroom_uuid,
                responseUserMessage.data.message_uuid
            );
            const userMessageForm: UserMessage = {
                message_uuid: responseUserMessage.data.message_uuid,
                message: nowMessage,
            };
            setUserMessages(userMessageForm);

            setLoading(false);

            const aiMessageForm: ResponseAIMessage = {
                message_uuid: responseAiMessage.data.message_uuid,
                message: responseAiMessage.data.message,
                sentiments: responseAiMessage.data.sentiments,
                applied_state: responseAiMessage.data.applied_state,
            };

            setAiMessages(aiMessageForm);
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
                    disabled={loading}
                />
                <div className="absolute right-1 top-1 rounded-full w-10 h-10 flex justify-center items-center hover:bg-gray-800 transition">
                    <button
                        type="button"
                        className="w-full h-full text-zero fill-white flex items-center justify-center"
                        onClick={handleSendMessage}
                        disabled={loading}
                    >
                        <IconSendMsg className="h-4.5" />
                        전송
                    </button>
                </div>
            </div>
            <p className="text-center text-sm  text-gray-200 mt-1 mb-4">
                emotree AI는 원하는 대상의 부가설명을 해주면 더 정확한 감정분석을 합니다.
            </p>
            {loading && (
                <div className="text-white absolute top-[-100px] left-[50%] translate-x-[-50%]">
                    <InputLoadingBar />
                </div>
            )}
        </div>
    );
};

export default InputMessage;

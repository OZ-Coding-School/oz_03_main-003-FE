import { useState } from "react";
import { IconSendMsg } from "../../../config/IconData";
import InputLoadingBar from "./InputLoadingBar";
import useVerify from "../../../hook/useVerify";
import useSound from "use-sound";
import messageSound from "../../../assets/sound/message_request.mp3";
import responseSound from "../../../assets/sound/message_response.mp3";
import { dialogApi } from "../../../api";
import { useDialogStore, useModalStore } from "../../../config/store";
import { ResponseAIMessage, UserMessage } from "../../../config/types";
import { twMerge as tw } from "tailwind-merge";
import ToastChat from "../toast/ToastChat";

const InputMessage = () => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const { checkLoginStatus } = useVerify();
    const { chatroom_uuid, setAiMessages, setUserMessages } = useDialogStore();
    const [playSend] = useSound(messageSound, { volume: 0.75 });
    const [playResponse] = useSound(responseSound, { volume: 0.75 });
    const { modal } = useModalStore();

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
        <div className="relative pl-5 pr-12 shadow-black w-full">
            <div
                className={tw(
                    "border border-color-white h-[50px] whitespace-normal transition-all px-5 rounded-md flex w-full box-border relative",
                    message.length > 35 && "h-[75px]",
                    message.length > 75 && "h-[100px]"
                )}
            >
                <textarea
                    value={message}
                    className={tw(
                        "outline-none overflow-y-auto bg-transparent",
                        "resize-none p-2.5 pl-2 pr-10 text-white flex-grow"
                    )}
                    placeholder="대화를 입력해주세요."
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSendMessage()}
                    disabled={loading}
                />

                <button
                    type="button"
                    className="absolute -right-[46px] h-full text-zero fill-white flex items-center justify-center"
                    onClick={handleSendMessage}
                    disabled={loading}
                >
                    <div className="hover:bg-gray-800 transition p-3 rounded-full ">
                        <IconSendMsg className="h-4.5" />
                        전송
                    </div>
                </button>
            </div>
            <p className="text-center text-sm text-gray-200 mt-1">
                Gemini AI는 원하는 대상의 부가설명을 해주면 더 정확한 감정분석을 합니다.
            </p>
            <p className="text-center text-sm text-gray-200 mt-1 mb-4">
                Gemini AI는 이상한 답변을 할 수도 있습니다
            </p>
            {loading && <InputLoadingBar />}
            {modal && <ToastChat message="감정이 전달 되었습니다." />}
        </div>
    );
};

export default InputMessage;

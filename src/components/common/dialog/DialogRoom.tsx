import { useRef, useEffect } from "react";
import { useDialogStore } from "../../../config/store";
import ButtonEmoTree from "../button/ButtonEmoTree";
import DialogHandle from "./DialogHandle";
import { motion } from "framer-motion";
import { Sentiment } from "../../../config/types";
import BadgeAngry from "../badge/BadgeAngry";
import BadgeIndifference from "../badge/BadgeIndifference";
import BadgeHappy from "../badge/BadgeHappy";
import BadgeSorrow from "../badge/BadgeSorrow";
import BadgeWorry from "../badge/BadgeWorry";
import ButtonEmoTreeDisabled from "../button/ButtonEmoTreeDisabled";

const DialogRoom = () => {
    const { selected_tree, messages } = useDialogStore();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages.user]);

    const sentimentElements = {
        anger: <BadgeAngry />,
        happiness: <BadgeHappy />,
        sadness: <BadgeSorrow />,
        worry: <BadgeWorry />,
        indifference: <BadgeIndifference />,
    };

    const renderPositiveSentiments = (sentiments: Sentiment) => {
        return Object.entries(sentiments).map(([key, value]) => {
            if (parseFloat(value) > 3 && key in sentimentElements) {
                return (
                    <div key={key}>{sentimentElements[key as keyof typeof sentimentElements]}</div>
                );
            }
            return null;
        });
    };

    if (messages.user.length === 0 && messages.ai.length === 0)
        return <DialogHandle text={"현재 대화내역이 없습니다."} />;

    return (
        <div className="w-full h-full text-white overflow-y-auto overflow-x-hidden">
            <div>
                {messages.user.map((dialogItem, index) => (
                    <div key={index}>
                        <motion.div
                            transition={{ delay: 0.5, duration: 0.5, type: "just" }}
                            animate={{ opacity: [0, 1] }}
                        >
                            <div className="mb-4 pr-8 w-full">
                                <div className="p-8 bg-gray-800 rounded-md w-10/12 ml-auto break-words whitespace-pre-line">
                                    {dialogItem.message}
                                </div>
                            </div>
                            <div className="mb-10">
                                <div className="p-8 border-b border-gray-800">
                                    <p className="text-gray-200 text-lg font-title mb-4">
                                        감정구슬이 보이기 시작한다 !
                                    </p>
                                    {messages.ai[index].message}
                                </div>
                                <div className="p-8 border-b border-gray-800">
                                    <p className="text-gray-200 text-lg font-title mb-6">
                                        감정 키워드 !
                                    </p>
                                    <div className="flex gap-2">
                                        {renderPositiveSentiments(messages.ai[index].sentiments)}
                                    </div>
                                </div>
                                {!messages.ai[index].applied_state ? (
                                    <div className="p-8 border-b border-gray-600 pb-10">
                                        <p className="text-gray-200 text-lg font-title mb-4">
                                            감정을 전달하면
                                            <span className="text-primary mx-1">
                                                {selected_tree.tree_name}
                                            </span>
                                            나무가 성장합니다!
                                        </p>

                                        <ButtonEmoTree aiUuid={messages.ai[index].message_uuid}>
                                            감정을 나무에 전달하기
                                        </ButtonEmoTree>
                                    </div>
                                ) : (
                                    <div className="p-8 border-b border-gray-600 pb-10">
                                        <ButtonEmoTreeDisabled />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
            <div ref={messagesEndRef} />
        </div>
    );
};

export default DialogRoom;

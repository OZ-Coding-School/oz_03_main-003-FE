import React from "react";
import { IconSendMsg } from "../IconData";

const InputChat = () => {
    return (
        <div className="border border-color-white py-2.4 px-5 rounded-full flex w-80 box-border">
            <input
                type="text"
                className="bg-transparent outline-none text-white flex-grow"
                placeholder="대화를 입력해주세요."
            />
            <button type="button" className="text-zero fill-white w-4.5">
                <IconSendMsg />
                전송
            </button>
        </div>
    );
};

export default InputChat;

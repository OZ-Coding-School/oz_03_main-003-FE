import { IconSendMsg } from "../../../config/IconData";

const InputChat = () => {
    return (
        <div className="border border-color-white py-[6px] px-5 rounded-full flex w-80 box-border">
            <input
                type="text"
                className="bg-transparent outline-none text-white flex-grow"
                placeholder="대화를 입력해주세요."
            />
            <div className="rounded-full w-[36px] h-[36px] flex justify-center items-center hover:bg-gray-800 transition">
                <button type="button" className="text-zero fill-white w-4.5 h-4.5">
                    <IconSendMsg />
                    전송
                </button>
            </div>
        </div>
    );
};

export default InputChat;

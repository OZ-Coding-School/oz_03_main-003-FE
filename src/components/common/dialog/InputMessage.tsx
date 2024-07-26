import { IconSendMsg } from "../../../config/IconData";

const InputMessage = () => {
    return (
        <>
            <div className="border border-color-white py-[6px] px-5 rounded-full flex w-full box-border">
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
            <p className="text-center text-sm  text-gray-200 mt-1 mb-4">
                emotree AI는 원하는 대상의 부가설명을 해주면 더 정확한 감정분석을 합니다.
            </p>
        </>
    );
};

export default InputMessage;

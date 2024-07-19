import { IconChange, IconDeleteBtn, IconDetail, IconUpdate } from "../../config/IconData";
import { twMerge as tw } from "tailwind-merge";

const ModalGridSetting = () => {
    return (
        <>
            <div className="relative border w-40 h-40 border-gray-600 mt-32">
                <div
                    className={tw(
                        "border border-gray-600 rounded-full",
                        "flex fill-gray-200 text-zero p-1 max-w-auto",
                        "absolute -top-20 left-1/2 -translate-x-1/2"
                    )}
                >
                    <button
                        type="button"
                        className="w-8 py-1 px-2 hover:bg-gray-600 transition rounded-full mr-1"
                    >
                        <IconDetail />
                        확대
                    </button>
                    <button
                        type="button"
                        className="w-8 py-1 px-2 hover:bg-gray-600 transition rounded-full mr-1"
                    >
                        <IconUpdate />
                        수정
                    </button>
                    <button
                        type="button"
                        className="w-8 py-1 px-2 hover:bg-gray-600 transition rounded-full mr-1"
                    >
                        <IconChange />
                        위치변경
                    </button>
                    <button
                        type="button"
                        className="w-8 py-1 px-2 hover:bg-gray-600 transition rounded-full"
                    >
                        <IconDeleteBtn />
                        삭제
                    </button>
                </div>
            </div>
        </>
    );
};

export default ModalGridSetting;

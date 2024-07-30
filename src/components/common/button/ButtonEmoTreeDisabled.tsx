import { twMerge as tw } from "tailwind-merge";

const ButtonEmoTreeDisabled = () => {
    return (
        <>
            <button
                className={tw(
                    "font-title cursor-default text-base select-none text-white text-center items-center",
                    "w-[220px] h-[48px] bg-gradient-to-l relative z-0",
                    "bg-gray-800",
                    "border border-gray-600"
                )}
            >
                <div
                    style={{
                        textShadow: "0 2px 5px rgba(0, 0, 0, 0.5)",
                    }}
                    className="absolute text-gray-600 w-full h-full top-0 left-0 flex justify-center items-center z-10"
                >
                    감정을 나무에 전달하기
                </div>
            </button>
        </>
    );
};

export default ButtonEmoTreeDisabled;

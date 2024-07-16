import { twMerge as tw } from "tailwind-merge";

interface BarProps {
    value: number;
    text?: string;
}

const Bar = ({ value = 1, text }: BarProps) => {
    // value를 0에서 100 사이의 값으로 제한
    const clampedValue = Math.min(100, Math.max(0, value));

    return (
        <>
            <div className="w-full font-title flex items-center text-white">{text}</div>
            <div className="w-full relative rounded-full h-3 mb-2">
                <div
                    className={tw(
                        "h-full rounded-full transition-all duration-300 ease-in-out",
                        clampedValue < 30
                            ? "bg-literal-angry"
                            : clampedValue < 50
                              ? "bg-orange-400"
                              : clampedValue < 98
                                ? "bg-literal-happy"
                                : "bg-green-500"
                    )}
                    style={{ width: `${clampedValue}%` }}
                ></div>
            </div>
        </>
    );
};

export default Bar;

import { twMerge as tw } from "tailwind-merge";

const Color = ({ color, text, type }: { color: string; text: string; type?: string }) => {
    return (
        <div
            className={tw(
                type && "text-white",
                color,
                "w-[160px] h-[177px] flex flex-col justify-between pt-4 pb-4 pl-2 pr-2"
            )}
        >
            <div>{text}</div>
        </div>
    );
};

export default Color;

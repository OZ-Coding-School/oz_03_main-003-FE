import { twMerge as tw } from "tailwind-merge";
import { IconHappy } from "../../../config/IconData";

const BadgeHappy = () => {
    return (
        <div
            className={tw(
                "bg-literal-happy text-black",
                "px-4 w-24 h-10 font-title",
                "flex items-center justify-center select-none"
            )}
        >
            <IconHappy className="w-5 mr-2 " />
            기쁨
        </div>
    );
};

export default BadgeHappy;

import { twMerge as tw } from "tailwind-merge";
import { IconWorry } from "../../../config/IconData";

const BadgeWorry = () => {
    return (
        <div
            className={tw(
                "bg-literal-worry",
                "px-4 w-24 h-10 font-title",
                "flex items-center justify-center select-none"
            )}
        >
            <IconWorry className="w-5 mr-2" />
            걱정
        </div>
    );
};

export default BadgeWorry;

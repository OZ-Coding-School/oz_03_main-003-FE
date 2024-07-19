import { twMerge as tw } from "tailwind-merge";
import { IconJoy } from "../../config/IconData";

const BadgeJoy = () => {
    return (
        <div
            className={tw(
                "bg-literal-joy",
                "px-4 w-24 h-10 font-title",
                "flex items-center justify-center select-none"
            )}
        >
            <IconJoy className="w-5 mr-1" />
            즐거움
        </div>
    );
};

export default BadgeJoy;

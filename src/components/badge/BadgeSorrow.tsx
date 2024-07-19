import { twMerge as tw } from "tailwind-merge";
import { IconSorrow } from "../../config/IconData";

const BadgeSorrow = () => {
    return (
        <div
            className={tw(
                "bg-literal-sorrow",
                "px-4 w-24 h-10 font-title",
                "flex items-center justify-center select-none"
            )}
        >
            <IconSorrow className="w-5 mr-2" />
            슬픔
        </div>
    );
};

export default BadgeSorrow;

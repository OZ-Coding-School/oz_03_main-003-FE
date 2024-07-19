import { twMerge as tw } from "tailwind-merge";
import { IconIndifference } from "../../config/IconData";

const BadgeIndifference = () => {
    return (
        <div
            className={tw(
                "bg-gray-600",
                "px-4 w-24 h-10 font-title",
                "flex items-center justify-center select-none"
            )}
        >
            <IconIndifference className="w-5 pt-2 mr-1" />
            무관심
        </div>
    );
};

export default BadgeIndifference;

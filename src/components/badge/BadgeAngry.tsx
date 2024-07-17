import { twMerge as tw } from "tailwind-merge";
import { IconAngry } from "../../IconData";

const BadgeAngry = () => {
    return (
        <div
            className={tw(
                "bg-literal-angry",
                "px-4 w-24 h-10 font-title",
                "flex items-center justify-center select-none"
            )}
        >
            <IconAngry className="w-3.5 mr-2" />
            분노
        </div>
    );
};

export default BadgeAngry;

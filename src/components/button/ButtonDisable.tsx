import { PropsWithChildren } from "react";
import { twMerge as tw } from "tailwind-merge";

interface ButtonProps extends PropsWithChildren {
    className?: string;
    type?: "submit" | "reset" | "button";
}

const ButtonDisable = ({ className, type = "button", children }: ButtonProps) => {
    return (
        <button
            disabled
            type={type}
            className={tw(
                "bg-gray-600 select-none text-sm text-gray-400",
                "w-[99px] h-[40px] text-center",
                className
            )}
        >
            {children}
        </button>
    );
};

export default ButtonDisable;

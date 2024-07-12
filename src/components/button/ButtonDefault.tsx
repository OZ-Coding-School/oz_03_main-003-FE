import { PropsWithChildren } from "react";
import { twMerge as tw } from "tailwind-merge";

interface ButtonProps extends PropsWithChildren {
    className?: string;
    type?: "submit" | "reset" | "button";
    onClick?: () => void;
}

const ButtonDefault = ({ className, type = "button", onClick, children }: ButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={tw(
                "font-light select-none text-sm text-white text-center",
                "bg-gray-600 w-[99px] h-[40px]",
                "hover:bg-gray-400 hover:font-medium transition",
                className
            )}
        >
            {children}
        </button>
    );
};

export default ButtonDefault;

import { PropsWithChildren } from "react";
import { twMerge as tw } from "tailwind-merge";

interface ButtonProps extends PropsWithChildren {
    className?: string;
    type?: "submit" | "reset" | "button";
    onClick?: () => void;
    onMouseUp?: () => void;
}

const ButtonError = ({ className, type = "button", onClick, onMouseUp, children }: ButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            onMouseUp={onMouseUp}
            className={tw(
                "font-light text-sm select-none text-white text-center",
                "bg-gray-600 px-6 h-[48px]",
                "hover:bg-literal-error transition",
                className
            )}
        >
            {children}
        </button>
    );
};

export default ButtonError;

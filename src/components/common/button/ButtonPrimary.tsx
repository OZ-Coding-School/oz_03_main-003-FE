import { PropsWithChildren } from "react";
import { twMerge as tw } from "tailwind-merge";

interface ButtonProps extends PropsWithChildren {
    className?: string;
    type?: "submit" | "reset" | "button";
    onClick?: () => void;
}

const ButtonPrimary = ({ className, type = "button", onClick, children }: ButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={tw(
                "select-none text-sm text-black text-center",
                "bg-primary w-[99px] h-[40px]",
                "hover:bg-primary-light hover:font-medium transition",
                className
            )}
        >
            {children}
        </button>
    );
};

export default ButtonPrimary;

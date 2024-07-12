import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { twMerge as tw } from "tailwind-merge";

interface ButtonProps extends PropsWithChildren {
    className?: string;
    type?: "submit" | "reset" | "button";
    onClick?: () => void;
}

const ButtonDefault = ({ className, type = "button", onClick, children }: ButtonProps) => {
    return (
        <>
            <motion.button
                whileHover={{
                    backgroundPosition: "100% 0",
                    transition: { duration: 0.3 },
                }}
                type={type}
                onClick={onClick}
                className={tw(
                    "font-light font-title text-base select-none text-white text-center",
                    "w-[182px] h-[40px] bg-gradient-to-l relative",
                    "bg-gradient-to-r from-[#B88BFF] via-[#FFB4A2] to-[#8BFFB2]",
                    "bg-[length:200%_100%] border border-white",
                    className
                )}
            >
                {children}
                <div className="w-full h-full absolute "></div>
            </motion.button>
        </>
    );
};

export default ButtonDefault;

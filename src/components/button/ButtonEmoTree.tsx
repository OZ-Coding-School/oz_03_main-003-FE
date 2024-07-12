import { motion } from "framer-motion";
import { PropsWithChildren, useState } from "react";
import { twMerge as tw } from "tailwind-merge";

interface ButtonProps extends PropsWithChildren {
    className?: string;
    type?: "submit" | "reset" | "button";
    onClick?: () => void;
}

const ButtonDefault = ({ className, type = "button", onClick, children }: ButtonProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <>
            <motion.button
                whileHover={{
                    backgroundPosition: "100% 0",
                    transition: { duration: 0.5 },
                }}
                type={type}
                onClick={onClick}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={tw(
                    "font-light font-title text-base select-none text-white text-center",
                    "w-[230px] h-[40px] bg-gradient-to-l relative",
                    "bg-gradient-to-r from-[#B88BFF] via-[#FFB4A2] to-[#8BFFB2]",
                    "bg-[length:200%_100%] border border-white",
                    className
                )}
            >
                <div
                    style={{
                        textShadow: "4px 0 4px rgba(0, 0, 0, 0.25)",
                    }}
                    className="absolute  w-full h-full top-0 left-0 flex justify-center items-center z-10"
                >
                    {children}
                </div>
                <img
                    className="absolute w-[37px] h-[43px] z-20 -top-3 -left-2 animate-bounce"
                    src="/icon-stars.png"
                    loading="lazy"
                    style={{
                        filter: "drop-shadow(4px 0 4px rgba(0, 0, 0, 0.25))",
                    }}
                ></img>
                <div
                    className={tw(
                        "w-full transition h-full absolute bg-black z-0 top-0 left-0",
                        hovered ? "opacity-0" : "opacity-40"
                    )}
                ></div>
            </motion.button>
        </>
    );
};

export default ButtonDefault;

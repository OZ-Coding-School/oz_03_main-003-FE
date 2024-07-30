import { twMerge as tw } from "tailwind-merge";
import { PropsWithChildren } from "react";
import { IconGemini, IconTopArw, LogoGoogle } from "../../../config/IconData";
import { motion } from "framer-motion";

interface ButtonProps extends PropsWithChildren {
    type?: "submit" | "reset" | "button";
    onClick?: () => void;
}

const ButtonSignInGoogle = ({ type = "button", onClick }: ButtonProps) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="select-none fixed left-2/4 bottom-[60px] transform -translate-x-1/2 z-30 text-center">
            <p className="flex text-white mb-[10px] items-center justify-center">
                Emotree uses <IconGemini className="ml-1" />
            </p>
            <div className="flex justify-center items-center">
                <motion.button
                    initial={{ scale: 0.95 }}
                    whileHover={{ scale: [0.95, 1] }}
                    type={type}
                    onClick={onClick}
                    className={tw(
                        "flex items-center pl-6",
                        "bg-gray-800 border border-gray-200 rounded-full text-white",
                        "w-[320px] h-[60px]"
                    )}
                >
                    <LogoGoogle className="fill-white w-6 h-6 mr-4" />
                    <div>Sign in with Google</div>
                </motion.button>
                <motion.button
                    initial={{ translateY: 0 }}
                    whileHover={{ translateY: [0, -5] }}
                    transition={{ duration: 0.5, type: "spring" }}
                    whileTap={{ translateY: [0, -15, 0] }}
                    type="button"
                    onClick={scrollToTop}
                    className="hover:border-white text-zero w-12 h-12 ml-5 border border-gray-200 flex items-center justify-center rounded-full bg-gray-800"
                >
                    <IconTopArw className="" />
                    상단으로
                </motion.button>
            </div>
        </div>
    );
};

export default ButtonSignInGoogle;

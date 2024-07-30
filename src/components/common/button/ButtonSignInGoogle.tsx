import { twMerge as tw } from "tailwind-merge";
import { PropsWithChildren } from "react";
import { IconGemini, IconTopArw, LogoGoogle } from "../../../config/IconData";

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
        <div className=" fixed left-2/4 bottom-[60px] transform -translate-x-1/2 z-30 text-center">
            <p className="flex text-white mb-[10px] items-center justify-center">
                Emotree uses <IconGemini className="ml-1" />
            </p>
            <div className="flex justify-center items-center">
                <button
                    type={type}
                    onClick={onClick}
                    className={tw(
                        "flex items-center pl-6 transition",
                        "bg-gray-800 border border-gray-200 rounded-full text-white",
                        "w-[320px] h-[60px]"
                    )}
                >
                    <LogoGoogle className="fill-white w-6 h-6 mr-4" />
                    <div>Sign in with Google</div>
                </button>
                <button
                    type="button"
                    onClick={scrollToTop}
                    className="text-zero w-12 h-12 ml-5 border border-gray-200 flex items-center justify-center rounded-full bg-gray-800"
                >
                    <IconTopArw />
                    상단으로
                </button>
            </div>
        </div>
    );
};

export default ButtonSignInGoogle;

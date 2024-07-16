import { twMerge as tw } from "tailwind-merge";
import { PropsWithChildren } from "react";
import { LogoKakao } from "../../IconData";

interface ButtonProps extends PropsWithChildren {
    type?: "submit" | "reset" | "button";
    onClick?: () => void;
}

const ButtonSignInGoogle = ({ type = "button", onClick }: ButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={tw(
                "flex items-center z-10 pl-6 transition",
                "bg-gray-800 hover:bg-gray-600 border-gray-300 text-white",
                "w-[300px] h-[48px]"
            )}
        >
            <LogoKakao className="fill-white w-6 h-6 mr-4" />
            <div>Sign in with Kakao</div>
        </button>
    );
};

export default ButtonSignInGoogle;

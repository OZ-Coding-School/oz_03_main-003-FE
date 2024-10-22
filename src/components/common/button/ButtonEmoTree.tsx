import { motion } from "framer-motion";
import { PropsWithChildren, useState } from "react";
import { twMerge as tw } from "tailwind-merge";
import useSound from "use-sound";
import btnSendTree from "../../../assets/sound/btn_sendTree.mp3";
import { treeApi } from "../../../api";
import { useDialogStore, useModalStore } from "../../../config/store";
import useVerify from "../../../hook/useVerify";

interface ButtonProps extends PropsWithChildren {
    className?: string;
    type?: "submit" | "reset" | "button";
    aiUuid: string;
}

const ButtonEmoTree = ({ className, type = "button", aiUuid, children }: ButtonProps) => {
    const [hovered, setHovered] = useState(false);
    const { selected_tree, messages, setStateChange } = useDialogStore();
    const { checkLoginStatus } = useVerify();
    const [playTree] = useSound(btnSendTree, { volume: 0.75 });
    const { setModal } = useModalStore();

    const currentIndex = messages.ai.findIndex((item) => item.message_uuid === aiUuid);

    const handleClick = async () => {
        await checkLoginStatus();
        await treeApi.updateEmotions(selected_tree.tree_uuid, aiUuid);
        setStateChange(currentIndex);
        playTree();
        setModal(true);
    };

    return (
        <>
            <motion.button
                whileHover={{
                    backgroundPosition: "100% 0",
                    transition: { duration: 0.5 },
                }}
                type={type}
                onClick={handleClick}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={tw(
                    "font-title text-base select-none text-white text-center items-center",
                    "w-[220px] h-[48px] bg-gradient-to-l relative z-0",
                    "bg-gradient-to-r from-[#B88BFF] via-[#FFB4A2] to-[#8BFFB2]",
                    "bg-[length:200%_100%] border border-white",
                    className
                )}
            >
                <div
                    style={{
                        textShadow: "0 2px 5px rgba(0, 0, 0, 0.5)",
                    }}
                    className="absolute w-full h-full top-0 left-0 flex justify-center items-center z-10"
                >
                    {children}
                </div>
                <img
                    className="absolute w-[37px] h-[43px] z-20 -top-2 -left-1 animate-bounce"
                    src="/icon-stars.png"
                    loading="lazy"
                    style={{
                        filter: "drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))",
                    }}
                ></img>
                <div
                    className={tw(
                        "w-full transition h-full absolute bg-black z-0 top-0 left-0",
                        hovered ? "opacity-15" : "opacity-60"
                    )}
                ></div>
            </motion.button>
        </>
    );
};

export default ButtonEmoTree;

import { twMerge as tw } from "tailwind-merge";
import {
    IconAngry,
    IconTooltip,
    IconHappy,
    IconIndifference,
    IconSorrow,
    IconWorry,
    IconUpdate,
} from "../../../config/IconData";
import UserInfoBadgeContent from "./UserInfoBadgeContent";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ModalTooltip from "../modal/ModalTooltip";
import useSound from "use-sound";
import collapseSound from "../../../assets/sound/btn_collapse.mp3";
import ModalEditProfile from "../modal/ModalEditProfile";

const UserInfoBadge = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [modalOn, setModalOn] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [playCollapse] = useSound(collapseSound, { volume: 0.75 });

    const modalOnHandler = () => {
        setModalOn(true);
        playCollapse();
    };

    const modalOffHandler = () => {
        setModalOn(false);
    };

    return (
        <div className="bg-gray-800 mt-5 w-[560px] h-[450px] p-5">
            <div className="relative flex font-title text-base gap-2 text-gray-200">
                <div>Emotion Collections</div>
                <div className="w-4">
                    <IconTooltip
                        className={tw(
                            "w-4 h-4 fill-gray-400 mt-[2px]",
                            "cursor-help hover:fill-white transition"
                        )}
                        onMouseEnter={() => setIsVisible(true)}
                        onMouseLeave={() => setIsVisible(false)}
                    />
                </div>
                {isVisible && (
                    <motion.div
                        initial={{ translateX: 0, opacity: 1 }}
                        transition={{ duration: 1, type: "spring" }}
                        animate={{ translateX: [20, 0], opacity: [0, 1] }}
                        exit={{ translateX: 20, opacity: 0 }}
                        className="absolute z-10 right-28"
                    >
                        <ModalTooltip type="COLLECTION" />
                    </motion.div>
                )}
            </div>
            <article className="flex w-full justify-center flex-col items-center">
                <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="mt-4 w-12 h-12 relative rounded-full border-2 border-gray-200"
                >
                    <img src="/img/badge_placeholder.png"></img>
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                onClick={() => modalOnHandler()}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="cursor-pointer absolute bg-gray-800 top-0 w-full h-full rounded-full flex justify-center items-center"
                            >
                                <IconUpdate className="w-1/2 fill-primary" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className="text-sm text-gray-200">기본 프로필</div>
            </article>
            <article className="gap-[88px] flex w-full justify-center items-center mt-2">
                <IconAngry className="w-5 h-5 fill-literal-angry" />
                <IconHappy className="w-5 h-5 fill-literal-happy" />
                <IconSorrow className="w-5 h-5 fill-literal-sorrow" />
                <IconWorry className="w-5 h-5 fill-literal-worry" />
                <IconIndifference className="w-5 h-5 fill-gray-600" />
            </article>
            <article className="px-[18px] flex mt-4 w-full justify-between items-center">
                <UserInfoBadgeContent type="anger" />
                <UserInfoBadgeContent type="happiness" />
                <UserInfoBadgeContent type="sadness" />
                <UserInfoBadgeContent type="worry" />
                <UserInfoBadgeContent type="indifference" />
            </article>
            {modalOn && (
                <ModalEditProfile url={"/img/badge_placeholder.png"} onClose={modalOffHandler} />
            )}
        </div>
    );
};

export default UserInfoBadge;

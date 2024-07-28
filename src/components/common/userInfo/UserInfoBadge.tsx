import { twMerge as tw } from "tailwind-merge";
import {
    IconAngry,
    IconTooltip,
    IconHappy,
    IconIndifference,
    IconSorrow,
    IconWorry,
} from "../../../config/IconData";
import UserInfoBadgeContent from "./UserInfoBadgeContent";
import { useState } from "react";
import { motion } from "framer-motion";
import ModalTooltip from "../modal/ModalTooltip";

const UserInfoBadge = () => {
    const [isVisible, setIsVisible] = useState(false);

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
            <div className="gap-[82.5px] flex w-full justify-center items-center mt-10">
                <IconAngry className="w-5 h-5 fill-literal-angry" />
                <IconHappy className="w-5 h-5 fill-literal-happy" />
                <IconSorrow className="w-5 h-5 fill-literal-sorrow" />
                <IconWorry className="w-5 h-5 fill-literal-worry" />
                <IconIndifference className="w-5 h-5 fill-gray-600" />
            </div>
            <div className="px-[18px] flex mt-4 w-full justify-between items-center">
                <UserInfoBadgeContent type="anger" />
                <UserInfoBadgeContent type="happiness" />
                <UserInfoBadgeContent type="sadness" />
                <UserInfoBadgeContent type="worry" />
                <UserInfoBadgeContent type="indifference" />
            </div>
        </div>
    );
};

export default UserInfoBadge;

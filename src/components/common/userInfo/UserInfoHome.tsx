import React, { useState } from "react";
import { IconTooltip } from "../../../config/IconData";
import { twMerge as tw } from "tailwind-merge";
import ModalTooltip from "../modal/ModalTooltip";
import { motion } from "framer-motion";
import { useUserStore } from "../../../config/store";
const UserInfoHome = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { userData } = useUserStore();

    return (
        <div className="bg-gray-800 text-white w-[340px] fixed z-10 top-[149px] left-5 select-none">
            <div className="flex p-5 pb-6 border-b border-gray-600">
                <div className="relative w-12 h-12 border border-white rounded-full">
                    <img
                        src={userData.user.imgUrl || "/img/profile-placeholder.png"}
                        alt={"Profile Image"}
                        className="w-12 h-12 rounded-full"
                    />
                    <div className="w-6 h-6 absolute bottom-[-6px] right-[-6px] border border-primary rounded-full bg-gray-800 text-center text-sm">
                        {userData.level.userLevel}
                    </div>
                </div>
                <div className="ml-5 flex-grow flex flex-col justify-end">
                    <p className="font-title text-lg">{userData.user.username}</p>
                    <div className="rounded-sm border h-2">
                        <div
                            className="bg-primary h-full animate-width"
                            style={
                                {
                                    "--target-width": `${userData.level.userExperience}%`,
                                } as React.CSSProperties
                            }
                        ></div>
                    </div>
                </div>
            </div>
            <div className="p-5 relative">
                <div className="absolute top-5 right-5">
                    <IconTooltip
                        className={tw(
                            "w-4 h-4 fill-gray-400 mt-[2px]",
                            "cursor-help hover:fill-white transition"
                        )}
                        onMouseEnter={() => setIsVisible(true)}
                        onMouseLeave={() => setIsVisible(false)}
                    />

                    {isVisible && (
                        <motion.div
                            initial={{ translateX: 0, opacity: 1 }}
                            transition={{ duration: 1, type: "spring" }}
                            animate={{ translateX: [20, 0], opacity: [0, 1] }}
                            exit={{ translateX: 20, opacity: 0 }}
                            className="absolute z-20 left-[38px] top-[4px]"
                        >
                            <ModalTooltip type="USERINFO" />
                        </motion.div>
                    )}
                </div>
                <div className="flex">
                    <ul className="w-20 text-gray-200 font-body font-semibold">
                        <li className="mb-3">잔여 나무</li>
                        <li className="mb-3">정원 크기</li>
                    </ul>
                    <ul>
                        <li className="mb-3">
                            : {userData.tree.treeCurrent} / {userData.tree.treeMax}
                        </li>
                        <li className="mb-3">
                            : {userData.tree.gridSize} x {userData.tree.gridSize}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserInfoHome;

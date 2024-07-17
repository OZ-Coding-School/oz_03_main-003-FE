import React, { useState } from "react";
import { UserInfoData, UserInfoDummy } from "./UserInfoDummy";
import { IconTooltip } from "../../IconData";
import { twMerge as tw } from "tailwind-merge";
import ModalTooltip from "../modal/ModalTooltip";
import { AnimatePresence, motion } from "framer-motion";

const UserInfoHome = () => {
    const [data, setData] = useState<UserInfoData>(UserInfoDummy);
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="bg-gray-800 text-white">
            <div className="flex p-5 pb-6 border-b border-gray-600">
                <div className="relative w-12 h-12 border border-white rounded-full mr-[10px]">
                    <img
                        src={data.imgUrl}
                        alt={data.name}
                        className="w-full h-full object-cover rounded-full"
                    />
                    <div className="w-6 h-6 absolute bottom-[-6px] right-[-6px] border border-primary rounded-full bg-gray-800 text-center text-sm">
                        00
                    </div>
                </div>
                <div className="w-full flex flex-col justify-end">
                    <p className="font-title text-lg">{data.name}</p>
                    <div className="rounded-sm border h-2">
                        <div
                            className="bg-primary h-full animate-width"
                            style={{ "--target-width": `${data.growth}%` } as React.CSSProperties}
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
                    <AnimatePresence>
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
                    </AnimatePresence>
                </div>
                <div className="flex">
                    <ul className="w-20 text-gray-200">
                        <li className="mb-3">tree</li>
                        <li className="mb-3">grid size</li>
                    </ul>
                    <ul>
                        <li className="mb-3">
                            : {data.treeCurrent} / {data.treeMax}
                        </li>
                        <li className="mb-3">
                            : {data.gridSize} * {data.gridSize}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserInfoHome;

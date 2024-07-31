import { useState } from "react";
import { TREE_BADGE } from "../../../config/const";
import { useUserStore } from "../../../config/store";
import { UserTreeEmotionDetail } from "../../../config/types";
import { Emotions } from "../../../config/types";
import { IconUpdate } from "../../../config/IconData";
import { AnimatePresence, motion } from "framer-motion";
import ModalEditProfile from "../modal/ModalEditProfile";
import useSound from "use-sound";
import collapseSound from "../../../assets/sound/btn_collapse.mp3";

const UserInfoBadgeContent = ({ type }: { type: keyof Emotions }) => {
    const [hoverBadge1, setHoverBadge1] = useState(false);
    const [hoverBadge2, setHoverBadge2] = useState(false);
    const [hoverBadge3, setHoverBadge3] = useState(false);
    const [modalOn, setModalOn] = useState(false);
    const [url, setUrl] = useState("");
    const [playCollapse] = useSound(collapseSound, { volume: 0.75 });
    const { userData } = useUserStore();

    const badge = TREE_BADGE.filter((item) => item.badge === type);
    const emotions = userData.treeEmotion as UserTreeEmotionDetail[];

    const emotionSum = emotions.reduce((acc, curr) => {
        return acc + Number(curr.emotions[type]);
    }, 0);

    const modalOnHandler = (url: string) => {
        setModalOn(true);
        setUrl(url);
        playCollapse();
    };

    const modalOffHandler = () => {
        setModalOn(false);
    };

    return (
        <div className="flex flex-col gap-5 items-center">
            <div className="flex flex-col items-center">
                <nav
                    onMouseEnter={() => setHoverBadge1(true)}
                    onMouseLeave={() => setHoverBadge1(false)}
                    className="w-12 h-12 relative rounded-full border-2 border-gray-200"
                >
                    {emotionSum >= 250 ? (
                        <img
                            src={badge[0].url}
                            alt={badge[0].badge}
                            className="w-full transition h-full object-cover rounded-full"
                        />
                    ) : (
                        <img
                            src={"/img/badge_unknown.png"}
                            alt={"미획득 배지"}
                            className="w-full transition h-full object-cover rounded-full"
                        />
                    )}
                    <AnimatePresence>
                        {emotionSum >= 250 && hoverBadge1 && (
                            <motion.div
                                onClick={() => modalOnHandler(badge[0].url)}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="cursor-pointer absolute bg-gray-800 top-0 w-full h-full rounded-full flex justify-center items-center"
                            >
                                <IconUpdate className="w-1/2 fill-primary" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
                <div className="mt-1 text-sm text-gray-200 text-center">
                    {emotionSum >= 250 ? badge[0].type : "미획득"}
                </div>
            </div>

            <div className="flex flex-col items-center">
                <nav
                    onMouseEnter={() => setHoverBadge2(true)}
                    onMouseLeave={() => setHoverBadge2(false)}
                    className="w-12 h-12 relative rounded-full border-2 border-gray-200"
                >
                    {emotionSum >= 500 && (
                        <img
                            src={badge[1].url}
                            alt={badge[1].badge}
                            className="w-full h-full object-cover rounded-full"
                        />
                    )}
                    <AnimatePresence>
                        {emotionSum >= 500 && hoverBadge2 && (
                            <motion.div
                                onClick={() => modalOnHandler(badge[1].url)}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="cursor-pointer absolute bg-gray-800 top-0 w-full h-full rounded-full flex justify-center items-center"
                            >
                                <IconUpdate className="w-1/2 fill-primary" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
                <div className="mt-1 text-sm text-gray-200 text-center">
                    {emotionSum >= 500 ? badge[1].type : "미획득"}
                </div>
            </div>

            <div className="flex flex-col items-center">
                <nav
                    onMouseEnter={() => setHoverBadge3(true)}
                    onMouseLeave={() => setHoverBadge3(false)}
                    className="w-12 h-12 relative rounded-full border-2 border-gray-200"
                >
                    {emotionSum >= 1000 && (
                        <img
                            src={badge[2].url}
                            alt={badge[2].badge}
                            className="w-full h-full object-cover rounded-full"
                        />
                    )}
                    <AnimatePresence>
                        {emotionSum >= 1000 && hoverBadge3 && (
                            <motion.div
                                onClick={() => modalOnHandler(badge[2].url)}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="cursor-pointer absolute bg-gray-800 top-0 w-full h-full rounded-full flex justify-center items-center"
                            >
                                <IconUpdate className="w-1/2 fill-primary" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
                <div className="mt-1 text-sm text-gray-200 text-center">
                    {emotionSum >= 1000 ? badge[2].type : "미획득"}
                </div>
            </div>
            {modalOn && <ModalEditProfile url={url} onClose={modalOffHandler} />}
        </div>
    );
};

export default UserInfoBadgeContent;

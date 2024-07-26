import { useEffect, useRef, useState } from "react";
import { IconClose, IconTooltip } from "../../../config/IconData";
import { twMerge as tw } from "tailwind-merge";
import ModalTreeDetailGraph from "./ModalTreeDetailGraph";
import ModalTooltip from "./ModalTooltip";
import { AnimatePresence, motion } from "framer-motion";
import { useUserStore } from "../../../config/store";
import { UserTreeDetail, UserTreeEmotionDetail } from "../../../config/types";
import { TREE_TYPE } from "../../../config/const";
import { calculateTreeLevel } from "../../../util/utilTreeLevel";
import ButtonPrimary from "../button/ButtonPrimary";
import ButtonDisable from "../button/ButtonDisable";
import { calculateTreeType } from "../../../util/utilTreeType";
import { treeApi } from "../../../api";
import useVerify from "../../../hook/useVerify";
import useInfo from "../../../hook/useInfo";

//? 추후 페이지 제작시 사용

interface ModalTreeDetailProps {
    treeUUID: string;
    onClose: () => void;
}
const ModalTreeDetail = ({ treeUUID, onClose }: ModalTreeDetailProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const { userData } = useUserStore();
    const { checkLoginStatus } = useVerify();
    const { getUserGridInfo } = useInfo();
    const ref = useRef<HTMLDivElement>(null);

    const treeData = userData.treeDetail.find((item) =>
        item.tree_uuid.includes(treeUUID)
    ) as UserTreeDetail;
    const emotionData = userData.treeEmotion.find((item) =>
        item.tree_uuid.includes(treeUUID)
    ) as UserTreeEmotionDetail;
    const treeExperience = calculateTreeLevel(emotionData, treeData.tree_level);

    const closeHandler = () => {
        onClose();
    };

    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    }, []);

    const growHandler = async () => {
        if (treeExperience.emotionMax === null) {
            console.log("모든 값이 같음");
        } else {
            const type = calculateTreeType(treeExperience.emotionMax);

            const requestForm = {
                tree_level: type,
            };
            await checkLoginStatus();
            await treeApi.updateTree(treeUUID, requestForm);
            await getUserGridInfo();
        }
    };

    const devGrowHandler = async () => {
        const type = window.prompt(
            "성장할 레벨 타입을 입력해주세요. \n5를 초과하는 숫자를 입력할 경우 계정 초기화를 해야 합니다."
        );
        if (type) {
            const requestForm = {
                tree_level: Number(type),
            };

            await checkLoginStatus();
            await treeApi.updateTree(treeUUID, requestForm);
            await getUserGridInfo();
        }
    };

    return (
        <>
            <nav
                onClick={closeHandler}
                className="absolute opacity-50 w-full h-screen bg-black"
            ></nav>

            <motion.div
                ref={ref}
                tabIndex={-1}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, type: "tween" }}
                onKeyDown={(e) => {
                    e.key === "Escape" && closeHandler();
                    e.key === "Enter" && closeHandler();
                }}
                className="select-none absolute z-10 left-[370px] top-[140px] p-5 w-[340px] h-fit bg-gray-800 border border-gray-600"
            >
                <div className="w-full flex justify-between">
                    <h1 className="text-gray-200 font-title text-base mb-5">나무 정보</h1>
                    <IconClose
                        onClick={closeHandler}
                        className="w-5 h-5 cursor-pointer fill-gray-600 transition hover:fill-white"
                    />
                </div>
                <article className="mb-[10px]">
                    <div className="text-gray-200 font-title text-sm">이름</div>

                    <div className="text-white text-base">{treeData.tree_name}</div>
                </article>
                <article className="mb-[10px]">
                    <div className="flex gap-2 relative">
                        <div className={TREE_TYPE[treeData.tree_level].style}>
                            {TREE_TYPE[treeData.tree_level].name}
                        </div>
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
                                    className="absolute z-20 left-[150px] top-[2px]"
                                >
                                    <ModalTooltip type="DETAIL" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="text-white text-sm whitespace-pre-wrap">
                        {TREE_TYPE[treeData.tree_level].desc}
                    </div>
                </article>
                <article className="mb-[20px]">
                    <div className="w-full flex justify-between items-center">
                        <div className="text-gray-200 font-title text-sm">성장률</div>
                        <div className="text-gray-200 font-title">{treeExperience.percentage}%</div>
                    </div>
                    <div className="rounded-sm border h-2">
                        <div
                            className="bg-primary h-full animate-width"
                            style={
                                {
                                    "--target-width": `${treeExperience.percentage}%`,
                                } as React.CSSProperties
                            }
                        ></div>
                    </div>
                </article>
                <article>
                    <div className="text-gray-200 font-title text-sm">감정 기록</div>
                    <ModalTreeDetailGraph emotions={emotionData.emotions} />
                </article>
                <div className="flex justify-end gap-2">
                    {treeExperience.percentage === 100 && treeData.tree_level === 0 ? (
                        <ButtonPrimary onClick={growHandler} className="mt-8 text-sm font-title">
                            비료 주기
                        </ButtonPrimary>
                    ) : (
                        <ButtonDisable className="mt-8 text-sm font-title">비료 주기</ButtonDisable>
                    )}
                    <ButtonPrimary onClick={devGrowHandler} className="mt-8 text-sm font-title">
                        (개발)강제 성장
                    </ButtonPrimary>
                </div>
            </motion.div>
        </>
    );
};

export default ModalTreeDetail;

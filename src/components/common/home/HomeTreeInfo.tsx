import useSound from "use-sound";
import ButtonEmoTreeSkeleton from "../button/ButtonEmoTreeSkeleton";
import btnSendTree from "../../../assets/sound/btn_sendTree.mp3";
import { useState } from "react";
import { motion } from "framer-motion";
import { STATIC_TREE_IMG } from "../../../config/const";
const HomeTreeInfo = () => {
    const [playTree] = useSound(btnSendTree, { volume: 0.75 });
    const [index, setIndex] = useState(0);

    const treeChangeHandler = () => {
        playTree();
        if (index === 5) {
            setIndex(0);
        } else {
            setIndex((prev) => prev + 1);
        }
    };

    return (
        <div>
            <div className="text-center mt-[203px] relative">
                <div className=""></div>
                <div className="mt-[105px] w-full relative flex flex-col items-center animate-gravity">
                    <motion.img
                        className="absolute w-[200px] -top-[116px]"
                        src={STATIC_TREE_IMG[index]}
                    ></motion.img>
                    <img src="/img/landing_ground01.png" alt="땅" className="m-auto" />
                </div>
                <ButtonEmoTreeSkeleton onClick={treeChangeHandler} className="mt-12 mb-5">
                    감정을 나무에 전달하기
                </ButtonEmoTreeSkeleton>
                <p className="text-literal-worry">버튼을 클릭하면 나무가 성장합니다</p>
            </div>
        </div>
    );
};

export default HomeTreeInfo;

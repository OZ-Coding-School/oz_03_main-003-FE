import { motion } from "framer-motion";
import { IconLineStar } from "../config/IconData";
import ButtonEmoTreeSkeleton from "./common/button/ButtonEmoTreeSkeleton";
import { TREE_IMG } from "../config/const";
import useSound from "use-sound";
import btnSendTree from "../assets/sound/btn_sendTree.mp3";
import { useState } from "react";

const Landing = () => {
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
        <>
            <div className="text-white w-full">
                <header className="sticky top-0 w-full h-[80px] bg-black mt-10 text-center z-30 flex items-center justify-center">
                    <h1 className="">
                        <img className="w-[184px] m-auto" src="/logo-white.png" alt="emotree"></img>
                    </h1>
                </header>
                <div className="mt-[100px] pb-[80px]">
                    <div className="text-center">
                        <h2 className="font-title text-[32px] leading-5	">AI 감정 분석 서비스</h2>
                        <p className="text-xl mt-[23px]">
                            대화를 ai에게 전달해주세요.
                            <br />
                            대화를 요약하고 상대방이 어떤 감정을 가지고 나와 대화하는지 들여다봅니다
                            !
                        </p>
                    </div>
                    <div className="m-auto mt-[70px] flex justify-center">
                        <img
                            className=""
                            src="../src/assets/images/landing-chat.svg"
                            alt="채팅 이미지"
                        ></img>
                        <div className="mt-[202px]">
                            <motion.div
                                animate={{ opacity: [0, 1] }}
                                transition={{ duration: 1, delay: 1, type: "spring" }}
                            >
                                <IconLineStar className="-ml-[48px]" />
                                <div className="-mt-[12px] ml-[25px]">
                                    <strong>감정구슬이 대화를 확인합니다</strong>
                                    <p>감정구슬이 대화 속 상대방의 대답의 감정을 보여줍니다 </p>
                                </div>
                            </motion.div>
                            <motion.div
                                animate={{ opacity: [0, 1] }}
                                transition={{ duration: 1, delay: 2, type: "spring" }}
                                className="my-[50px]"
                            >
                                <IconLineStar className="-ml-[48px]" />
                                <div className="-mt-[12px] ml-[25px]">
                                    <strong>감정을 파악했습니다</strong>
                                    <p>요약한 대화 속에서 감정키워드를 추출합니다 ! </p>
                                </div>
                            </motion.div>
                            <motion.div
                                animate={{ opacity: [0, 1] }}
                                transition={{ duration: 1, delay: 3, type: "spring" }}
                            >
                                <IconLineStar className="-ml-[48px]" />
                                <div className="-mt-[12px] ml-[25px]">
                                    <strong>감정을 나무에 전달합니다.</strong>
                                    <p>추출된 감정이 나무에게 전달되고, 나무가 성장해요. </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="relative pt-[240px] pb-[180px]">
                        <div className="relative z-10">
                            <div className="text-center">
                                <h2 className="font-title text-[32px] leading-5	">
                                    감정 나무 키우기
                                </h2>
                                <p className="text-xl mt-[23px]">
                                    Emotree에는 다양한 감정나무가 있습니다.
                                    <br />
                                    대화 속의 감정을 나무에 기록하고 나무를 성장시키세요 !
                                </p>
                            </div>
                            <div className="text-center mt-[113px] relative">
                                <div className="">
                                    <strong className="font-title text-[14px] text-primary">
                                        새싹
                                    </strong>
                                    <p className="mt-[2px]">지훈의 감정</p>
                                </div>
                                <div className="mt-[105px] w-full relative flex flex-col items-center animate-gravity">
                                    <motion.img
                                        className="absolute w-[200px] -top-[110px]"
                                        src={TREE_IMG[index]}
                                    ></motion.img>
                                    <img
                                        src="../src/assets/images/landing-ground.svg"
                                        alt="땅"
                                        className="m-auto"
                                    />
                                </div>
                                <ButtonEmoTreeSkeleton
                                    onClick={treeChangeHandler}
                                    className="mt-10 mb-5"
                                >
                                    감정을 나무에 전달하기
                                </ButtonEmoTreeSkeleton>
                                <p>전달하기 버튼을 클릭해보세요.</p>
                            </div>
                        </div>
                        <div className="absolute inset-0 -z-10">
                            <img
                                src="../src/assets/images/landing-bg.png"
                                alt="배경이미지"
                                className="h-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="z-20 mt-[240px] relative bg-black">
                    <div className="text-center">
                        <h2 className="font-title text-[32px] leading-5	">숲을 내 마음대로</h2>
                        <p className="text-xl mt-[23px]">
                            유저는 다양한 나무로 자유롭게 배치해,
                            <br />
                            감정나무 숲을 마음대로 꾸밀 수 있습니다.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="relative left-[50%]">
                            <motion.img
                                className="relative"
                                animate={{ left: [-700, -600], opacity: [0, 1] }}
                                transition={{ duration: 1, delay: 0, type: "tween" }}
                                src="../src/assets/images/landing-ground01.svg"
                            />
                            <motion.img
                                animate={{ opacity: [0, 1] }}
                                transition={{ duration: 1, delay: 1, type: "tween" }}
                                className="absolute -left-[470px] top-[80px] z-10"
                                src="../src/assets/images/landing-forest01.svg"
                            />
                            <motion.img
                                animate={{ opacity: [0, 1] }}
                                transition={{ duration: 1, delay: 1, type: "tween" }}
                                className="absolute -left-[570px] top-[20px]"
                                src="../src/assets/images/landing-forest01.svg"
                            />
                            <motion.img
                                animate={{ opacity: [0, 1] }}
                                transition={{ duration: 1, delay: 1, type: "tween" }}
                                className="absolute -left-[470px] -top-[20px]"
                                src="../src/assets/images/landing-forest01.svg"
                            />
                        </div>
                        <div className="relative -top-[250px] left-[50%]">
                            <motion.img
                                className="relative"
                                animate={{ left: [-100, 0], opacity: [0, 1] }}
                                transition={{ duration: 1, delay: 1, type: "tween" }}
                                src="../src/assets/images/landing-ground02.svg"
                            />
                            <motion.img
                                animate={{ opacity: [0, 1] }}
                                transition={{ duration: 1, delay: 1, type: "tween" }}
                                className="absolute left-[0px] -top-[60px]"
                                src="../src/assets/images/landing-forest02.svg"
                            />
                        </div>
                        <div className="relative -right-[50%] bottom-[260px]">
                            <motion.img
                                className="relative"
                                animate={{ right: [100, 200], opacity: [0, 1] }}
                                transition={{ duration: 1, delay: 1, type: "tween" }}
                                src="../src/assets/images/landing-ground03.svg"
                            />
                            <motion.img
                                animate={{ opacity: [0, 1] }}
                                transition={{ duration: 1, delay: 1, type: "tween" }}
                                className="absolute left-[90px] -top-[45px]"
                                src="../src/assets/images/landing-forest03.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Landing;

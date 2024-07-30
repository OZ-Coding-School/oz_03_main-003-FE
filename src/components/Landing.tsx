import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HomeTreeInfo from "./common/home/HomeTreeInfo";
import HomeChatInfo from "./common/home/HomeChatInfo";
import HomeBg from "./common/home/HomeBg";
import HomeForestInfo from "./common/home/HomeForestInfo";
import HomeTeamInfo from "./common/home/HomeTeamInfo";
import HomeCopyright from "./common/home/HomeCopyright";

const Landing = () => {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const forestSection = document.getElementById("forest-section");

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0,
            }
        );

        if (forestSection) {
            observer.observe(forestSection);
        }

        return () => {
            if (forestSection) {
                observer.unobserve(forestSection);
            }
        };
    }, []);
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
                        <img className="w-[184px] m-auto" src="/logo-white.png" alt="emotree" />
                    </h1>
                </header>
                <div
                    id="analysis-section"
                    className="pt-[100px] pb-[80px] relative z-10 mb-[1080px] bg-black"
                >
                    <div className="text-center">
                        <h2 className="font-title text-[32px] leading-5">AI 감정 분석 서비스</h2>
                        <p className="text-xl mt-[23px]">
                            대화를 ai에게 전달해주세요.
                            <br />
                            대화를 요약하고 상대방이 어떤 감정을 가지고 나와 대화하는지
                            들여다봅니다!
                        </p>
                    </div>
                    <HomeChatInfo />
                </div>
                <div id="tree-section" className="left-0 right-0 fixed top-0 z-0">
                    <div className="relative pt-[140px] pb-[180px]">
                        <div className="relative z-10">
                            <div className="text-center">
                                <h2 className="font-title text-[32px] leading-5">
                                    감정 나무 키우기
                                </h2>
                                <p className="text-xl mt-[23px]">
                                    Emotree에는 다양한 감정나무가 있습니다.
                                    <br />
                                    대화 속의 감정을 나무에 기록하고 나무를 성장시키세요!
                                </p>
                            </div>
                            <HomeTreeInfo />
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
                        <HomeBg />
                    </div>
                </div>
                <motion.div
                    id="forest-section"
                    className="z-20 pt-[240px] relative bg-black"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center">
                        <h2 className="font-title text-[32px] leading-5">숲을 내 마음대로</h2>
                        <p className="text-xl mt-[23px]">
                            유저는 다양한 나무로 자유롭게 배치해,
                            <br />
                            감정나무 숲을 마음대로 꾸밀 수 있습니다.
                        </p>
                    </div>
                    <HomeForestInfo isInView={isInView} />
                    <div className="text-center mb-[100px]">
                        <h3 className="text-gray-200 text-[20px] mb-[10px]">Introduce the team</h3>
                        <p>
                            우리 팀은 인공지능(AI)을 활용한 혁신적인 감정 분석 서비스를
                            개발했습니다. 이 서비스는 사용자들의 <br />
                            감정을 분석하여 그 데이터를 나무에게 전달함으로써 나무가 성장하는 형태의
                            인터랙티브 경험을 제공합니다.
                            <br /> 감정을 시각적으로 표현하고, 사용자들에게 긍정적인 피드백을
                            제공하여 감정 관리와 <br />
                            정서적 성장을 도울 수 있도록 설계되었습니다.
                        </p>
                    </div>
                    <HomeTeamInfo />
                </motion.div>
                <footer className="text-center">
                    <HomeCopyright />
                </footer>
            </div>
        </>
    );
};

export default Landing;

// src/components/home/landing.tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HomeTreeInfo from "./common/home/HomeTreeInfo";
import HomeChatInfo from "./common/home/HomeChatInfo";
import HomeForestInfo from "./common/home/HomeForestInfo";
import HomeTeamInfo from "./common/home/HomeTeamInfo";
import HomeCopyright from "./common/home/HomeCopyright";
import HomeBg from "./common/home/HomeBg";
import { twMerge as tw } from "tailwind-merge";
import generateSparkles from "../util/generateSparkles";
const Sparkle = ({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) => (
    <motion.div
        className="absolute bg-white rounded-full"
        style={{ width: size, height: size, top: y, left: x }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, delay, repeat: Infinity, repeatType: "mirror" }}
    />
);

const Landing = () => {
    const [isInView, setIsInView] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [sparkles, setSparkles] = useState(generateSparkles(50));

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsSticky(scrollPosition > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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

    useEffect(() => {
        const handleResize = () => {
            setSparkles(generateSparkles(50));
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div className="text-white w-full px-3 break-keep">
                <HomeBg />
                <motion.header
                    className={tw(
                        "sticky top-0 w-full h-[80px] z-30 mt-10 text-center flex items-center justify-center",
                        isSticky
                            ? "bg-gradient-to-b from-black via-black to-transparent"
                            : "bg-none"
                    )}
                >
                    <h1>
                        <img className="h-10 m-auto" src="img/logo-primary.png" alt="emotree" />
                    </h1>
                </motion.header>
                <div id="analysis-section" className="pt-24 pb-40 relative">
                    <div className="text-center">
                        <h2 className="font-title text-2xl text-primary-light">
                            AI 감정 분석 서비스
                        </h2>
                        <p className="text-lg mt-6 text-white">
                            대화를 ai에게 전달해주세요.
                            <br />
                            대화를 요약하고 상대방이 어떤 감정을 가지고 나와 대화하는지 분석합니다.
                        </p>
                    </div>
                    <HomeChatInfo />
                </div>
                <div id="tree-section" className="relative py-40">
                    <div className="relative z-10">
                        <div className="text-center">
                            <h2 className="font-title text-2xl text-primary-light">
                                감정 나무 키우기
                            </h2>
                            <p className="text-lg   mt-6 text-white">
                                Emotree에는 다양한 감정나무가 있습니다.
                                <br />
                                대화 속의 감정을 나무에 기록하고 나무를 성장시키세요!
                            </p>
                        </div>
                        <HomeTreeInfo />
                    </div>
                    {sparkles.map((sparkle) => (
                        <Sparkle
                            key={sparkle.id}
                            x={sparkle.x}
                            y={sparkle.y}
                            size={sparkle.size}
                            delay={sparkle.delay}
                        />
                    ))}
                </div>
                <motion.div
                    id="forest-section"
                    className="z-20 pt-40 relative overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center">
                        <h2 className="font-title text-2xl text-primary-light">숲을 내 마음대로</h2>
                        <p className="text-lg  mt-6 text-white">
                            유저는 다양한 나무로 자유롭게 배치해,
                            <br />
                            감정나무 숲을 마음대로 꾸밀 수 있습니다.
                        </p>
                    </div>
                    <div className="absolute w-full h-[160px] bottom-0 bg-gradient-to-b from-transparent via-black to-black z-30"></div>
                    <HomeForestInfo isInView={isInView} />
                </motion.div>
                <footer className="text-center bg-black pt-40 w-full">
                    <div className="text-center mb-[120px]">
                        <h2 className="font-title text-2xl text-primary-light">팀을 소개합니다</h2>
                        <p className="text-lg  mt-6 text-gray-200">
                            우리 팀은 인공지능(AI)을 활용한 혁신적인 감정 분석 서비스를
                            개발했습니다. <br />
                            사용자들의 감정을 분석하여 그 데이터를 나무에게 전달함으로써 나무가
                            성장하는 형태의 인터랙티브 경험을 제공합니다.
                        </p>
                        <p className="text-lg  mb-24 mt-1 text-gray-200">
                            <br /> 감정을 시각적으로 표현하고, 사용자들에게 긍정적인 피드백을
                            제공하여 감정 관리와 <br />
                            정서적 성장을 도울 수 있도록 설계되었습니다.
                        </p>
                        <HomeTeamInfo />
                    </div>
                    <HomeCopyright />
                </footer>
            </div>
        </>
    );
};

export default Landing;

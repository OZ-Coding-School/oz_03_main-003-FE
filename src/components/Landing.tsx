import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IconLineStar, IconBlog, IconGithub } from "../config/IconData";
import ButtonEmoTree from "./common/button/ButtonEmoTree";
import { Link } from "react-router-dom";

const Landing: React.FC = () => {
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

    return (
        <>
            <div className="text-white w-full">
                <header className="sticky top-0 w-full h-[80px] bg-black mt-10 text-center z-30 flex items-center justify-center">
                    <h1 className="">
                        <img className="w-[184px] m-auto" src="/logo-white.png" alt="emotree" />
                    </h1>
                </header>
                <div className="mt-[100px] pb-[80px] relative">
                    <div className="text-center">
                        <h2 className="font-title text-[32px] leading-5">AI 감정 분석 서비스</h2>
                        <p className="text-xl mt-[23px]">
                            대화를 ai에게 전달해주세요.
                            <br />
                            대화를 요약하고 상대방이 어떤 감정을 가지고 나와 대화하는지
                            들여다봅니다!
                        </p>
                    </div>
                    <div className="m-auto mt-[70px] flex justify-center">
                        <img
                            className=""
                            src="../src/assets/images/landing-chat.svg"
                            alt="채팅 이미지"
                        />
                        <div className="mt-[202px]">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1, type: "spring" }}
                            >
                                <IconLineStar className="-ml-[48px]" />
                                <div className="-mt-[12px] ml-[25px]">
                                    <strong>감정구슬이 대화를 확인합니다</strong>
                                    <p>감정구슬이 대화 속 상대방의 대답의 감정을 보여줍니다</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 2, type: "spring" }}
                                className="my-[50px]"
                            >
                                <IconLineStar className="-ml-[48px]" />
                                <div className="-mt-[12px] ml-[25px]">
                                    <strong>감정을 파악했습니다</strong>
                                    <p>요약한 대화 속에서 감정키워드를 추출합니다!</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 3, type: "spring" }}
                            >
                                <IconLineStar className="-ml-[48px]" />
                                <div className="-mt-[12px] ml-[25px]">
                                    <strong>감정을 나무에 전달합니다.</strong>
                                    <p>추출된 감정이 나무에게 전달되고, 나무가 성장해요.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="left-0 right-0">
                    <div className="relative pt-[240px] pb-[180px]">
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
                            <div className="text-center mt-[113px]">
                                <div>
                                    <strong className="font-title text-[14px] text-primary">
                                        새싹
                                    </strong>
                                    <p className="mt-[2px]">지훈의 감정</p>
                                </div>
                                <div className="mt-[70px]">
                                    <img
                                        src="../src/assets/images/landing-ground.svg"
                                        alt="땅"
                                        className="m-auto"
                                    />
                                </div>
                                <ButtonEmoTree className="mt-10 mb-5">
                                    감정을 나무에 전달하기
                                </ButtonEmoTree>
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
                    <div className="relative left-[50%]">
                        <motion.img
                            className="relative"
                            initial={{ left: -100, opacity: 0 }}
                            animate={
                                isInView ? { left: -600, opacity: 1 } : { left: -400, opacity: 0 }
                            }
                            transition={{ duration: 1, delay: 1, type: "tween" }}
                            src="../src/assets/images/landing-ground01.svg"
                        />
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 1, delay: 1, type: "tween" }}
                            className="absolute -left-[470px] top-[80px] z-10"
                            src="../src/assets/images/landing-forest01.svg"
                        />
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 1, delay: 1, type: "tween" }}
                            className="absolute -left-[570px] top-[20px]"
                            src="../src/assets/images/landing-forest01.svg"
                        />
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 1, delay: 1, type: "tween" }}
                            className="absolute -left-[470px] -top-[20px]"
                            src="../src/assets/images/landing-forest01.svg"
                        />
                    </div>
                    <div className="relative -top-[250px] left-[50%]">
                        <motion.img
                            className="relative"
                            initial={{ left: -100, opacity: 0 }}
                            animate={
                                isInView ? { left: 0, opacity: 1 } : { left: -100, opacity: 0 }
                            }
                            transition={{ duration: 1, delay: 1, type: "tween" }}
                            src="../src/assets/images/landing-ground02.svg"
                        />
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 1, delay: 1, type: "tween" }}
                            className="absolute left-[2px] -top-[65px]"
                            src="../src/assets/images/landing-forest02.svg"
                        />
                    </div>
                    <div className="relative -right-[50%] bottom-[260px]">
                        <motion.img
                            className="relative"
                            initial={{ right: 100, opacity: 0 }}
                            animate={
                                isInView ? { right: 200, opacity: 1 } : { right: 100, opacity: 0 }
                            }
                            transition={{ duration: 1, delay: 1, type: "tween" }}
                            src="../src/assets/images/landing-ground03.svg"
                        />
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 1, delay: 1, type: "tween" }}
                            className="absolute left-[90px] -top-[45px]"
                            src="../src/assets/images/landing-forest03.svg"
                        />
                    </div>
                    <motion.img
                        className="absolute left-0 top-0 -z-10"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 1, delay: 2, type: "tween" }}
                        src="../src/assets/images/landing-tree01.svg"
                    />
                    <motion.img
                        className="absolute right-0 top-0 -z-10"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 1, delay: 2, type: "tween" }}
                        src="../src/assets/images/landing-tree02.svg"
                    />
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

                    <div className="text-white flex text-center gap-[30px] max-w-[1140px] m-auto break-keep">
                        <dl>
                            <dt>
                                <strong className="block text-literal-angry">
                                    Team & FE Leader
                                </strong>
                                Kim, Min Su
                            </dt>
                            <dd className="text-[14px] leading-[22px] mt-5 mb-[30px]">
                                프로젝트 전반의 리더 역할을 수행하며, 전체적인 설정, 다양한 기능
                                구현과 인터렉션을 담당했습니다.
                                <ul className="flex justify-center mt-[30px] gap-[8px]">
                                    <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                        <Link
                                            to="https://wiki.yoyobar.xyz"
                                            className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:border-white group-hover:fill-black"
                                        >
                                            <IconBlog className="group-hover:fill-black" />
                                        </Link>
                                    </li>
                                    <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                        <Link
                                            to="https://github.com/yoyobar"
                                            className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:border-white group-hover:fill-black"
                                        >
                                            <IconGithub className="group-hover:fill-black" />
                                        </Link>
                                    </li>
                                </ul>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <strong className="block text-literal-joy">FE Member</strong>
                                Park, Min Ah
                            </dt>
                            <dd className="text-[14px] leading-[22px] mt-5 mb-[30px]">
                                프론트엔드 개발을 담당하며, 디자인과 코딩 작업을 협력하여
                                진행했습니다.
                                <ul className="flex justify-center mt-[30px] gap-[8px]">
                                    <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                        <Link
                                            to="https://29-0.tistory.com/"
                                            className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:border-white group-hover:fill-black"
                                        >
                                            <IconBlog className="group-hover:fill-black" />
                                        </Link>
                                    </li>
                                    <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                        <Link
                                            to="https://github.com/devpma"
                                            className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:border-white group-hover:fill-black"
                                        >
                                            <IconGithub className="group-hover:fill-black" />
                                        </Link>
                                    </li>
                                </ul>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <strong className="block text-primary">FE Member</strong>
                                Lee, Ung Pyo
                            </dt>
                            <dd className="text-[14px] leading-[22px] mt-5 mb-[30px]">
                                프론트엔드 개발을 담당하며, 서비스의 사용자 인터페이스와 사용자
                                경험을 설계하고 구현했습니다.
                                <ul className="flex justify-center mt-[30px] gap-[8px]">
                                    <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                        <Link
                                            to="https://github.com/ungpyolee"
                                            className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:border-white group-hover:fill-black"
                                        >
                                            <IconBlog className="group-hover:fill-black" />
                                        </Link>
                                    </li>
                                    <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                        <Link
                                            to="https://github.com/ungpyolee"
                                            className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:border-white group-hover:fill-black"
                                        >
                                            <IconGithub className="group-hover:fill-black" />
                                        </Link>
                                    </li>
                                </ul>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <strong className="block text-literal-sorrow">BE Leader</strong>
                                Yang, Ui Jong
                            </dt>
                            <dd className="text-[14px] leading-[22px] mt-5 mb-[30px]">
                                백엔드 시스템의 전체 구조를 설계하고, 데이터베이스와 서버의 안정적인
                                운영을 담당했습니다.
                                <ul className="flex justify-center mt-[30px] gap-[8px]">
                                    <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                        <Link
                                            to="https://github.com/Scanf-s"
                                            className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:border-white group-hover:fill-black"
                                        >
                                            <IconBlog className="group-hover:fill-black" />
                                        </Link>
                                    </li>
                                    <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                        <Link
                                            to="https://velog.io/@calzone0404/posts"
                                            className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:border-white group-hover:fill-black"
                                        >
                                            <IconGithub className="group-hover:fill-black" />
                                        </Link>
                                    </li>
                                </ul>
                            </dd>
                        </dl>
                        <span></span>
                        <dl>
                            <dt>
                                <strong className="block text-literal-worry">BE Member</strong>
                                Choi, Seong Rak
                            </dt>
                            <dd className="text-[14px] leading-[22px] mt-5 mb-[30px]">
                                백엔드 개발을 담당하며, ai 튜닝으로 서비스의 주축을 담당하였습니다.
                                <ul className="flex justify-center mt-[30px] gap-[8px]">
                                    <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                        <Link
                                            to="https://github.com/ChoSeongRak"
                                            className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:border-white group-hover:fill-black"
                                        >
                                            <IconBlog className="group-hover:fill-black" />
                                        </Link>
                                    </li>
                                    <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                        <Link
                                            to="https://velog.io/@sr_c/posts"
                                            className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:border-white group-hover:fill-black"
                                        >
                                            <IconGithub className="group-hover:fill-black" />
                                        </Link>
                                    </li>
                                </ul>
                            </dd>
                        </dl>
                    </div>
                </motion.div>
                <footer className="text-center">
                    <p className="text-gray-400 font-[14px] font-title mb-[17px]">
                        ©
                        <Link
                            to="https://github.com/OZ-Coding-School/oz_03_main-003-FE"
                            className="underline"
                        >
                            Copyright
                        </Link>
                        for ungpyolee All rights reserved
                    </p>
                </footer>
            </div>
        </>
    );
};

export default Landing;

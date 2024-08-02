import { motion } from "framer-motion";
import { IconLineStar } from "../../../config/IconData";

const HomeChatInfo = () => {
    return (
        <div>
            <div className="m-auto mt-[70px] justify-center md:relative flex flex-col sm:flex sm:flex-row">
                <img
                    className="lg:w-[600px] md:w-[70%] sm:w-[70%] h-[100%]"
                    src="/img/landing_chat.webp"
                    alt="채팅 이미지"
                />
                <div className="lg:mt-[18%] md:mt-[12%] lg:static md:absolute flex flex-row sm:block sm:right-0">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5, type: "spring" }}
                    >
                        <IconLineStar className="-ml-6 w-[148px] lg:h-[53px]" />
                        <div className="-mt-3 ml-6">
                            <p className="lg:text-lg font-semibold sm:text-[14px]">
                                감정구슬이 대화를 확인합니다
                            </p>
                            <p className="text-gray-200 mt-0.5 lg:text-base sm:text-[13px] sm:block hidden">
                                감정구슬이 대화 속 상대방의 대답의 <br />
                                감정을 보여줍니다
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2, type: "spring" }}
                        className="sm:my-[50px] sm:mx-0 my-0 mx-5"
                    >
                        <IconLineStar className="-ml-6 w-[148px] h-[53px]" />
                        <div className="-mt-3 ml-6">
                            <p className="lg:text-lg font-semibold sm:text-[14px]">
                                감정을 파악했습니다
                            </p>
                            <p className="text-gray-200 mt-0.5 lg:text-base sm:text-[13px] sm:block hidden">
                                요약한 대화 속에서 감정 키워드를
                                <br /> 추출합니다
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.9, type: "spring" }}
                    >
                        <IconLineStar className="-ml-6 w-[148px] h-[53px]" />
                        <div className="-mt-3 ml-6">
                            <p className="lg:text-lg font-semibold sm:text-[14px]">
                                감정을 나무에 전달합니다.
                            </p>
                            <p className="text-gray-200 mt-0.5 lg:text-base sm:text-[13px] sm:block hidden">
                                추출된 감정이 나무에게 전달되고
                                <br /> 나무가 성장합니다
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HomeChatInfo;

import { motion } from "framer-motion";
import { IconLineStar } from "../../../config/IconData";

const HomeChatInfo = () => {
    return (
        <div>
            <div className="m-auto mt-[70px] flex justify-center">
                <img className="" src="/img/landing_chat.png" alt="채팅 이미지" width={600} />
                <div className="mt-[216px]">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5, type: "spring" }}
                    >
                        <IconLineStar className="-ml-6" />
                        <div className="-mt-3 ml-6">
                            <p className="text-lg font-semibold">감정구슬이 대화를 확인합니다</p>
                            <p className="text-gray-200 mt-0.5 text-base">
                                감정구슬이 대화 속 상대방의 대답의 <br />
                                감정을 보여줍니다
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2, type: "spring" }}
                        className="my-[50px]"
                    >
                        <IconLineStar className="-ml-6" />
                        <div className="-mt-3 ml-6">
                            <p className="text-lg font-semibold">감정을 파악했습니다</p>
                            <p className="text-gray-200 mt-0.5 text-base">
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
                        <IconLineStar className="-ml-6" />
                        <div className="-mt-3 ml-6">
                            <p className="text-lg font-semibold">감정을 나무에 전달합니다.</p>
                            <p className="text-gray-200 mt-0.5 text-base">
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

import { motion } from "framer-motion";
import { IconLineStar } from "../../../config/IconData";

const HomeChatInfo = () => {
    return (
        <div>
            <div className="m-auto mt-[70px] flex justify-center">
                <img className="" src="../src/assets/images/landing-chat.svg" alt="채팅 이미지" />
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
    );
};

export default HomeChatInfo;

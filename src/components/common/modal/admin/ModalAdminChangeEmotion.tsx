import { useEffect, useRef, useState } from "react";
import ButtonDefault from "../../button/ButtonDefault";
import { IconClose } from "../../../../config/IconData";
import { twMerge as tw } from "tailwind-merge";
import { motion } from "framer-motion";
import useInfo from "../../../../hook/useInfo";
import { adminApi } from "../../../../api";
import useVerify from "../../../../hook/useVerify";
import useSound from "use-sound";
import confirmSound from "../../../../assets/sound/btn_confirm.mp3";
import { useAdminStore } from "../../../../config/store";
import { FormData } from "../../../../config/types";
import useAdminData from "../../../../hook/useAdminData";

interface ModalChangeNameProps {
    onClose: () => void;
    uuid: string;
}

const ModalAdminChangeEmotion = ({ onClose, uuid }: ModalChangeNameProps) => {
    const { getUserInfo } = useInfo();
    const { checkLoginStatus } = useVerify();
    const { setData } = useAdminStore();
    const { fetchData } = useAdminData();
    const [inputHappiness, setInputHappiness] = useState("");
    const [inputAnger, setInputAnger] = useState("");
    const [inputSadness, setInputSadness] = useState("");
    const [inputWorry, setInputWorry] = useState("");
    const [inputIndifference, setInputIndifference] = useState("");
    const [playConfirm] = useSound(confirmSound, { volume: 0.75 });
    const [isAlert, setIsAlert] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const inputHappinessHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputHappiness(e.currentTarget.value);
    };
    const inputAngerHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputAnger(e.currentTarget.value);
    };
    const inputSadnessHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputSadness(e.currentTarget.value);
    };
    const inputWorryHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputWorry(e.currentTarget.value);
    };
    const inputIndifferenceHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputIndifference(e.currentTarget.value);
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [getUserInfo]);

    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    const handleButtonClick = async () => {
        if (isNaN(Number(inputHappiness)) || Number(inputHappiness) > 99.9) {
            return setIsAlert(true);
        }
        if (isNaN(Number(inputAnger)) || Number(inputAnger) > 99.9) {
            return setIsAlert(true);
        }
        if (isNaN(Number(inputSadness)) || Number(inputSadness) > 99.9) {
            return setIsAlert(true);
        }
        if (isNaN(Number(inputWorry)) || Number(inputWorry) > 99.9) {
            return setIsAlert(true);
        }
        if (isNaN(Number(inputIndifference)) || Number(inputIndifference) > 99.9) {
            return setIsAlert(true);
        }

        const dataForm = {
            happiness: Number(inputHappiness),
            anger: Number(inputAnger),
            sadness: Number(inputSadness),
            worry: Number(inputWorry),
            indifference: Number(inputIndifference),
        };

        try {
            await checkLoginStatus();
            await adminApi.updateEmotion(uuid, dataForm);
            const data = (await fetchData()) as FormData;
            setData(data);

            handleModalClose();
            playConfirm();
        } catch (error) {
            console.error("Emotion Change Failed", error);
        }
    };

    const handleModalClose = () => {
        onClose();
    };

    return (
        <>
            <nav className="absolute opacity-50 top-0 left-0 w-full h-screen bg-black"></nav>
            <motion.div
                animate={{ opacity: [0, 1], scale: [0, 1] }}
                transition={{ duration: 0.5, type: "spring" }}
                onClick={handleModalClose}
                onKeyDown={(e) => {
                    e.key === "Escape" && handleModalClose();
                    e.key === "Enter" && handleButtonClick();
                }}
                className={tw(
                    "outline-none text-base inset-0 select-none z-0 fixed flex items-center justify-center"
                )}
            >
                <nav
                    onClick={stopPropagation}
                    className={tw(
                        "p-5 bg-gray-800 text-white w-[420px] border border-gray-600 ",
                        "absolute z-20"
                    )}
                >
                    <h3 className="font-title text-lg leading-5 text-gray-200 mb-10">
                        ADMIN EMOTION CHANGE
                    </h3>
                    <h3 className="leading-3 text-gray-200">
                        지정하지 않은 값은 0으로 취급합니다.
                    </h3>

                    <article className="flex flex-col gap-4">
                        <div className={tw("text-literal-error invisible", isAlert && "visible")}>
                            특정 감정의 수치가 정확하지않습니다.
                        </div>
                        <nav className="flex justify-center items-center gap-4">
                            <div className="text-gray-200 flex-grow text-center">행복</div>
                            <input
                                type="text"
                                maxLength={4}
                                value={inputHappiness}
                                placeholder="Float(0.0) ~ (99.9)"
                                className={tw(
                                    "border-b flex-grow outline-none border-gray-600",
                                    "h-10 bg-gray-800 placeholder:text-gray-600 focus:border-white"
                                )}
                                onChange={inputHappinessHandle}
                                ref={inputRef}
                            />
                        </nav>
                        <nav className="flex justify-center items-center gap-4">
                            <div className="text-gray-200 flex-grow text-center">분노</div>
                            <input
                                type="text"
                                maxLength={4}
                                value={inputAnger}
                                placeholder="Float(0.0) ~ (99.9)"
                                className={tw(
                                    "border-b flex-grow outline-none border-gray-600",
                                    "h-10 bg-gray-800 placeholder:text-gray-600 focus:border-white"
                                )}
                                onChange={inputAngerHandle}
                            />
                        </nav>
                        <nav className="flex justify-center items-center gap-4">
                            <div className="text-gray-200 flex-grow text-center">슬픔</div>
                            <input
                                type="text"
                                maxLength={4}
                                value={inputSadness}
                                placeholder="Float(0.0) ~ (99.9)"
                                className={tw(
                                    "border-b flex-grow outline-none border-gray-600",
                                    "h-10 bg-gray-800 placeholder:text-gray-600 focus:border-white"
                                )}
                                onChange={inputSadnessHandle}
                            />
                        </nav>
                        <nav className="flex justify-center items-center gap-4">
                            <div className="text-gray-200 flex-grow text-center">걱정</div>
                            <input
                                type="text"
                                maxLength={4}
                                value={inputWorry}
                                placeholder="Float(0.0) ~ (99.9)"
                                className={tw(
                                    "border-b flex-grow outline-none border-gray-600",
                                    "h-10 bg-gray-800 placeholder:text-gray-600 focus:border-white"
                                )}
                                onChange={inputWorryHandle}
                            />
                        </nav>
                        <nav className="flex justify-center items-center">
                            <div className="text-gray-200 flex-grow text-center">무관심</div>
                            <input
                                type="text"
                                maxLength={4}
                                value={inputIndifference}
                                placeholder="Float(0.0) ~ (99.9)"
                                className={tw(
                                    "border-b flex-grow outline-none border-gray-600",
                                    "h-10 bg-gray-800 placeholder:text-gray-600 focus:border-white"
                                )}
                                onChange={inputIndifferenceHandle}
                            />
                        </nav>
                    </article>
                    <div className="text-right mt-8">
                        <ButtonDefault
                            className="ml-1"
                            onClick={() => {
                                handleButtonClick();
                            }}
                        >
                            변경하기
                        </ButtonDefault>
                        <ButtonDefault className="ml-1" onClick={handleModalClose}>
                            취소하기
                        </ButtonDefault>
                    </div>
                    <button
                        type="button"
                        className="text-zero w-5 h-5 absolute right-5 top-5 fill-gray-600 hover:fill-white transition"
                        onClick={handleModalClose}
                    >
                        <IconClose />
                        닫기
                    </button>
                </nav>
            </motion.div>
        </>
    );
};

export default ModalAdminChangeEmotion;

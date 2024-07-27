import { IconClose } from "../../../config/IconData";
import { twMerge as tw } from "tailwind-merge";
import { motion } from "framer-motion";
import ButtonDefault from "../button/ButtonDefault";
import ButtonPrimary from "../button/ButtonPrimary";
import { useEffect, useRef } from "react";
import { authApi } from "../../../api";

interface ModalEditProfileProps {
    onClose: () => void;
    url: string;
}

const ModalEditProfile = ({ onClose, url }: ModalEditProfileProps) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    }, []);

    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    const closeHandler = () => {
        onClose();
    };

    const imageSetHandler = async () => {
        try {
            //? 이미지 URL에서 Blob 객체 생성
            const response = await fetch(url);
            const blob = await response.blob();
            //? Blob을 File 객체로 변환
            const file = new File([blob], "profile_image", { type: "image/png" });

            //? 파일 업로드
            const result = await authApi.updateUserInfoProfileImage(file);
            console.log(result);
        } catch (error) {
            console.error("Error Updating Profile Image", error);
        }
    };

    return (
        <>
            <nav className="absolute opacity-50 top-0 left-0 z-10 w-screen h-screen bg-black"></nav>
            <motion.div
                ref={ref}
                tabIndex={-1}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                onClick={closeHandler}
                onKeyDown={(e) => {
                    e.key === "Escape" && closeHandler();
                }}
                className={tw(
                    "inset-0 outline-none select-none z-20 fixed flex items-center justify-center"
                )}
            >
                <nav
                    onClick={stopPropagation}
                    className={tw(
                        "p-5 bg-gray-800 text-white w-[420px] border border-gray-600",
                        "absolute z-20"
                    )}
                >
                    <h3 className="font-title leading-5 mb-10 text-gray-200">사용자 프로필 변경</h3>
                    <p>사용자 프로필을 변경하시겠습니까?</p>
                    <div className="text-right mt-10">
                        <ButtonPrimary onClick={imageSetHandler}>변경하기</ButtonPrimary>
                        <ButtonDefault onClick={closeHandler} className="ml-2">
                            취소하기
                        </ButtonDefault>
                    </div>
                    <button
                        type="button"
                        className="text-zero w-5 h-5 absolute right-5 top-5 fill-gray-600 hover:fill-white transition"
                        onClick={closeHandler}
                    >
                        <IconClose />
                        닫기
                    </button>
                </nav>
            </motion.div>
        </>
    );
};

export default ModalEditProfile;

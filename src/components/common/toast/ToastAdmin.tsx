import { useState, useEffect } from "react";
import { useModalStore } from "../../../config/store";
import { motion } from "framer-motion";

interface ToastDefaultProps {
    duration?: number;
}

const ToastAdmin = ({ duration = 2000 }: ToastDefaultProps) => {
    const [progress, setProgress] = useState(100);
    const { setModal } = useModalStore();

    useEffect(() => {
        const timer = setTimeout(() => {
            setModal(false);
        }, duration);

        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress <= 0) {
                    clearInterval(interval);
                    return 0;
                }
                return prevProgress - 100 / (duration / 100);
            });
        }, 100);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, [duration, setModal]);

    return (
        <motion.div
            animate={{ translateX: [50, 0], opacity: [0, 1] }}
            transition={{ type: "tween" }}
            className="font-body text-base absolute select-none top-[300px] flex w-full h-fit z-0 justify-center"
        >
            <div className="relative bg-gray-800 border border-gray-800 w-[320px] h-[60px] text-white overflow-hidden">
                <div className="p-5 flex flex-col">행 데이터가 복사되었습니다.</div>
                <div
                    className="h-0.5 bottom-0 absolute bg-primary transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </motion.div>
    );
};
export default ToastAdmin;

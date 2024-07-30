import { useState, useEffect } from "react";
import { useModalStore } from "../../../config/store";

interface ToastDefaultProps {
    message: string;
    duration?: number;
}

const ToastDefault = ({ message, duration = 2000 }: ToastDefaultProps) => {
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
        <div className="absolute select-none top-[300px] flex w-full h-fit z-50 justify-center">
            <div className=" relative font-title bg-gray-800 border border-gray-600 w-[320px] h-[60px] text-gray-200 overflow-hidden">
                <div className="p-5 flex flex-col">{message}</div>
                <div
                    className="h-0.5 bottom-0 absolute bg-primary transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
};
export default ToastDefault;

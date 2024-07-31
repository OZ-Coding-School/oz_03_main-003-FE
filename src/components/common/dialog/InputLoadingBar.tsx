import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const InputLoadingBar = () => {
    const [isLoading, setIsLoading] = useState(false);
    const loaderVariants = {
        start: {
            x: 0,
        },
        end: {
            x: 180,
        },
    };

    useEffect(() => {
        const time = setTimeout(() => {
            setIsLoading(true);
        }, 5000);

        return () => {
            clearTimeout(time);
        };
    });

    return (
        <div className="w-full absolute flex flex-col justify-center bottom-[150px] z-50">
            {isLoading && (
                <div className="text-gray-200 animate-pulse">
                    대화내용을 분석하고 있습니다 잠시만 기다려주세요
                </div>
            )}
            <div className="rounded-full overflow-hidden bg-slate-800 w-[200px] h-[5px]">
                <motion.div
                    className="h-full w-[20px] rounded-md bg-primary"
                    variants={loaderVariants}
                    initial="start"
                    animate="end"
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
            </div>
        </div>
    );
};

export default InputLoadingBar;

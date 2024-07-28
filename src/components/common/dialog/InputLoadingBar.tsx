import { motion } from "framer-motion";

const InputLoadingBar = () => {
    const loaderVariants = {
        start: {
            x: 0,
        },
        end: {
            x: 180,
        },
    };

    return (
        <div className="rounded-full overflow-hidden bg-gray-800 w-[200px] h-[5px]">
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
    );
};

export default InputLoadingBar;
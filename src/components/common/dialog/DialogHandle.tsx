import { motion } from "framer-motion";

const DialogHandle = ({ text }: { text: string }) => {
    return (
        <motion.div
            transition={{ duration: 0.5, type: "just" }}
            animate={{ opacity: [0, 1] }}
            className="select-none w-full h-full"
        >
            <div className="w-full text-center text-gray-200">{text}</div>
            <div className="mx-10 mt-10 border-b border-gray-200"></div>
        </motion.div>
    );
};

export default DialogHandle;

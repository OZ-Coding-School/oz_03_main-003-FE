import { motion } from "framer-motion";

interface HomeForestInfoProps {
    isInView: boolean;
}

const HomeForestInfo = ({ isInView }: HomeForestInfoProps) => {
    return (
        <div>
            <div className="relative left-[50%]">
                <motion.img
                    className="relative"
                    initial={{ left: -600, opacity: 0 }}
                    animate={isInView ? { left: -600, opacity: 1 } : { left: -600, opacity: 0 }}
                    transition={{ duration: 1, delay: 1, type: "tween" }}
                    src="../src/assets/images/landing-ground01.svg"
                />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 1, type: "tween" }}
                    className="absolute -left-[470px] top-[80px] z-10"
                    src="../src/assets/images/landing-forest01.svg"
                />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 1, type: "tween" }}
                    className="absolute -left-[570px] top-[20px]"
                    src="../src/assets/images/landing-forest01.svg"
                />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 1, type: "tween" }}
                    className="absolute -left-[470px] -top-[20px]"
                    src="../src/assets/images/landing-forest01.svg"
                />
            </div>
            <div className="relative -top-[250px] left-[50%]">
                <motion.img
                    className="relative"
                    initial={{ left: -100, opacity: 0 }}
                    animate={isInView ? { left: 0, opacity: 1 } : { left: -100, opacity: 0 }}
                    transition={{ duration: 1, delay: 1, type: "tween" }}
                    src="../src/assets/images/landing-ground02.svg"
                />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 1, type: "tween" }}
                    className="absolute left-[2px] -top-[65px]"
                    src="../src/assets/images/landing-forest02.svg"
                />
            </div>
            <div className="relative -right-[50%] bottom-[260px]">
                <motion.img
                    className="relative"
                    initial={{ right: 100, opacity: 0 }}
                    animate={isInView ? { right: 200, opacity: 1 } : { right: 100, opacity: 0 }}
                    transition={{ duration: 1, delay: 1, type: "tween" }}
                    src="../src/assets/images/landing-ground03.svg"
                />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 1, type: "tween" }}
                    className="absolute left-[90px] -top-[45px]"
                    src="../src/assets/images/landing-forest03.svg"
                />
            </div>
            <motion.img
                className="absolute left-0 top-0 -z-10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 2, type: "tween" }}
                src="../src/assets/images/landing-tree01.svg"
            />
            <motion.img
                className="absolute right-0 top-0 -z-10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 2, type: "tween" }}
                src="../src/assets/images/landing-tree02.svg"
            />
        </div>
    );
};

export default HomeForestInfo;

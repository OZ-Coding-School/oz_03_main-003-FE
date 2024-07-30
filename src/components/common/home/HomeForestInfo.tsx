import { motion } from "framer-motion";

interface HomeForestInfoProps {
    isInView: boolean;
}

const HomeForestInfo = ({ isInView }: HomeForestInfoProps) => {
    return (
        <div>
            <div className="relative left-[50%]">
                <motion.img
                    className="relative animate-gravity"
                    initial={{ left: -600, opacity: 0 }}
                    animate={isInView ? { left: -600, opacity: 1 } : { left: -600, opacity: 0 }}
                    transition={{ duration: 1, delay: 1, type: "tween" }}
                    src="/img/landing_ground02.png"
                />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 2, type: "tween" }}
                    className="w-[150px] absolute -left-[470px] top-[80px] z-10 animate-gravity"
                    src="/img/landing_tree_02.png"
                />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 2, type: "tween" }}
                    className="w-[150px] absolute -left-[570px] top-[20px] animate-gravity"
                    src="/img/landing_tree_02.png"
                />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 2, type: "tween" }}
                    className="w-[150px] absolute -left-[470px] -top-[20px] animate-gravity"
                    src="/img/landing_tree_02.png"
                />
            </div>
            <div className="relative -top-[250px] left-[50%]">
                <motion.img
                    className="relative animate-gravity"
                    initial={{ left: -100, opacity: 0 }}
                    animate={isInView ? { left: 0, opacity: 1 } : { left: -100, opacity: 0 }}
                    transition={{ duration: 1, delay: 1, type: "tween" }}
                    src="/img/landing_ground01.png"
                />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 2, type: "tween" }}
                    className="w-[175px] absolute left-[2px] -top-[65px] animate-gravity"
                    src="/img/landing_tree_03.png"
                />
            </div>
            <div className="relative -right-[50%] bottom-[260px]">
                <motion.img
                    className="relative animate-gravity"
                    initial={{ right: 100, opacity: 0 }}
                    animate={isInView ? { right: 200, opacity: 1 } : { right: 100, opacity: 0 }}
                    transition={{ duration: 1, delay: 1, type: "tween" }}
                    src="/img/landing_ground03.png"
                />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 2, type: "tween" }}
                    className="w-[342px] absolute left-[90px] -top-[45px] animate-gravity"
                    src="/img/landing_tree_00.png"
                />
            </div>
            <motion.img
                className="absolute left-0 top-0 -z-10 animate-gravity"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 2, type: "tween" }}
                src="/img/landing_sideBranch01.png"
            />
            <motion.img
                className="absolute right-0 top-0 -z-10 animate-gravity"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 2, type: "tween" }}
                src="/img/landing_sideBranch02.png"
            />
        </div>
    );
};

export default HomeForestInfo;

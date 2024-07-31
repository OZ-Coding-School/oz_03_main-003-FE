import { motion } from "framer-motion";

interface HomeForestInfoProps {
    isInView: boolean;
}

const HomeForestInfo = ({ isInView }: HomeForestInfoProps) => {
    return (
        <div className="h-[1080px] overflow-hidden">
            <div className="relative left-[50%]">
                <motion.img
                    className="relative animate-gravity"
                    initial={{ left: -800, top: 100, scale: 0.6, opacity: 0 }}
                    animate={
                        isInView
                            ? { left: -600, top: 200, scale: 1, opacity: 1 }
                            : { left: -800, top: 100, scale: 0.6, opacity: 0 }
                    }
                    transition={{ duration: 0.7, delay: 1, type: "tween" }}
                    src="/img/landing_ground02.png"
                />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.7, delay: 1.7, type: "tween" }}
                    className="w-[150px] absolute -left-[480px] top-[260px] z-10 animate-gravity"
                    src="/img/landing_tree_02.png"
                />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.7, delay: 1.9, type: "tween" }}
                    className="w-[150px] absolute -left-[570px] top-[210px] animate-gravity"
                    src="/img/landing_tree_02.png"
                />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.7, delay: 2.1, type: "tween" }}
                    className="w-[150px] absolute -left-[480px] top-[148px] animate-gravity"
                    src="/img/landing_tree_02.png"
                />
            </div>
            <div className="relative -top-[240px] left-[47%]">
                <motion.img
                    className="relative animate-gravity"
                    initial={{ left: 30, top: -50, opacity: 0 }}
                    animate={isInView ? { left: 0, top: 0, opacity: 1 } : { top: -50, opacity: 0 }}
                    transition={{ duration: 0.7, delay: 0.5, type: "tween" }}
                    src="/img/landing_ground01.png"
                />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.7, delay: 1.2, type: "tween" }}
                    className="w-[175px] absolute left-[2px] -top-[92px] animate-gravity"
                    src="/img/landing_tree_03.png"
                />
            </div>
            <div className="relative -right-[50%] bottom-[260px]">
                <motion.img
                    className="relative animate-gravity"
                    initial={{ right: 0, top: 100, opacity: 0 }}
                    animate={
                        isInView
                            ? { right: 200, top: 0, opacity: 1 }
                            : { right: 0, top: 100, opacity: 0 }
                    }
                    transition={{ duration: 0.7, delay: 1.9, type: "tween" }}
                    src="/img/landing_ground03.png"
                />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.7, delay: 2.6, type: "tween" }}
                    className="w-[342px] absolute left-[90px] -top-[45px] animate-gravity"
                    src="/img/landing_tree_00.png"
                />
            </div>
            <motion.img
                className="absolute left-0 top-0 -z-10"
                initial={{ left: -200, opacity: 0 }}
                animate={isInView ? { left: 0, opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0, type: "tween" }}
                src="/img/landing_sideBranch01.png"
            />
            <motion.img
                className="absolute right-0 top-0 -z-10"
                initial={{ right: -200, opacity: 0 }}
                animate={isInView ? { right: 0, opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2, type: "tween" }}
                src="/img/landing_sideBranch02.png"
            />
            <motion.img
                className="absolute right-0 bottom-0 -z-10"
                initial={{ bottom: -200, opacity: 0 }}
                animate={isInView ? { bottom: 0, opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.4, type: "tween" }}
                src="/img/landing_sideBranch03.png"
            />
        </div>
    );
};

export default HomeForestInfo;

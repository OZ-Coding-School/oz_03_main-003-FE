import { motion } from "framer-motion";
import { FormData } from "../../config/types";

interface AdminCarouselProps {
    data: FormData;
    carousel: number;
}

const AdminCarousel = ({ carousel, data }: AdminCarouselProps) => {
    const totalEmotions = data.emotion.reduce((acc, curr) => {
        const objectSum = Object.values(curr.emotions).reduce((sum, value) => {
            return sum + Number(value);
        }, 0);

        return acc + objectSum;
    }, 0);

    return (
        <div>
            {carousel === 0 && (
                <motion.div
                    animate={{ translateY: [-10, 0], opacity: [0, 1] }}
                    className="flex flex-col justify-center items-center"
                >
                    <div>Total Users</div>
                    <div>{data.user.length}</div>
                </motion.div>
            )}
            {carousel === 1 && (
                <motion.div
                    animate={{ translateY: [-10, 0], opacity: [0, 1] }}
                    className="flex flex-col justify-center items-center"
                >
                    <div>Total Trees</div>
                    <div>{data.tree.length}</div>
                </motion.div>
            )}
            {carousel === 2 && (
                <motion.div
                    animate={{ translateY: [-10, 0], opacity: [0, 1] }}
                    className="flex flex-col justify-center items-center"
                >
                    <div>Total Emotions</div>
                    <div>{totalEmotions}</div>
                </motion.div>
            )}
        </div>
    );
};

export default AdminCarousel;

import {
    IconAngry,
    IconHappy,
    IconIndifference,
    IconSorrow,
    IconWorry,
} from "../../../config/IconData";
import { useUserStore } from "../../../config/store";
import UserInfoBadgeContent from "./UserInfoBadgeContent";
import { Emotion, UserTreeEmotionDetail, UserData, Emotions } from "../../../config/types";

const calculateEmotion = (userData: UserData, type: keyof Emotions): number => {
    const treeEmotionArray = Array.isArray(userData.treeEmotion) ? userData.treeEmotion : [];

    const reduceData = treeEmotionArray.reduce((acc: number, curr: UserTreeEmotionDetail) => {
        if (curr.emotions[type] !== undefined) {
            return acc + curr.emotions[type];
        }
        return acc;
    }, 0);

    return reduceData;
};

const UserInfoBadge = () => {
    const { userData } = useUserStore();

    const getEmotionCount = (type: keyof Emotions) => {
        try {
            return calculateEmotion(userData, type);
        } catch (error) {
            console.error(error);
            return 0;
        }
    };

    return (
        <div className="bg-gray-800 mt-5 w-[560px] h-[450px] p-5">
            <div className="flex flex-col font-title text-base text-gray-200">
                Emotion Collections
            </div>
            <div className="px-8 flex mt-10 w-full justify-between items-center">
                <IconAngry className="w-5 h-5 fill-literal-angry" />
                <IconHappy className="w-5 h-5 fill-literal-happy" />
                <IconSorrow className="w-5 h-5 fill-literal-sorrow" />
                <IconWorry className="w-5 h-5 fill-literal-worry" />
                <IconIndifference className="w-5 h-5 fill-gray-600" />
            </div>
            <div className="px-[18px] flex mt-10 w-full justify-between items-center">
                <UserInfoBadgeContent type="anger" count={getEmotionCount("angry")} />
                <UserInfoBadgeContent type="happiness" count={getEmotionCount("happy")} />
                <UserInfoBadgeContent type="sadness" count={getEmotionCount("sorrow")} />
                <UserInfoBadgeContent type="worry" count={getEmotionCount("worry")} />
                <UserInfoBadgeContent type="indifference" count={getEmotionCount("indifference")} />
            </div>
        </div>
    );
};

export default UserInfoBadge;

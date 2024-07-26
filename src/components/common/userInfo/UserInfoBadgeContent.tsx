import { TREE_BADGE } from "../../../config/const";
import { useUserStore } from "../../../config/store";
import { UserTreeEmotionDetail } from "../../../config/types";

interface Emotions {
    happiness: string;
    anger: string;
    sadness: string;
    worry: string;
    indifference: string;
}

const UserInfoBadgeContent = ({ type }: { type: keyof Emotions }) => {
    const { userData } = useUserStore();

    const badge = TREE_BADGE.filter((item) => item.badge === type);
    const emotions = userData.treeEmotion as UserTreeEmotionDetail[];

    const emotionSum = emotions.reduce((acc, curr) => {
        return acc + Number(curr.emotions[type]);
    }, 0);

    return (
        <div className="flex flex-col gap-5 items-center">
            <div className="flex flex-col items-center">
                <nav className="w-12 h-12 rounded-full border border-white">
                    {emotionSum >= 0 && badge.length > 0 ? (
                        <img
                            src={badge[0].url}
                            alt={badge[0].badge}
                            className="w-full h-full object-cover rounded-full"
                            onError={(e) => (e.currentTarget.style.display = "none")}
                        />
                    ) : (
                        <div className="w-12 h-12 rounded-full border border-white"></div>
                    )}
                </nav>
                <div className="mt-1 text-sm text-gray-200 text-center">{badge[0].type}</div>
            </div>

            <div className="flex flex-col items-center">
                <nav className="w-12 h-12 rounded-full border border-white">
                    {emotionSum >= 150 && badge.length > 1 ? (
                        <img
                            src={badge[1].url}
                            alt={badge[1].badge}
                            className="w-full h-full object-cover rounded-full"
                            onError={(e) => (e.currentTarget.style.display = "none")}
                        />
                    ) : (
                        <div className="w-12 h-12 rounded-full border border-white"></div>
                    )}
                </nav>
                <div className="mt-1 text-sm text-gray-200 text-center">{badge[1].type}</div>
            </div>

            <div className="flex flex-col items-center">
                <nav className="w-12 h-12 rounded-full border border-white">
                    {emotionSum >= 250 && badge.length > 2 ? (
                        <img
                            src={badge[2].url}
                            alt={badge[2].badge}
                            className="w-full h-full object-cover rounded-full"
                            onError={(e) => (e.currentTarget.style.display = "none")}
                        />
                    ) : (
                        <div className="w-12 h-12 rounded-full border border-white"></div>
                    )}
                </nav>
                <div className="mt-1 text-sm text-gray-200 text-center">{badge[2].type}</div>
            </div>
        </div>
    );
};

export default UserInfoBadgeContent;

import { IconAngry } from "../../../config/IconData";

interface Emotions {
    angry: string;
    joy: string;
    indifference: string;
    sorrow: string;
    worry: string;
}

interface TreeEmotion {
    emotions: Emotions;
    tree_uuid?: string;
}

interface UserTreeEmotionDetail extends TreeEmotion {}

interface UserData {
    treeEmotion: TreeEmotion[] | Record<string, never>;
}

interface UserInfoBadgeProps {
    type: "angry" | "joy" | "sorrow" | "worry" | "indifference";
    userData: UserData;
    threshold: number;
}

const Badge = ({ emotion, level }: { emotion: keyof Emotions; level: number }) => {
    const emotionImages: { [key in keyof Emotions]: string[] } = {
        angry: ["badge_angry_01.png", "badge_angry_02.png", "badge_angry_03.png"],
        joy: ["badge_joy_01.png", "badge_joy_02.png", "badge_joy_03.png"],
        indifference: [
            "badge_indifference_01.png",
            "badge_indifference_02.png",
            "badge_indifference_03.png",
        ],
        sorrow: ["badge_sorrow_01.png", "badge_sorrow_02.png", "badge_sorrow_03.png"],
        worry: ["badge_worry_01.png", "badge_worry_02.png", "badge_worry_03.png"],
    };

    return <img src={emotionImages[emotion][level]} alt={`${emotion}-badge-${level + 1}`} />;
};

const calculateEmotion = (userData: UserData, type: keyof Emotions): number => {
    const treeEmotionArray = Array.isArray(userData.treeEmotion) ? userData.treeEmotion : [];

    const reduceData = treeEmotionArray.reduce((acc: number, curr: TreeEmotion) => {
        if (curr.emotions && curr.emotions[type] !== undefined) {
            return acc + Number(curr.emotions[type]);
        } else {
            throw new Error(`Type '${type}' is not valid or does not exist in the emotions object`);
        }
    }, 0);

    return reduceData;
};

const UserInfoBadgeContent = ({ userData, type }: UserInfoBadgeProps) => {
    const emotionTypes: (keyof Emotions)[] = ["angry", "joy", "indifference", "sorrow", "worry"];

    return (
        <div className="flex flex-col gap-5">
            <nav>
                <div className="w-12 h-12 rounded-full border border-white">
                    {emotionTypes.map((emotion) => {
                        const score = calculateEmotion(userData, emotion);
                        if (score >= 250) {
                            return <Badge key={emotion} emotion={emotion} level={2} />;
                        } else if (score >= 150) {
                            return <Badge key={emotion} emotion={emotion} level={1} />;
                        } else if (score >= 3) {
                            return <Badge key={emotion} emotion={emotion} level={0} />;
                        }
                        return null;
                    })}
                </div>
                <div className="mt-1 text-sm text-gray-200 text-center">{type}</div>
            </nav>
        </div>
    );
};

export default UserInfoBadgeContent;

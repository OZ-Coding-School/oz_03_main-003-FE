import React from "react";
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
    className?: string;
}

const Badge = ({ emotion, level }: { emotion: keyof Emotions; level: number }) => {
    const emotionImages: { [key in keyof Emotions]: string[] } = {
        angry: [
            "/src/assets/badge_angry_01.png",
            "/src/assets/badge_angry_02.png",
            "/src/assets/badge_angry_03.png",
        ],
        joy: [
            "/src/assets/badge_joy_01.png",
            "/src/assets/badge_joy_02.png",
            "/src/assets/badge_joy_03.png",
        ],
        indifference: [
            "/src/assets/badge_indifference_01.png",
            "/src/assets/badge_indifference_02.png",
            "/src/assets/badge_indifference_03.png",
        ],
        sorrow: [
            "/src/assets/badge_sorrow_01.png",
            "/src/assets/badge_sorrow_02.png",
            "/src/assets/badge_sorrow_03.png",
        ],
        worry: [
            "/src/assets/badge_worry_01.png",
            "/src/assets/badge_worry_02.png",
            "/src/assets/badge_worry_03.png",
        ],
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

const UserInfoBadgeContent = ({ userData, type, className }: UserInfoBadgeProps) => {
    const score = calculateEmotion(userData, type);
    let badgeLevel = null;

    if (score >= 250) {
        badgeLevel = 2;
    } else if (score >= 150) {
        badgeLevel = 1;
    } else if (score >= 3) {
        badgeLevel = 0;
    }

    const renderBadge = (level: number) => {
        if (badgeLevel !== null && badgeLevel >= level) {
            return <Badge emotion={type} level={badgeLevel} />;
        }
        return null;
    };

    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {[0, 1, 2].map((level) => (
                <div
                    key={level}
                    className="w-12 h-12 rounded-full border border-white flex items-center justify-center flex-col"
                >
                    {renderBadge(level)}
                </div>
            ))}
            <div className="mt-1 text-sm text-gray-200 text-center">{type}</div>
        </div>
    );
};

export default UserInfoBadgeContent;

import { UserTreeEmotionDetail, Emotions } from "../config/types";

const treeExperience: { [key: number]: number } = {
    0: 100,
};

const levelInitialExperience: { [key: number]: number } = {
    0: 0,
};

export const totalEmotion = (emotion: Emotions): number => {
    return Object.values(emotion).reduce((sum, value) => sum + Number(value), 0);
};

const maxEmotion = (emotion: Emotions): keyof Emotions | null => {
    const result = Object.entries(emotion).reduce(
        (max, [key, value]) => {
            return value > max.value ? { key, value } : max;
        },
        { key: "", value: 0 }
    );

    return result.value > 0 ? (result.key as keyof Emotions) : null;
};

const calculateExperience = (level: number, currentExperience: number): number => {
    if (level !== 0) {
        return 0;
    }
    const requiredExperience = treeExperience[level];
    const initialExperience = levelInitialExperience[level] || 0;

    const percentage = ((currentExperience - initialExperience) / requiredExperience) * 100;

    return Math.min(Math.max(Math.round(percentage), 0), 100);
};

export const calculateTreeLevel = (data: UserTreeEmotionDetail, level: number) => {
    const emotionMax = maxEmotion(data.emotions);
    const emotionTotal = totalEmotion(data.emotions);
    const percentage = calculateExperience(level, emotionTotal);

    return {
        percentage,
        emotionMax,
    };
};

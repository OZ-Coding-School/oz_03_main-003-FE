import { treeApi, forestApi } from "../api";

interface Emotion {
    [key: string]: number;
}

interface TreeEmotionData {
    tree_uuid: string;
    emotions: Emotion;
}

interface LevelData {
    userLevel: number;
    experience: number;
}

const userExperience: { [key: number]: number } = {
    0: 50,
    ...Object.fromEntries(Array.from({ length: 200 }, (_, i) => [i + 1, (i + 1) * 150])),
};

const levelInitialExperience: { [key: number]: number } = {
    0: 0,
    1: 50,
    2: 200,
    ...Object.fromEntries(Array.from({ length: 198 }, (_, i) => [i + 3, (i + 3 - 2) * 150])),
};

const calculateExperience = (level: number, currentExperience: number): number => {
    const maxLevel = Object.keys(userExperience).length - 1;

    if (level < 0 || level > maxLevel) {
        return 0;
    }
    const requiredExperience = userExperience[level];
    const initialExperience = levelInitialExperience[level] || 0;

    const adjustedCurrentExperience = Math.max(currentExperience - initialExperience, 0);
    const percentage = (adjustedCurrentExperience / requiredExperience) * 100;

    return Math.min(Math.max(percentage, 0), 100);
};

const calculateCurrentExperience = (res: TreeEmotionData[]) => {
    const totalExperience = res.reduce((acc, item) => {
        const emotionValues = Object.values(item.emotions);
        const sumEmotions = emotionValues.reduce((sum, value) => sum + Number(value), 0.0);
        return acc + sumEmotions;
    }, 0.0);

    return totalExperience;
};

export const calculateUserLevel = async (level: number, forestUUID: string): Promise<LevelData> => {
    const maxLevel = Object.keys(userExperience).length - 1;

    if (level < 0 || level > maxLevel) {
        throw new Error("Invalid level");
    }

    const { data: emotionResponse } = await treeApi.getTreeEmotionDataAll();
    let currentExp = 0;

    if (emotionResponse.length === 0) {
        currentExp = 0;
    } else {
        currentExp = calculateCurrentExperience(emotionResponse);
    }

    const percentage = calculateExperience(level, currentExp);

    if (Number(percentage) === 100 && level < maxLevel) {
        // 레벨업 진행
        await forestApi.updateForestLevel(forestUUID, level + 1);
        // 재귀적 레벨 계산
        return calculateUserLevel(level + 1, forestUUID);
    }

    return {
        userLevel: level,
        experience: Number(percentage),
    };
};

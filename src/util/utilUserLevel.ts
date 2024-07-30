import { treeApi, forestApi } from "../api";
import { userExperience, userLevelInitialExperience } from "../config/const";
import { Emotions } from "../config/types";
interface TreeEmotionData {
    tree_uuid: string;
    emotions: Emotions;
}

interface LevelData {
    userLevel: number;
    experience: number;
}

//? 사용자의 경험치를 %로 변환하여 계산합니다.
const calculateExperience = (level: number, currentExperience: number): number => {
    const maxLevel = Object.keys(userExperience).length - 1;

    if (level < 0 || level > maxLevel) {
        return 0;
    }
    const requiredExperience = userExperience[level];
    const initialExperience = userLevelInitialExperience[level] || 0;

    const adjustedCurrentExperience = Math.max(currentExperience - initialExperience, 0);
    const percentage = (adjustedCurrentExperience / requiredExperience) * 100;

    return Math.min(Math.max(percentage, 0), 100);
};

//? 사용자의 현재 경험치양을 숫자로 계산합니다.
const calculateCurrentExperience = (res: TreeEmotionData[]) => {
    const totalExperience = res.reduce((acc, item) => {
        const emotionValues = Object.values(item.emotions);
        const sumEmotions = emotionValues.reduce((sum, value) => sum + Number(value), 0.0);
        return acc + sumEmotions;
    }, 0.0);

    return totalExperience;
};

const maxLevel = Object.keys(userExperience).length - 1;
//? 사용자의 레벨을 계산합니다
//? 현재경험치와 요구경험치를 비교하여 재귀적으로 계산합니다.
const calculateUserLevelRecursive = (level: number, currentExp: number): LevelData => {
    if (level < 0 || level > maxLevel) {
        throw new Error("Invalid level");
    }

    const percentage = calculateExperience(level, currentExp);

    if (Number(percentage) === 100 && level < maxLevel) {
        return calculateUserLevelRecursive(level + 1, currentExp);
    }

    return {
        userLevel: level,
        experience: Number(percentage),
    };
};

export const calculateUserLevel = async (level: number, forestUUID: string): Promise<LevelData> => {
    const { data: emotionResponse } = await treeApi.getTreeEmotionDataAll();
    const currentExp =
        emotionResponse.length === 0 ? 0 : calculateCurrentExperience(emotionResponse);

    const result = calculateUserLevelRecursive(level, currentExp);

    if (result.userLevel > level) {
        await forestApi.updateForestLevel(forestUUID, result.userLevel);
    }

    return result;
};

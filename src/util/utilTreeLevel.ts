import { treeLevelInitialExperience, treeExperience } from "../config/const";
import { UserTreeEmotionDetail, Emotions } from "../config/types";

//? 총 감정치를 계산합니다. 해당 값은 경험치로 사용됩니다.
export const totalEmotion = (emotion: Emotions): number => {
    return Object.values(emotion).reduce((sum, value) => sum + Number(value), 0);
};

//? 총 감정중 가장 높은 경험치 이름을 산출합니다.
//? 감정 수치가 없을경우 null을 반환합니다.
const maxEmotion = (emotion: Emotions): keyof Emotions | null => {
    const result = Object.entries(emotion).reduce(
        (max, [key, value]) => {
            return value > max.value ? { key, value } : max;
        },
        { key: "", value: 0 }
    );
    return result.value > 0 ? (result.key as keyof Emotions) : null;
};

//? 사용자 나무 경험치를 %로 계산합니다.
const calculateExperience = (level: number, currentExperience: number): number => {
    if (level !== 0) {
        return 0;
    }
    const requiredExperience = treeExperience[level];
    const initialExperience = treeLevelInitialExperience[level] || 0;

    const percentage = ((currentExperience - initialExperience) / requiredExperience) * 100;

    return Math.min(Math.max(Math.round(percentage), 0), 100);
};

//? 사용자의 나무와 관련된 모든 연산을 처리합니다.
export const calculateTreeLevel = (data: UserTreeEmotionDetail, level: number) => {
    const emotionMax = maxEmotion(data.emotions);
    const emotionTotal = totalEmotion(data.emotions);
    const percentage = calculateExperience(level, emotionTotal);

    return {
        percentage,
        emotionMax,
    };
};

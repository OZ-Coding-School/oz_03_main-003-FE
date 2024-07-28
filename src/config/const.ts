import { TREE_CONST_TYPE, TREE_CONST_TYPE_LIST, AccessibleIndices } from "./types";

export const TREE_BADGE = [
    {
        badge: "anger",
        emotion: 50,
        url: "src/assets/badge/badge_angry_01.png",
        type: "조용한 불씨",
    },
    {
        badge: "anger",
        emotion: 100,
        url: "src/assets/badge/badge_angry_02.png",
        type: "불쏘시개",
    },
    {
        badge: "anger",
        emotion: 250,
        url: "src/assets/badge/badge_angry_03.png",
        type: "분노유발자",
    },
    {
        badge: "sadness",
        emotion: 50,
        url: "src/assets/badge/badge_sorrow_01.png",
        type: "슬픈 바람",
    },
    {
        badge: "sadness",
        emotion: 100,
        url: "src/assets/badge/badge_sorrow_02.png",
        type: "우울 파도",
    },
    {
        badge: "sadness",
        emotion: 250,
        url: "src/assets/badge/badge_sorrow_03.png",
        type: "눈물 바다",
    },
    {
        badge: "happiness",
        emotion: 50,
        url: "src/assets/badge/badge_joy_01.png",
        type: "기쁨 스파클",
    },
    {
        badge: "happiness",
        emotion: 100,
        url: "src/assets/badge/badge_joy_02.png",
        type: "인간 비타민",
    },
    {
        badge: "happiness",
        emotion: 250,
        url: "src/assets/badge/badge_joy_03.png",
        type: "행복 배달부",
    },
    {
        badge: "worry",
        emotion: 50,
        url: "src/assets/badge/badge_worry_01.png",
        type: "마음의 요동",
    },
    {
        badge: "worry",
        emotion: 100,
        url: "src/assets/badge/badge_worry_02.png",
        type: "불안 폭풍",
    },
    {
        badge: "worry",
        emotion: 250,
        url: "src/assets/badge/badge_worry_03.png",
        type: "공감 마스터",
    },
    {
        badge: "indifference",
        emotion: 50,
        url: "src/assets/badge/badge_indifference_01.png",
        type: "살짝 흐림",
    },
    {
        badge: "indifference",
        emotion: 100,
        url: "src/assets/badge/badge_indifference_02.png",
        type: "감정의 벽돌",
    },
    {
        badge: "indifference",
        emotion: 250,
        url: "src/assets/badge/badge_indifference_03.png",
        type: "투명인간",
    },
];

export const TREE_IMG: TREE_CONST_TYPE = {
    0: "/img/tree_00.png",
    1: "/img/tree_happy.png",
    2: "/img/tree_sorrow.png",
    3: "/img/tree_worry.png",
    4: "/img/tree_indifference.png",
    5: "/img/tree_angry.png",
};

export const TREE_TYPE: TREE_CONST_TYPE_LIST = {
    0: {
        name: "새싹",
        style: "font-title text-primary text-base",
        desc: "아직 자라고있는 무궁무진한 가능성의 새싹\n감정에 민감하게 반응할 것 같다.",
    },
    1: {
        name: "발광 묘목",
        style: "font-title text-white text-base",
        desc: "어쩌구 저쩌구",
    },
    2: {
        name: "구름 묘목",
        style: "font-title text-white text-base",
        desc: "어쩌구 저쩌구",
    },
    3: {
        name: "기운없는 묘목",
        style: "font-title text-white text-base",
        desc: "어쩌구 저쩌구",
    },
    4: {
        name: "무관심 묘목",
        style: "font-title text-white text-base",
        desc: "어쩌구 저쩌구",
    },
    5: {
        name: "불꽃 묘목",
        style: "font-title text-white text-base",
        desc: "어쩌구 저쩌구",
    },
};

export const TREE_STYLE_LV1: TREE_CONST_TYPE = {
    6: "right-10 bottom-10",
    7: "right-10 bottom-10",
    11: "right-10 bottom-10",
    12: "right-10 bottom-10",
};

export const TREE_STYLE_LV2: TREE_CONST_TYPE = {
    6: "right-10 bottom-10",
    7: "right-10 bottom-10",
    8: "right-10 bottom-10",
    11: "right-10 bottom-10",
    12: "right-10 bottom-10",
    13: "right-10 bottom-10",
    16: "right-10 bottom-10",
    17: "right-10 bottom-10",
    18: "right-10 bottom-10",
};

export const accessibleIndices: AccessibleIndices = {
    0: [6, 7, 11, 12],
    1: [6, 7, 11, 12],
    2: [6, 7, 8, 11, 12, 13, 16, 17, 18],
    ...Object.fromEntries(
        Array.from({ length: 198 }, (_, i) => [i + 3, [6, 7, 8, 11, 12, 13, 16, 17, 18]])
    ),
};

//? 나무 경험치 정보
export const treeExperience: { [key: number]: number } = {
    0: 200,
};

export const treeLevelInitialExperience: { [key: number]: number } = {
    0: 0,
};

//? 유저 경험치 정보
export const userExperience: { [key: number]: number } = {
    0: 75,
    1: 150,
    ...Object.fromEntries(Array.from({ length: 199 }, (_, i) => [i + 2, 300 + i * 150])),
};

export const userLevelInitialExperience: { [key: number]: number } = {
    0: 0,
    1: 75,
    2: 150,
    ...Object.fromEntries(Array.from({ length: 198 }, (_, i) => [i + 3, 300 + (i - 1) * 150])),
};

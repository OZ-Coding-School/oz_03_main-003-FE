type TREE_CONST_TYPE = {
    [key: number]: string;
};
type TREE_CONST_TYPE_LIST = {
    [key: number]: {
        name: string;
        style: string;
        desc: string;
    };
};

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

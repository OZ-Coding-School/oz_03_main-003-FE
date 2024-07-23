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
    0: "/img/tree-0.png",
    1: "/img/tree-1.png",
    2: "/img/tree-2.png",
    3: "/img/tree-3.png",
    4: "/img/tree-4.png",
    5: "/img/tree-5.png",
};

export const TREE_TYPE: TREE_CONST_TYPE_LIST = {
    0: {
        name: "새싹",
        style: "font-title text-primary",
        desc: "어쩌구 저쩌구",
    },
    1: {
        name: "발광 묘목",
        style: "font-title text-literal-happy",
        desc: "어쩌구 저쩌구",
    },
    2: {
        name: "구름 묘목",
        style: "font-title text-literal-sorrow",
        desc: "어쩌구 저쩌구",
    },
    3: {
        name: "조심스러운 묘목",
        style: "font-title text-literal-worry",
        desc: "어쩌구 저쩌구",
    },
    4: {
        name: "무관심 묘목",
        style: "font-title text-gray-600",
        desc: "어쩌구 저쩌구",
    },
    5: {
        name: "불꽃 묘목",
        style: "font-title text-literal-angry",
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

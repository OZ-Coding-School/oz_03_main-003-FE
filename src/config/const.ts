type TREE_CONST_TYPE = {
    [key: number]: string;
};
type TREE_CONST_TYPE_LIST = {
    [key: number]: {
        name: string;
        style: string;
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
    },
    1: {
        name: "발광 묘목",
        style: "font-title text-literal-happy",
    },
    2: {
        name: "구름 묘목",
        style: "font-title text-literal-sorrow",
    },
    3: {
        name: "조심스러운 묘목",
        style: "font-title text-literal-worry",
    },
    4: {
        name: "무관심 묘목",
        style: "font-title text-gray-600",
    },
    5: {
        name: "불꽃 묘목",
        style: "font-title text-literal-angry",
    },
};

export const TREE_STYLE_LV1: TREE_CONST_TYPE = {
    6: "",
    7: "",
    11: "",
    12: "",
};

export const TREE_STYLE_LV2: TREE_CONST_TYPE = {
    6: "",
    7: "",
    8: "",
    11: "",
    12: "",
    13: "",
    16: "",
    17: "",
    18: "",
};

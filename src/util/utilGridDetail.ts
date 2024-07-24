import { forestApi, treeApi } from "../api";

type AccessibleIndices = { [key: number]: number[] };

interface TreeResponse {
    tree_uuid: string;
    tree_name: string;
    tree_level: number;
    location: number;
}

const accessibleIndices: AccessibleIndices = {
    0: [6, 7, 11, 12],
    1: [6, 7, 11, 12],
    2: [6, 7, 8, 11, 12, 13, 16, 17, 18],
};

const calculateGrid = (res: TreeResponse[], originalIndices: AccessibleIndices) => {
    const newAccessibleIndices: AccessibleIndices = JSON.parse(JSON.stringify(originalIndices));

    res.forEach((tree) => {
        Object.keys(newAccessibleIndices).forEach((level) => {
            newAccessibleIndices[Number(level)] = newAccessibleIndices[Number(level)].filter(
                (index) => index !== tree.location
            );
        });
    });

    return newAccessibleIndices;
};

export const calculateTree = async () => {
    const { data: forestResponse } = await forestApi.getForestData();
    const { data: treeResponse } = await treeApi.getTreeDataAll();
    console.log(treeResponse);
    const { data: emotionResponse } = await treeApi.getTreeEmotionDataAll();
    const indices = calculateGrid(treeResponse, accessibleIndices);

    return {
        treeMax: accessibleIndices[forestResponse.forest_level].length,
        treeCurrent: treeResponse.length,
        gridSize: Math.sqrt(accessibleIndices[forestResponse.forest_level].length),
        accessibleIndices: indices[forestResponse.forest_level],
        originIndices: accessibleIndices[forestResponse.forest_level],
        details: treeResponse,
        emotions: emotionResponse,
    };
};

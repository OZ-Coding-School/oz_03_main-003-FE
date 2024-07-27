import { forestApi, treeApi } from "../api";
import { accessibleIndices } from "../config/const";

type AccessibleIndices = { [key: number]: number[] };

interface TreeResponse {
    tree_uuid: string;
    tree_name: string;
    tree_level: number;
    location: number;
}

//? 최대 레벨까지의 사용자가 접근할 수 있는 전체 그리드 데이터를 산출합니다.
//? 이 데이터에서 사용자가 이미 나무를 생성한 범위는 제외합니다.
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

//? 사용자의 나무와 관련된 경험치정보를 동기화합니다.
//? 해당 정보를 useUserGrid에서 처리하여 전역 상태로 저장합니다.
export const calculateTree = async () => {
    const { data: forestResponse } = await forestApi.getForestData();
    const { data: treeResponse } = await treeApi.getTreeDataAll();
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

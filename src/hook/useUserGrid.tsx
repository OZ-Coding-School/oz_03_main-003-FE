import { useCallback } from "react";
import { calculateTree } from "../util/utilGridDetail";
import { useUserStore } from "../config/store";

/**
 *
 * @function getUserGridInfo 유저 그리드 렌더링에 필요한 API를 호출합니다.
 */
const useUserGrid = () => {
    const { setTreeData, setTreeDetailData, setTreeDetailEmotionData } = useUserStore();
    const getUserGridInfo = useCallback(async () => {
        const treeData = await calculateTree();

        setTreeData({
            treeMax: treeData.treeMax,
            treeCurrent: treeData.treeCurrent,
            gridSize: treeData.gridSize,
            accessibleIndices: treeData.accessibleIndices,
            originIndices: treeData.originIndices,
        });

        setTreeDetailData(treeData.details);
        setTreeDetailEmotionData(treeData.emotions);
    }, [setTreeData, setTreeDetailData, setTreeDetailEmotionData]);

    return {
        getUserGridInfo,
    };
};

export default useUserGrid;

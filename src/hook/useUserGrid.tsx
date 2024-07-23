import { useCallback } from "react";
import { calculateTree } from "../util/utilGridDetail";
import { useUserStore } from "../config/store";

const useUserGrid = () => {
    const { setTreeData, setTreeDetailData, setTreeDetailEmotionData } = useUserStore();
    const getUserGridInfo = useCallback(async () => {
        const treeData = await calculateTree();

        setTreeData({
            treeMax: treeData.treeMax,
            treeCurrent: treeData.treeCurrent,
            gridSize: treeData.gridSize,
            accessibleIndices: treeData.accessibleIndices,
        });
        setTreeDetailData({
            ...treeData.details,
        });
        setTreeDetailEmotionData({
            ...treeData.emotions,
        });
    }, [setTreeData, setTreeDetailData, setTreeDetailEmotionData]);

    return {
        getUserGridInfo,
    };
};

export default useUserGrid;

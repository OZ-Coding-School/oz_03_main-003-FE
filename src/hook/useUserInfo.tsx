import { useCallback, useState } from "react";
import { useUserStore } from "../config/store";
import dayjs from "dayjs";
import { authApi, forestApi } from "../api";
import { calculateForest } from "../components/util/UtilUserLevel";

const useUserInfo = () => {
    const { setUserData, setLevelData } = useUserStore();
    const [isLoading, setIsLoading] = useState(true);

    const getUserInfo = useCallback(async () => {
        setIsLoading(true);
        const { data: accountResponse } = await authApi.getUserInfo();

        setUserData({
            id: accountResponse.uuid,
            imgUrl: accountResponse.profile_image,
            username: accountResponse.username,
            email: accountResponse.email,
            created_at: dayjs(accountResponse.created_at).format("YYYY-MM-DD"),
        });
        setIsLoading(false);
    }, [setUserData]);

    const getUserLevelInfo = useCallback(async () => {
        setIsLoading(true);
        const { data: forestResponse } = await forestApi.getForestData();
        const levelData = calculateForest(forestResponse.forest_level);
        setLevelData({
            userLevel: levelData.userLevel,
            userExperience: levelData.experience,
            treeMax: levelData.treeMax,
            treeCurrent: levelData.treeCurrent,
            gridSize: levelData.gridSize,
            accessibleIndices: levelData.accessibleIndices,
        });
        setIsLoading(false);
    }, [setLevelData]);

    return {
        getUserInfo,
        isLoading,
        getUserLevelInfo,
    };
};

export default useUserInfo;

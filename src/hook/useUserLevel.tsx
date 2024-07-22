import { useCallback } from "react";
import { calculateUserLevel } from "../util/utilUserLevel";
import { forestApi } from "../api";
import { useUserStore } from "../config/store";

const useUserLevel = () => {
    const { setLevelData } = useUserStore();

    const getUserLevelInfo = useCallback(async () => {
        const { data: forestResponse } = await forestApi.getForestData();
        const levelData = calculateUserLevel(forestResponse.forest_level);

        setLevelData({
            forestUUID: forestResponse.forest_uuid,
            userLevel: levelData.userLevel,
            userExperience: levelData.experience,
        });
    }, [setLevelData]);

    return {
        getUserLevelInfo,
    };
};

export default useUserLevel;

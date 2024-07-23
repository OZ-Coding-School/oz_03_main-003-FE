import { useCallback } from "react";
import { calculateUserLevel } from "../util/utilUserLevel";
import { forestApi } from "../api";
import { useUserStore } from "../config/store";

const useUserLevel = () => {
    const { setLevelData } = useUserStore();

    const getUserLevelInfo = useCallback(async () => {
        try {
            const { data: forestResponse } = await forestApi.getForestData();
            const levelData = await calculateUserLevel(
                forestResponse.forest_level,
                forestResponse.forest_uuid
            );

            setLevelData({
                forestUUID: forestResponse.forest_uuid,
                userLevel: levelData.userLevel,
                userExperience: levelData.experience,
            });
        } catch (error) {
            console.error("Error calculating user level:", error);
        }
    }, [setLevelData]);

    return {
        getUserLevelInfo,
    };
};

export default useUserLevel;

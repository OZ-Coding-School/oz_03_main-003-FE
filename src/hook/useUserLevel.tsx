import { useCallback } from "react";
import { calculateUserLevel } from "../util/utilUserLevel";
import { forestApi } from "../api";
import { useUserStore } from "../config/store";

/**
 *
 * @function getUserLevelInfo 유저 레벨 렌더링에 필요한 API를 요청합니다.
 */
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

import { adminApi } from "../api";
import useVerify from "./useVerify";
import {
    AdminPageForestData,
    AdminPageUserData,
    AdminTreeDetail,
    UserTreeEmotionDetail,
} from "../config/types";
import { useCallback } from "react";

/**
 *
 * @returns fetchData 어드민화면 렌더링에 필요한 API요청을 합니다.
 */
const useAdminData = () => {
    const { checkLoginStatus } = useVerify();

    const fetchData = useCallback(async () => {
        try {
            await checkLoginStatus();
            const { data: userData } = await adminApi.getUserList();
            const { data: treeData } = await adminApi.getTreeList();
            const { data: forestData } = await adminApi.getForestList();
            const { data: emotionData } = await adminApi.getEmotionList();

            const formData = {
                user: userData as AdminPageUserData[],
                tree: treeData as AdminTreeDetail[],
                forest: forestData as AdminPageForestData[],
                emotion: emotionData as UserTreeEmotionDetail[],
            };

            return formData;
        } catch (error) {
            console.error("fetched Data Failed", error);
            return null;
        }
    }, [checkLoginStatus]);

    return {
        fetchData,
    };
};

export default useAdminData;

import { adminApi } from "../api";
import useVerify from "./useVerify";
import { AdminPageUserData, UserTreeDetail, UserTreeEmotionDetail } from "../config/types";
import { useCallback } from "react";
const useAdminData = () => {
    const { checkLoginStatus } = useVerify();

    const fetchData = useCallback(async () => {
        try {
            await checkLoginStatus();
            const { data: userData } = await adminApi.getUserList();
            const { data: treeData } = await adminApi.getTreeList();
            const { data: emotionData } = await adminApi.getEmotionList();
            const formData = {
                user: userData as AdminPageUserData[],
                tree: treeData as UserTreeDetail[],
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

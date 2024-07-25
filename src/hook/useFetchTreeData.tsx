import { useCallback } from "react";
import { useUserStore } from "../config/store";
import { fetchTreeDataAll } from "../api/tree";
import { UserTreeDetail } from "../config/types";

const useFetchTreeData = () => {
    const { setTreeDetailData } = useUserStore((state) => ({
        setTreeDetailData: state.setTreeDetailData,
    }));

    const fetchTreeData = useCallback(async () => {
        try {
            const trees: UserTreeDetail[] = await fetchTreeDataAll();
            setTreeDetailData(trees);
        } catch (error) {
            console.log("Failed to fetch tree data", error);
        }
    }, [setTreeDetailData]);

    return { fetchTreeData };
};

export default useFetchTreeData;

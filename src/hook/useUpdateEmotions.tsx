import { useState, useCallback } from "react";
import { treeApi } from "../api";

interface UpdateEmotionsResult {
    isLoading: boolean;
    error: string | null;
    updateTreeEmotions: (treeUuid: string, aiMessageUuid: string) => Promise<void>;
}

export const useUpdateEmotions = (): UpdateEmotionsResult => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const updateTreeEmotions = useCallback(async (treeUuid: string, aiMessageUuid: string) => {
        setIsLoading(true);
        setError(null);

        try {
            await treeApi.updateEmotions(treeUuid, aiMessageUuid);
            console.log("성공");
        } catch (err) {
            setError("Failed to update emotions");
            console.error("Error updating emotions:", err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return {
        isLoading,
        error,
        updateTreeEmotions,
    };
};

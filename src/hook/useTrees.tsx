// src/hook/useTrees.ts
import { useState, useEffect } from "react";
import { getTreeDataAll } from "../api/tree";

interface TreeItem {
    id: number;
    group_name: string;
}

const useTrees = () => {
    const [trees, setTrees] = useState<TreeItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTrees = async () => {
            try {
                const response = await getTreeDataAll();
                setTrees(response.data);
            } catch (error) {
                setError("Failed to fetch tree data");
                console.error("Failed to fetch tree data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTrees();
    }, []);

    return { trees, loading, error };
};

export default useTrees;

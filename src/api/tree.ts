import { TreeFormData } from "../config/types";
import { axiosInstance } from "./axios";

export const createTree = () => {
    return axiosInstance.post("/tree/new");
};

export const getTreeDataAll = () => {
    return axiosInstance.get("/tree");
};

export const getTreeData = (id: string) => {
    return axiosInstance.get(`/tree/?tree_uuid=${id}`);
};

export const getTreeEmotionDataAll = () => {
    return axiosInstance.get(`/tree/emotion`);
};

export const updateTree = (id: string, form: TreeFormData) => {
    return axiosInstance.patch(`/tree/${id}`, form);
};

export const deleteTree = (id: string) => {
    return axiosInstance.delete(`/tree/${id}`);
};

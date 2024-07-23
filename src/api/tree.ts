import { TreeFormData } from "../config/types";
import { axiosInstance } from "./axios";

export const createTree = () => {
    return axiosInstance.post("/trees/new");
};

export const getTreeDataAll = () => {
    return axiosInstance.get("/trees/");
};

export const getTreeData = (id: string) => {
    return axiosInstance.get(`/trees/?tree_uuid=${id}`);
};

export const getTreeEmotionDataAll = () => {
    return axiosInstance.get(`/trees/emotion`);
};

export const updateTree = (id: string, form: TreeFormData) => {
    return axiosInstance.patch(`/trees/${id}`, form);
};

export const deleteTree = (id: string) => {
    return axiosInstance.delete(`/trees/${id}`);
};

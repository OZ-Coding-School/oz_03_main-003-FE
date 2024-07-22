import { TreeFormData } from "../config/types";
import { axiosInstance } from "./axios";

export const createTree = () => {
    return axiosInstance.post("/trees/");
};

export const getTreeDataAll = () => {
    return axiosInstance.get("/trees/");
};
export const getTreeData = (id: string) => {
    return axiosInstance.get(`/trees/${id}`);
};

export const getTreeEmotionDataAll = () => {
    return axiosInstance.get(`/trees/emotion/`);
};
export const getTreeEmotionData = (id: string) => {
    return axiosInstance.get(`/trees/emotion/${id}`);
};

export const updateTree = (id: string, form: TreeFormData) => {
    return axiosInstance.put(`/trees/${id}`, form);
};

export const deleteTree = (id: string) => {
    return axiosInstance.delete(`/trees/${id}`);
};

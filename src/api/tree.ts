import { axiosInstance } from "./axios";

export const createTree = () => {
    return axiosInstance.post("/trees/");
};

export const getTreeList = () => {
    return axiosInstance.get("/trees/");
};

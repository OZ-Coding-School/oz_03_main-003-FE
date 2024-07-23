import { axiosInstance } from "./axios";

export const createForest = () => {
    return axiosInstance.post("/forest/new");
};
export const getForestData = () => {
    return axiosInstance.get("/forest/");
};

export const updateForestLevel = (uuid: string, level: number) => {
    return axiosInstance.put(`/forest/${uuid}`, level);
};

export const deleteForest = (uuid: string) => {
    return axiosInstance.delete(`/forest/${uuid}`);
};

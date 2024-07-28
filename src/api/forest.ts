import { axiosInstance } from "./axios";

//? FOREST API
export const createForest = () => {
    return axiosInstance.post("/forest/new");
};
export const getForestData = () => {
    return axiosInstance.get("/forest");
};

export const updateForestLevel = (uuid: string, level: number) => {
    const requestForm = {
        forest_level: level,
    };
    return axiosInstance.put(`/forest/${uuid}`, requestForm);
};

export const deleteForest = (uuid: string) => {
    return axiosInstance.delete(`/forest/${uuid}`);
};

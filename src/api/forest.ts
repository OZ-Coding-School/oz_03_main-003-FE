import { axiosInstance } from "./axios";

export const createForest = () => {
    return axiosInstance.post("/forest/create");
};
export const getForestData = () => {
    return axiosInstance.get("/forest/get");
};
export const deleteForest = () => {
    return axiosInstance.delete("/forest/delete");
};

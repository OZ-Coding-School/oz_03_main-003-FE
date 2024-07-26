import { axiosInstance } from "./axios";
import { AdminTreeFormData } from "../config/types";

export const getUserList = () => {
    return axiosInstance.get("/user");
};

export const getTreeList = () => {
    return axiosInstance.get("/tree/admin");
};

export const getForestList = () => {
    return axiosInstance.get("/forest/admin");
};

export const getEmotionList = () => {
    return axiosInstance.get("/tree/admin/emotion");
};

export const getChatRoomList = () => {
    return axiosInstance.get("/chat/admin");
};

export const adminToUser = (id: string) => {
    const requestData = {
        is_superuser: "False",
    };
    return axiosInstance.put(`/user/${id}`, requestData);
};
export const userToAdmin = (id: string) => {
    const requestData = {
        is_superuser: "True",
    };
    return axiosInstance.put(`/user/${id}`, requestData);
};

export const updateTree = (id: string, form: AdminTreeFormData) => {
    return axiosInstance.patch(`/tree/admin/${id}`, form);
};

export const updateForestLevel = (uuid: string, level: number) => {
    const requestForm = {
        forest_level: level,
    };
    return axiosInstance.put(`/forest/admin/${uuid}`, requestForm);
};

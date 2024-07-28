import { axiosInstance } from "./axios";
import { AdminTreeFormData, AdminEmotionFormData } from "../config/types";

//? ADMIN GET API
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

//? ADMIN UPDATE API
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
export const updateForestLevel = (uuid: string, level: number) => {
    const requestForm = {
        forest_level: level,
    };
    return axiosInstance.put(`/forest/admin/${uuid}`, requestForm);
};
export const updateTree = (id: string, form: AdminTreeFormData) => {
    return axiosInstance.patch(`/tree/admin/${id}`, form);
};

export const updateEmotion = (id: string, form: AdminEmotionFormData) => {
    return axiosInstance.put(`/tree/admin/emotion/${id}`, form);
};

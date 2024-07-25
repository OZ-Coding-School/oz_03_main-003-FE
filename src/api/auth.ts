import { axiosInstance } from "./axios";

export const userGoogleAccessTokenReceiver = (token: string) => {
    const accessData = {
        access_token: token,
    };
    return axiosInstance.post("/auth/google/receiver", accessData);
};

export const userLogout = () => {
    return axiosInstance.post("/auth/logout");
};

export const userDeleteAccount = () => {
    return axiosInstance.delete("/auth/delete");
};

export const getUserInfo = () => {
    return axiosInstance.get("/auth/profile");
};

export const deleteAccount = (email: string) => {
    return axiosInstance.delete("/auth/delete", {
        data: { email: email },
    });
};

export const updateUserInfoName = (name: string) => {
    const userName = {
        username: name,
    };
    return axiosInstance.post("/auth/profile", userName);
};

export const updateUserInfoProfileImage = (image: string) => {
    const userImage = {
        profile_image: image,
    };
    return axiosInstance.post("/auth/profile", userImage);
};

export const userTokenRefresh = () => {
    return axiosInstance.post("/auth/token/refresh");
};

export const userTokenVerify = () => {
    return axiosInstance.post(`/auth/token/verify`);
};

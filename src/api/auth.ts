import { axiosInstance } from "./axios";

//? AUTH API
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

export const userTokenRefresh = () => {
    return axiosInstance.post("/auth/token/refresh");
};

export const userTokenVerify = () => {
    return axiosInstance.post(`/auth/token/verify`);
};

//? USER API
export const deleteAccount = (email: string) => {
    return axiosInstance.delete("/auth/delete", {
        data: { email: email },
    });
};

export const getUserInfo = () => {
    return axiosInstance.get("/user/profile");
};

export const updateUserInfoName = (name: string) => {
    const userName = {
        username: name,
    };
    return axiosInstance.post("/user/profile", userName);
};

export const updateUserInfoProfileImage = (image: File) => {
    const imageWithExtension = new File([image], "profile_image.png", { type: "image/png" });

    const formData = new FormData();
    formData.append("profile_image", imageWithExtension);

    return axiosInstance.patch("/user/profile", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

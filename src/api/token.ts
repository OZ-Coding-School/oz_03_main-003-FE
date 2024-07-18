import axios from "./axios";

export const loginGoogle = (token: string) => {
    const accessData = {
        access_token: token,
    };
    return axios.post("/auth/google/receiver", accessData);
};

export const refreshToken = (access: string, refresh: string) => {
    const refreshData = {
        refresh_token: refresh,
    };

    return axios.post("auth/token/refresh", refreshData, {
        headers: {
            Authorization: `Bearer ${access}`,
        },
    });
};

export const verifyToken = (access: string) => {
    return axios.get(`/auth/token/verify?access_token=${access}`, {
        headers: {
            Authorization: `Bearer ${access}`,
        },
    });
};

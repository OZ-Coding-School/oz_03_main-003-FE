import axios from "axios";
import Cookies from "js-cookie";
import { tokenApi } from ".";

//! 토큰 요구X AxiosInstance
export const axiosInstance = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json",
    },
});

//! 토큰 요구O AuthAxiosInstance
export const authAxiosInstance = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json",
    },
});

//! AuthAxiosInstance REQUEST Interceptor
authAxiosInstance.interceptors.request.use(
    (config) => {
        const token = Cookies.get("access");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

//! AuthAxiosInstance RESPONSE Interceptor
authAxiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const refreshToken = Cookies.get("refresh");
                if (!refreshToken) throw new Error("No Have RefreshToken");

                const response = await tokenApi.POST_newToken(refreshToken);
                const { accessToken } = response.data;
                Cookies.set("access", accessToken);

                originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;

                return authAxiosInstance(originalRequest);
            } catch (refreshError) {
                Cookies.remove("access");
                Cookies.remove("refresh");
                window.location.href = "/";

                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

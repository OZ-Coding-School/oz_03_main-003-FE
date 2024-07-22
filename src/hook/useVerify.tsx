import { useCallback } from "react";
import { authApi } from "../api";
import { useNavigate } from "react-router-dom";

const useVerify = () => {
    const nav = useNavigate();

    const checkLoginStatus = useCallback(async () => {
        try {
            await authApi.userTokenVerify();
        } catch (error) {
            console.log("AccessToken Verification Failed. Retrying...");
            try {
                await authApi.userTokenRefresh();
                await authApi.userTokenVerify();
            } catch (retryError) {
                console.error("RefreshToken Verification Failed :", retryError);
                nav("/", { replace: true });
            }
        }
    }, [nav]);

    return {
        checkLoginStatus,
    };
};

export default useVerify;

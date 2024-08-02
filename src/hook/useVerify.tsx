import { useCallback } from "react";
import { authApi } from "../api";
import { useNavigate } from "react-router-dom";

/**
 *
 * @function checkLoginStatus 유저 토큰 유효성을 검증하고, 새로 발급합니다.
 */
const useVerify = () => {
    const nav = useNavigate();

    const checkLoginStatus = useCallback(async () => {
        try {
            await authApi.userTokenVerify();
        } catch (error) {
            console.warn("AccessToken Verification Failed. Retrying...");
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

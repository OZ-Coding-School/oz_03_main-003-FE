import { useCallback, useEffect } from "react";
import { authApi } from "../api";
import { useNavigate } from "react-router-dom";

//? 사용자의 토큰이 현재 유효한지 확인하는 훅입니다.
//? 유효성 검사 -> 성공 -> 통과
//? 유효성 검사 -> 실패 -> 억세스 토큰 재발급 -> 성공 -> 통과
//? 유효성 검사 -> 실패 -> 억세스 토큰 재발급 -> 실패 -> 실패
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

    useEffect(() => {
        checkLoginStatus();
    }, [checkLoginStatus]);

    return {
        checkLoginStatus,
    };
};

export default useVerify;

import { useGoogleLogin } from "@react-oauth/google";
import ButtonSignInGoogle from "../components/common/button/ButtonSignInGoogle";
import { authApi, forestApi } from "../api";
import Landing from "../components/Landing";
import { useNavigate, useLocation } from "react-router-dom";
import useUserInfo from "../hook/useInfo";
import { useEffect } from "react";

const PageAuth = () => {
    const nav = useNavigate();
    const location = useLocation();
    const { getUserInfo, getUserGridInfo } = useUserInfo();

    useEffect(() => {
        const loginUserVerify = async () => {
            try {
                await authApi.userTokenVerify();
                nav("/home");
            } catch (tokenError) {
                console.log("AccessToken Verification Failed. Retrying...");
                try {
                    await authApi.userTokenRefresh();
                    await authApi.userTokenVerify();
                    nav("/home");
                } catch (retryError) {
                    console.error(retryError);
                }
            }
        };
        loginUserVerify();
    }, [nav]);

    const googleLoginRequest = async (token: string) => {
        try {
            const result = await authApi.userGoogleAccessTokenReceiver(token);

            if (result.status === 200) {
                await getUserInfo();
                await getUserGridInfo();
                nav("/home");
            }
            if (result.status === 201) {
                await forestApi.createForest();
                await getUserInfo();
                await getUserGridInfo();
                nav("/home");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const googleLoginHandler = useGoogleLogin({
        onSuccess: (res) => {
            googleLoginRequest(res.access_token);
        },

        onError: () => {
            console.error("Unexpected Login Request Error");
        },
    });

    return (
        <div
            className={`${location.pathname !== "/" ? "h-[100vh]" : ""} w-full bg-black m-auto flex flex-col gap-[10px] justify-center items-center`}
        >
            <Landing />
            <ButtonSignInGoogle onClick={googleLoginHandler} />
        </div>
    );
};

export default PageAuth;

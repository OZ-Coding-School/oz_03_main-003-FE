import { useGoogleLogin } from "@react-oauth/google";
import ButtonSignInGoogle from "../components/button/ButtonSignInGoogle";
import { authApi, forestApi } from "../api";
import Landing from "../components/Landing";
import { useNavigate } from "react-router-dom";
import useUserInfo from "../hook/useUserInfo";

const PageAuth = () => {
    const nav = useNavigate();
    const { getUserInfo, getUserLevelInfo } = useUserInfo();

    const googleLoginRequest = async (token: string) => {
        try {
            const result = await authApi.userGoogleAccessTokenReceiver(token);
            console.log(result);
            if (result.status === 200) {
                await getUserInfo();
                await getUserLevelInfo();
                nav("/home");
            }
            if (result.status === 201) {
                await forestApi.createForest();
                await getUserInfo();
                await getUserLevelInfo();
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
        <div className="w-full h-[100vh] bg-black m-auto flex flex-col gap-[10px] justify-center items-center">
            <Landing />
            <ButtonSignInGoogle onClick={googleLoginHandler} />
        </div>
    );
};

export default PageAuth;

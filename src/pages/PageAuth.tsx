import { useGoogleLogin } from "@react-oauth/google";
import ButtonSignInGoogle from "../components/button/ButtonSignInGoogle";
import { tokenApi } from "../api";
import Landing from "../components/Landing";
import { useNavigate } from "react-router-dom";

const PageAuth = () => {
    const nav = useNavigate();

    const googleLoginRequest = async (token: string) => {
        try {
            const result = await tokenApi.POST_loginGoogle(token);
            if (result.status === 200) {
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

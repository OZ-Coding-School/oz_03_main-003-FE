import { useGoogleLogin } from "@react-oauth/google";
import ButtonSignInGoogle from "../components/button/ButtonSignInGoogle";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { tokenApi } from "../api";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import useCookie from "../hook/useCookie";
import { useEffect } from "react";

dayjs.extend(utc);
dayjs.extend(timezone);
const now = dayjs();
const accessExpiration = now.add(5, "minute");
const refreshExpiration = now.add(1, "day");

const PageAuth = () => {
    const nav = useNavigate();

    const { verifyCookie } = useCookie();

    useEffect(() => {
        const verify = verifyCookie();
        if (verify) {
            nav("/home");
        }
    }, [verifyCookie, nav]);

    const googleLoginRequest = async (token: string) => {
        try {
            const result = await tokenApi.loginGoogle(token);
            console.log(result);

            Cookies.set("access", result.data.access, {
                secure: true,
                expires: accessExpiration.toDate(),
            });
            Cookies.set("refresh", result.data.refresh, {
                secure: true,
                expires: refreshExpiration.toDate(),
            });
            nav("/home");
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
            <ButtonSignInGoogle onClick={googleLoginHandler} />
        </div>
    );
};

export default PageAuth;

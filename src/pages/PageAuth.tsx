import { healthApi } from "../api";
import ButtonSignInGoogle from "../components/button/ButtonSignInGoogle";
import ButtonSignInKakao from "../components/button/ButtonSignInKakao";

const PageAuth = () => {
    const handleKaKaoLogin = async () => {};
    const handleGoogleLogin = async () => {
        const result = await healthApi.healthCheck();
        console.log(result);
    };

    return (
        <div className="w-full h-[100vh] bg-black m-auto flex flex-col gap-[10px] justify-center items-center">
            <ButtonSignInGoogle onClick={handleGoogleLogin} />
            <ButtonSignInKakao onClick={handleKaKaoLogin} />
        </div>
    );
};

export default PageAuth;

import ButtonSignInGoogle from "../components/button/ButtonSignInGoogle";
import ButtonSignInKakao from "../components/button/ButtonSignInKakao";

const PageAuth = () => {
    return (
        <div className="w-full h-[100vh] bg-black m-auto flex flex-col gap-[10px] justify-center items-center">
            <ButtonSignInGoogle />
            <ButtonSignInKakao />
        </div>
    );
};

export default PageAuth;

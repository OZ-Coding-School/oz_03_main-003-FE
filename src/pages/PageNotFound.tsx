import { useNavigate } from "react-router-dom";
import ButtonDefault from "../components/button/ButtonDefault";

const PageNotFound = () => {
    const nav = useNavigate();

    return (
        <div className="select-none w-full h-[100vh] bg-black flex flex-col justify-center items-center">
            <img className="w-[150px] mb-[120px]" src="/logo-white.png" />
            <div className="font-extrabold text-[96px] text-white">404</div>
            <div className="text-lg text-white mb-10">Not Found</div>
            <img className="w-[500px] mb-10" src="/img/404-image.png" />
            <ButtonDefault onClick={() => nav("/")} className="font-title text-base">
                홈으로 이동
            </ButtonDefault>
        </div>
    );
};

export default PageNotFound;

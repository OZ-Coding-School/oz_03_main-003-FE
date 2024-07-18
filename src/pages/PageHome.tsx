import HeaderLoggedIn from "../components/header/HeaderLoggedIn";
import { useNavigate } from "react-router-dom";
import useCookie from "../hook/useCookie";
import { useEffect } from "react";
const PageHome = () => {
    const nav = useNavigate();

    const { verifyCookie } = useCookie();

    useEffect(() => {
        const verify = verifyCookie();
        if (!verify) {
            nav("/");
        }
    }, [verifyCookie, nav]);

    return (
        <>
            <HeaderLoggedIn />
            <div className="bg-black pt-[129px] w-full h-screen box-border">
                <div className="text-white">PageHome</div>
            </div>
        </>
    );
};

export default PageHome;

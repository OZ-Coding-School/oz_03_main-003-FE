import { useNavigate } from "react-router-dom";
import Gnb from "../Gnb";
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
            <Gnb />
            <div>PageHome</div>
        </>
    );
};

export default PageHome;

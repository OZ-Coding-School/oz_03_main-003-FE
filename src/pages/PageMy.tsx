import { useNavigate } from "react-router-dom";
import Gnb from "../Gnb";
import useCookie from "../hook/useCookie";
import { useEffect } from "react";

const PageMy = () => {
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
            <div>PageMy</div>
        </>
    );
};

export default PageMy;

import { useNavigate } from "react-router-dom";
import Gnb from "../Gnb";
import { useEffect } from "react";
import useCookie from "../hook/useCookie";

const PageChat = () => {
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
            <div>PageComment</div>;
        </>
    );
};

export default PageChat;

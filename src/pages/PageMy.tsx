import { useEffect } from "react";
import HeaderLoggedIn from "../components/header/HeaderLoggedIn";
import UserInfoMypage from "../components/userInfo/UserInfoMypage";
import useUserInfo from "../hook/useUserInfo";

const PageMy = () => {
    const { getUserInfo, getUserLevelInfo } = useUserInfo();

    useEffect(() => {
        const refreshUserInfo = async () => {
            await getUserInfo();
            await getUserLevelInfo();
        };
        refreshUserInfo();
    }, [getUserInfo, getUserLevelInfo]);

    return (
        <>
            <HeaderLoggedIn />
            <div className="bg-black pt-[129px] w-full h-screen box-border">
                <div className="text-white flex justify-center items-center">
                    <UserInfoMypage />
                </div>
            </div>
        </>
    );
};

export default PageMy;

import { useEffect } from "react";
import HeaderLoggedIn from "../components/common/header/HeaderLoggedIn";
import UserInfoMyPage from "../components/common/userInfo/UserInfoMyPage";
import useUserInfo from "../hook/useInfo";
const PageMy = () => {
    const { getUserInfo, getUserGridInfo } = useUserInfo();

    useEffect(() => {
        const refreshUserInfo = async () => {
            await getUserInfo();
            await getUserGridInfo();
        };
        refreshUserInfo();
    }, [getUserInfo, getUserGridInfo]);

    return (
        <div className="font-body">
            <HeaderLoggedIn />
            <div className="bg-black pt-[129px] w-full h-screen box-border">
                <div className="text-white flex justify-center items-center">
                    <UserInfoMyPage />
                </div>
            </div>
        </div>
    );
};

export default PageMy;

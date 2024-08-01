import { useEffect } from "react";
import HeaderLoggedIn from "../components/common/header/HeaderLoggedIn";
import UserInfoMyPage from "../components/common/userInfo/UserInfoMyPage";
import useUserInfo from "../hook/useInfo";
import { Helmet } from "react-helmet-async";
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
        <>
            <Helmet>
                <title>Account :: Emotree</title>
                <meta property="twitter:url" content="https://emotree.yoyobar.xyz" />
                <meta name="twitter:title" content="Account :: Emotree" />
                <meta name="keywords" content="ai, 챗봇, 마이페이지, 감정, 계정정보, 정보" />
                <meta
                    name="twitter:description"
                    content="나의 감정을 기록한 마이 페이지를 확인해보세요."
                />
                <meta property="og:url" content="https://emotree.yoyobar.xyz" />
                <meta property="og:title" content="Account :: Emotree" />
                <meta
                    property="og:description"
                    content="나의 감정을 기록한 마이 페이지를 확인해보세요."
                />
            </Helmet>
            <div className="font-body">
                <HeaderLoggedIn />
                <div className="bg-black pt-[129px] w-full h-screen box-border">
                    <div className="text-white flex justify-center items-center">
                        <UserInfoMyPage />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageMy;

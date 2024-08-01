import { useEffect } from "react";
import HeaderLoggedIn from "../components/common/header/HeaderLoggedIn";
import HomeMain from "../components/home";
import useChatRooms from "../hook/chat/useChatRooms";
import useInfo from "../hook/useInfo";
import { Helmet } from "react-helmet-async";

const PageHome = () => {
    const { getUserInfo, getUserGridInfo, getUserLevelInfo } = useInfo();
    const { fetchChatRooms } = useChatRooms();
    useEffect(() => {
        const refreshUserInfo = async () => {
            await getUserInfo();
            await getUserGridInfo();
            await getUserLevelInfo();
            await fetchChatRooms();
        };
        refreshUserInfo();
    }, [getUserInfo, getUserGridInfo, getUserLevelInfo, fetchChatRooms]);

    return (
        <>
            <Helmet>
                <title>Home :: Emotree</title>
                <meta property="twitter:url" content="https://emotree.yoyobar.xyz" />
                <meta name="twitter:title" content="Home :: Emotree" />
                <meta
                    name="keywords"
                    content="ai, 챗봇, 채팅, 감정, 나무, 감정나무, 숲, 정원, 그라운드"
                />
                <meta
                    name="twitter:description"
                    content="AI 챗봇을 통해 나의 감정나무를 키우며 정원을 키워 보세요."
                />
                <meta property="og:url" content="https://emotree.yoyobar.xyz" />
                <meta property="og:title" content="Home :: Emotree" />
                <meta
                    property="og:description"
                    content="AI 챗봇을 통해 나의 감정나무를 키우며 정원을 키워 보세요."
                />
            </Helmet>

            <div className="font-body">
                <HeaderLoggedIn />
                <HomeMain />
            </div>
        </>
    );
};

export default PageHome;

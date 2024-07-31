import { useEffect } from "react";
import HeaderLoggedIn from "../components/common/header/HeaderLoggedIn";
import HomeMain from "../components/home";
import useChatRooms from "../hook/chat/useChatRooms";
import useInfo from "../hook/useInfo";

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
        <div className="font-body">
            <HeaderLoggedIn />
            <HomeMain />
        </div>
    );
};

export default PageHome;

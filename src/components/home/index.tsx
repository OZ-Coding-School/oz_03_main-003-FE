import { useEffect } from "react";
import { twMerge as tw } from "tailwind-merge";

import UserInfoHome from "../common/userInfo/UserInfoHome";
import HomeBackground from "./HomeBackground";
import HomeGrid from "./HomeGrid";
import HomeDescription from "./HomeDescription";
import useInfo from "../../hook/useInfo";
import useChatRooms from "../../hook/useChatRooms";
const HomeMain = () => {
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
        <div className="">
            <UserInfoHome />

            <main className={tw("flex bg-cover items-center justify-center h-screen")}>
                <div className="w-full animate-blur relative flex items-center justify-center h-screen bg-cover">
                    <HomeBackground />
                    <HomeGrid />
                </div>
            </main>

            <HomeDescription />
        </div>
    );
};

export default HomeMain;

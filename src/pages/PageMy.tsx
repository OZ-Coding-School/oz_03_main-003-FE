import { useEffect } from "react";
import HeaderLoggedIn from "../components/common/header/HeaderLoggedIn";
import UserInfoMyPage from "../components/common/userInfo/UserInfoMypage";
import useUserInfo from "../hook/useInfo";
import { useUserStore } from "../config/store";
import useChatRooms from "../hook/useChatRooms";
const PageMy = () => {
    const { getUserInfo, getUserGridInfo } = useUserInfo();

    //? TEST용 코드
    const { userData } = useUserStore();
    const { chatRooms } = useChatRooms();

    useEffect(() => {
        const refreshUserInfo = async () => {
            await getUserInfo();
            await getUserGridInfo();
        };
        refreshUserInfo();
    }, [getUserInfo, getUserGridInfo]);

    //? TEST용 코드
    useEffect(() => {
        console.log(userData);
        console.log(chatRooms);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <HeaderLoggedIn />
            <div className="bg-black pt-[129px] w-full h-screen box-border">
                <div className="text-white flex justify-center items-center">
                    <UserInfoMyPage />
                </div>
            </div>
        </>
    );
};

export default PageMy;

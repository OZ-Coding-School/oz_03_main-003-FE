import { useEffect } from "react";
import HeaderLoggedIn from "../components/header/HeaderLoggedIn";
import { useUserStore } from "../config/store";
import { authApi } from "../api";
import dayjs from "dayjs";
const PageHome = () => {
    const { setUserData } = useUserStore();

    useEffect(() => {
        const getUserInfo = async () => {
            const { data: response } = await authApi.getUserInfo();
            setUserData({
                id: response.id,
                imgUrl: response.profile_image,
                username: response.username,
                email: response.email,
                created_at: dayjs(response.created_at).format("YYYY-MM-DD"),
            });
        };
        getUserInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <HeaderLoggedIn />
            <div className="bg-black pt-[129px] w-full h-screen box-border">
                <div className="text-white">PageHome</div>
            </div>
        </>
    );
};

export default PageHome;

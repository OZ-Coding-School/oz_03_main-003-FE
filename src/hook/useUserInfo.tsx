import { useEffect } from "react";
import { useUserStore } from "../config/store";
import dayjs from "dayjs";
import { authApi } from "../api";

const useUserInfo = () => {
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
};

export default useUserInfo;

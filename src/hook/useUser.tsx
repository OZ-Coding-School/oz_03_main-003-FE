import dayjs from "dayjs";
import { useCallback } from "react";
import { authApi } from "../api";
import { useUserStore } from "../config/store";

/**
 * @function getUserInfo id/img/username/email/created_at/admin 과 관련된 유저정보 API요청
 */
const useUser = () => {
    const { setUserData } = useUserStore();
    const getUserInfo = useCallback(async () => {
        const { data: accountResponse } = await authApi.getUserInfo();

        setUserData({
            id: accountResponse.uuid,
            imgUrl: accountResponse.profile_image,
            username: accountResponse.username,
            email: accountResponse.email,
            created_at: dayjs(accountResponse.created_at).format("YYYY-MM-DD"),
            admin: accountResponse.is_superuser,
        });
    }, [setUserData]);

    return {
        getUserInfo,
    };
};

export default useUser;

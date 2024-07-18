import { Link, useNavigate } from "react-router-dom";
import { IconLogout, IconUser } from "../../config/IconData";
import { UserInfoDummy, UserInfoData } from "../userInfo/UserInfoDummy";
import { useState } from "react";
import { authApi } from "../../api";

const HeaderUserMenu = () => {
    const nav = useNavigate();
    const logoutHandler = async () => {
        try {
            await authApi.userLogoutGoogle();
            nav("/");
        } catch (error) {
            console.error(error);
        }
    };

    const [data, _setData] = useState<UserInfoData>(UserInfoDummy);
    return (
        <div className="w-40 bg-gray-800 text-white  text-md font-title">
            <ul>
                <li className="py-5 px-6 w-full border-b border-gray-600">{data.name}</li>
                <li className="w-full h-12">
                    <Link
                        to="/mypage"
                        className="w-full h-full px-6 flex items-center hover:bg-gray-600"
                    >
                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                            <IconUser className="fill-white" />
                        </div>
                        내 정보
                    </Link>
                </li>
                <li className="w-full h-12">
                    <button
                        className="w-full h-full px-6 flex items-center hover:bg-gray-600"
                        onClick={logoutHandler}
                    >
                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                            <IconLogout className="fill-white" />
                        </div>
                        로그아웃
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default HeaderUserMenu;

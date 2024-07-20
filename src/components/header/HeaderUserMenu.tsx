import { Link, useNavigate } from "react-router-dom";
import { IconLogout, IconUser } from "../../config/IconData";
import { authApi } from "../../api";
import { useUserStore } from "../../config/store";
import { motion } from "framer-motion";

const HeaderUserMenu = () => {
    const nav = useNavigate();
    const { userData } = useUserStore();
    const logoutHandler = async () => {
        try {
            await authApi.userLogout();
            nav("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <motion.div
            animate={{ translateY: [-20, 0] }}
            className="w-40 bg-gray-800 text-white  text-md font-title"
        >
            <ul>
                <li className="py-5 px-6 w-full border-b border-gray-600">
                    {userData.user.username}
                </li>
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
        </motion.div>
    );
};

export default HeaderUserMenu;

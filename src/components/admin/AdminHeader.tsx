import { useNavigate } from "react-router-dom";
import { authApi } from "../../api";

const AdminHeader = () => {
    const nav = useNavigate();

    const logoutHandler = async () => {
        try {
            await authApi.userLogout();
            nav("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="select-none text-xl flex gap-2 font-bold bg-slate-600 text-white font-mono p-2">
            <div>ADMIN PAGE |</div>

            <button
                onClick={logoutHandler}
                className="p-1 hover:bg-slate-400 transition rounded-md bg-slate-200 text-black text-base"
            >
                Logout
            </button>
        </div>
    );
};

export default AdminHeader;

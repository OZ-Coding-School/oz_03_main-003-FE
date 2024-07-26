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
    const homeHandler = () => {
        nav("/home");
    };

    const refreshHandler = () => {
        nav("/admin");
    };

    return (
        <div className="select-none text-xl flex gap-2 font-bold bg-slate-600 text-white font-mono p-2">
            <img className="w-10" src="/img/profile-placeholder.png"></img>
            <div onClick={refreshHandler} className="cursor-pointer">
                ADMIN PAGE
            </div>
            <div>|</div>
            <button
                onClick={homeHandler}
                className="p-1 w-[80px] hover:bg-slate-400 transition rounded-md bg-slate-200 text-black text-base"
            >
                Home
            </button>
            <button
                onClick={logoutHandler}
                className="p-1 w-[80px] hover:bg-slate-400 transition rounded-md bg-slate-200 text-black text-base"
            >
                Logout
            </button>
        </div>
    );
};

export default AdminHeader;

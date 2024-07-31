import { useEffect } from "react";
import AdminHeader from "../components/admin/AdminHeader";
import AdminOverview from "../components/admin/AdminOverview";
import { FormData } from "../config/types";
import useAdminData from "../hook/useAdminData";
import AdminTree from "../components/admin/AdminTree";
import AdminForest from "../components/admin/AdminForest";
import AdminUser from "../components/admin/AdminUser";
import { useAdminStore } from "../config/store";
import AdminEmotion from "../components/admin/AdminEmotion";

const PageAdmin = () => {
    const { fetchData } = useAdminData();
    const { data, setData } = useAdminStore();
    useEffect(() => {
        const fetchUserData = async () => {
            const result = (await fetchData()) as FormData;
            setData(result);
        };
        fetchUserData();
    }, [fetchData, setData]);

    return (
        <>
            <AdminHeader />
            <div className="bg-slate-200 select-none overflow-y-scroll w-full h-screen p-10 flex flex-col gap-10 font-body">
                {data && (
                    <div>
                        <AdminOverview />
                        <AdminUser />
                        <AdminTree />
                        <AdminEmotion />
                        <AdminForest />
                    </div>
                )}
            </div>
        </>
    );
};

export default PageAdmin;

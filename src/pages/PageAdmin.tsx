import { useEffect, useState } from "react";
import AdminHeader from "../components/admin/AdminHeader";
import AdminOverview from "../components/admin/AdminOverview";
import AdminStatus from "../components/admin/AdminStatus";
import { adminApi } from "../api";
import useVerify from "../hook/useVerify";
import {
    AdminPageUserData,
    UserTreeDetail,
    UserTreeEmotionDetail,
    FormData,
} from "../config/types";
import useAdminData from "../hook/useAdminData";

const PageAdmin = () => {
    const [data, setData] = useState<FormData | null>(null);
    const { fetchData } = useAdminData();

    useEffect(() => {
        const fetchUserData = async () => {
            const result = await fetchData();
            setData(result);
        };
        fetchUserData();
    }, [fetchData]);

    console.log(data);

    return (
        <>
            <AdminHeader />
            <div className="bg-slate-200 overflow-y-scroll w-full h-screen p-10 flex flex-col gap-10">
                {data && (
                    <div>
                        <AdminOverview data={data} />
                        <AdminStatus data={data} />
                    </div>
                )}
            </div>
        </>
    );
};

export default PageAdmin;

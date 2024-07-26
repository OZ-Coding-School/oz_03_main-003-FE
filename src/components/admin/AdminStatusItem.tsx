import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { FormData } from "../../config/types";
import { twMerge as tw } from "tailwind-merge";
import { adminApi } from "../../api";
import useVerify from "../../hook/useVerify";
import { useState } from "react";

dayjs.extend(utc);
dayjs.extend(timezone);

interface AdminStatusItemProps {
    data: FormData;
}
const AdminStatusItem = ({ data: originData }: AdminStatusItemProps) => {
    const [data, setData] = useState(originData);
    const { checkLoginStatus } = useVerify();
    const formatDate = (dateString: string) => {
        return dayjs(dateString).format("YYYY-MM-DD HH:mm");
    };
    const roleSelect = (role: boolean) => {
        if (role) {
            return "ADMIN";
        } else {
            return "USER";
        }
    };

    const roleSetUser = async (id: string) => {
        const confirm = window.confirm("해당 어드민을 유저로 변경하겠습니까?");

        if (confirm) {
            await checkLoginStatus();
            await adminApi.adminToUser(id);
        }
    };
    const roleSetAdmin = async (id: string) => {
        const confirm = window.confirm("해당 유저를 어드민으로 변경하겠습니까?");

        if (confirm) {
            await checkLoginStatus();
            await adminApi.userToAdmin(id);
        }
    };

    return (
        <div className="w-full p-8">
            <table className="border-collapse text-xl w-fit">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">USER UUID</th>
                        <th className="border p-2">USER EMAIL</th>
                        <th className="border p-2">CREATED</th>
                        <th className="border p-2">LAST LOGIN</th>
                        <th className="border p-2">ROLE</th>
                        <th className="border p-2">ROLE SELECT</th>
                    </tr>
                </thead>
                <tbody className="text-base text-center">
                    {data.user.map((item) => (
                        <tr key={item.uuid} className="">
                            <td className="border p-2">
                                <div
                                    className={tw(
                                        "hover:bg-white hover:text-black hover:select-text",
                                        "bg-slate-300 text-slate-300 rounded-md select-none"
                                    )}
                                >
                                    {item.uuid}
                                </div>
                            </td>
                            <td className="border p-2">
                                <div
                                    className={tw(
                                        "hover:bg-white hover:text-black hover:select-text",
                                        "bg-slate-300 text-slate-300 rounded-md select-none"
                                    )}
                                >
                                    {item.email}
                                </div>
                            </td>
                            <td className="border p-2">{formatDate(item.created_at)}</td>
                            <td className="border p-2">{formatDate(item.last_login)}</td>
                            <td className="border p-2">{roleSelect(item.is_superuser)}</td>
                            <td className="border p-2">
                                <div className="flex gap-1 justify-center">
                                    {item.is_superuser ? (
                                        <>
                                            <button
                                                disabled
                                                className="p-1 rounded-md bg-gray-200 text-white"
                                            >
                                                ADMIN
                                            </button>
                                            <button
                                                id={item.uuid}
                                                onClick={(e) => roleSetUser(e.currentTarget.id)}
                                                className="p-1 rounded-md transition bg-rose-400 hover:bg-rose-600 text-white"
                                            >
                                                USER
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                id={item.uuid}
                                                onClick={(e) => roleSetAdmin(e.currentTarget.id)}
                                                className="p-1 rounded-md transition bg-rose-400 hover:bg-rose-600 text-white"
                                            >
                                                ADMIN
                                            </button>
                                            <button
                                                disabled
                                                className="p-1 rounded-md bg-gray-200 text-white"
                                            >
                                                USER
                                            </button>
                                        </>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminStatusItem;

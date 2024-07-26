import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { FormData, AdminPageUserData } from "../../config/types";
import { twMerge as tw } from "tailwind-merge";
import { adminApi, authApi } from "../../api";
import useVerify from "../../hook/useVerify";
import useAdminData from "../../hook/useAdminData";
import { IconChange, IconCopy, IconDeleteBtn } from "../../config/IconData";
import { useAdminStore } from "../../config/store";

dayjs.extend(utc);
dayjs.extend(timezone);

const AdminUserItem = () => {
    const { data, setData } = useAdminStore();
    const { checkLoginStatus } = useVerify();
    const { fetchData } = useAdminData();

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
            try {
                await checkLoginStatus();
                await adminApi.adminToUser(id);
                const newData = (await fetchData()) as FormData;
                setData(newData);
            } catch (error) {
                console.error("admin to user update error", error);
            }
        }
    };
    const roleSetAdmin = async (id: string) => {
        const confirm = window.confirm("해당 유저를 어드민으로 변경하겠습니까?");

        if (confirm) {
            try {
                await checkLoginStatus();
                await adminApi.userToAdmin(id);
                const newData = (await fetchData()) as FormData;
                setData(newData);
            } catch (error) {
                console.error("user to admin update error", error);
            }
        }
    };

    const deleteAccountHandler = async (email: string) => {
        const confirm = window.confirm("해당 계정을 정말로 삭제하겠습니까?");

        if (confirm) {
            try {
                await checkLoginStatus();
                await authApi.deleteAccount(email);
                const newData = (await fetchData()) as FormData;
                setData(newData);
            } catch (error) {
                console.error("user deletion failed", error);
            }
        }
    };

    const clipBoardHandler = async (item: AdminPageUserData) => {
        const form = `USER_UUID: ${item.uuid} \nUSER_EMAIL: ${item.email} \nCREATED_AT: ${formatDate(item.created_at)} \nUPDATED_AT: ${formatDate(item.last_login)} \nROLE: ${roleSelect(item.is_superuser)}
        `;

        await navigator.clipboard.writeText(form);
    };

    const filteredData = data.user.sort((a, b) => {
        const dateA = new Date(a.created_at).getTime();
        const dateB = new Date(b.created_at).getTime();
        return dateA - dateB;
    });

    return (
        <div className="w-full p-8 flex justify-center select-text">
            <table className="border-collapse w-full text-xl">
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
                <tbody className="text-lg text-center">
                    {filteredData.map((item) => (
                        <tr key={item.uuid} className="">
                            <td className="border p-2">
                                <div
                                    className={tw(
                                        "hover:bg-white hover:text-black",
                                        "bg-slate-300 text-slate-300 rounded-md"
                                    )}
                                >
                                    {item.uuid}
                                </div>
                            </td>
                            <td className="border p-2">
                                <div
                                    className={tw(
                                        "hover:bg-white hover:text-black ",
                                        "bg-slate-300 text-slate-300 rounded-md"
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
                                        <button
                                            onClick={() => roleSetUser(item.uuid)}
                                            className="select-none p-1 w-full rounded-md transition bg-indigo-400 hover:bg-indigo-600 text-white"
                                        >
                                            <div className="flex justify-center items-center relative">
                                                <IconChange className="ml-2 fill-white w-4 absolute left-0" />
                                                <div>USER</div>
                                            </div>
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => roleSetAdmin(item.uuid)}
                                            className="select-none p-1 w-full rounded-md transition bg-rose-400 hover:bg-rose-600 text-white"
                                        >
                                            <div className="flex justify-center items-center relative">
                                                <IconChange className="ml-2 fill-white w-4 absolute left-0" />
                                                <div>ADMIN</div>
                                            </div>
                                        </button>
                                    )}
                                </div>
                            </td>
                            <td>
                                <div
                                    onClick={() => clipBoardHandler(item)}
                                    className="fill-white ml-2 p-2 bg-gray-300 hover:bg-gray-500 transition rounded-md cursor-pointer flex justify-center"
                                >
                                    <IconCopy className="fill-white w-fit h-6" />
                                </div>
                            </td>
                            <td className="pl-4 rounded-md">
                                <div
                                    onClick={() => deleteAccountHandler(item.email)}
                                    className="fill-white p-2 bg-gray-300 hover:bg-gray-500 transition rounded-md cursor-pointer flex justify-center"
                                >
                                    <IconDeleteBtn className="fill-white w-fit h-6" />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminUserItem;

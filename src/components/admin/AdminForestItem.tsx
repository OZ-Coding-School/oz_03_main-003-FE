import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { FormData } from "../../config/types";
import { treeApi } from "../../api";
import useVerify from "../../hook/useVerify";
import { useState } from "react";
import useAdminData from "../../hook/useAdminData";
import { IconChange, IconDeleteBtn } from "../../config/IconData";

dayjs.extend(utc);
dayjs.extend(timezone);

interface AdminForestItemProps {
    data: FormData;
}
const AdminForestItem = ({ data: originData }: AdminForestItemProps) => {
    const [data, setData] = useState<FormData | null>(originData);
    const { checkLoginStatus } = useVerify();
    const { fetchData } = useAdminData();

    if (!data) {
        return <div>Loading...</div>;
    }

    const levelHandler = async (id: string) => {
        const level = window.prompt("변경하실 나무의 레벨을 지정하세요.");
        if (!level) return;

        const requestForm = {
            tree_level: Number(level),
        };

        try {
            await checkLoginStatus();
            await treeApi.updateTree(id, requestForm);
            const data = await fetchData();
            setData(data);
        } catch (error) {
            console.error("Level Change Failed", error);
        }
    };

    const locationHandler = async (id: string) => {
        const location = window.prompt("변경하실 나무의 위치를 지정하세요.");
        if (!location) return;

        const requestForm = {
            location: Number(location),
        };

        try {
            await checkLoginStatus();
            await treeApi.updateTree(id, requestForm);
            const data = await fetchData();
            setData(data);
        } catch (error) {
            console.error("Level Change Failed", error);
        }
    };

    const deleteAccountHandler = async (id: string) => {
        const confirm = window.confirm("해당 나무를 정말로 삭제하겠습니까?");

        if (confirm) {
            await checkLoginStatus();
            await treeApi.deleteTree(id);
            const newData = await fetchData();
            setData(newData);
        }
    };

    return (
        <div className="w-full p-8 flex justify-center">
            <table className="border-collapse w-full text-xl">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">TREE UUID</th>
                        <th className="border p-2">TREE NAME</th>
                        <th className="border p-2">TREE LEVEL</th>
                        <th className="border p-2">LEVEL CHANGE</th>
                        <th className="border p-2">TREE LOCATION</th>
                        <th className="border p-2">LOCATION CHANGE</th>
                    </tr>
                </thead>
                <tbody className="text-lg text-center">
                    {data.tree.map((item) => (
                        <tr key={item.tree_uuid} className="">
                            <td className="border p-2">{item.tree_uuid}</td>
                            <td className="border p-2">{item.tree_name}</td>
                            <td className="border p-2">{item.tree_level}</td>

                            <td className="border p-2">
                                <button
                                    onClick={(e) => levelHandler(e.currentTarget.id)}
                                    id={item.tree_uuid}
                                    className="p-1 w-full rounded-md transition bg-green-600 hover:bg-green-800 text-white"
                                >
                                    <div className="flex justify-center items-center relative">
                                        <IconChange className="fill-white w-4 absolute left-0 ml-2" />
                                        <div>Level</div>
                                    </div>
                                </button>
                            </td>
                            <td className="border p-2">{item.location}</td>
                            <td className="border p-2">
                                <button
                                    onClick={(e) => locationHandler(e.currentTarget.id)}
                                    id={item.tree_uuid}
                                    className="p-1 w-full rounded-md transition bg-green-600 hover:bg-green-800 text-white"
                                >
                                    <div className="flex justify-center items-center relative">
                                        <IconChange className="fill-white w-4 absolute left-0 ml-2" />
                                        <div>Location</div>
                                    </div>
                                </button>
                            </td>
                            <td className="pl-4 rounded-md">
                                <div
                                    id={item.tree_uuid}
                                    onClick={(e) => deleteAccountHandler(e.currentTarget.id)}
                                    className="fill-white w-8 p-2 bg-gray-200 hover:bg-gray-400 transition rounded-md hover:cursor-pointer"
                                >
                                    <IconDeleteBtn className="fill-white" />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminForestItem;

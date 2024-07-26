import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { FormData } from "../../config/types";
import { adminApi } from "../../api";
import useVerify from "../../hook/useVerify";
import useAdminData from "../../hook/useAdminData";
import { IconChange } from "../../config/IconData";
import { useAdminStore } from "../../config/store";
import { twMerge as tw } from "tailwind-merge";

dayjs.extend(utc);
dayjs.extend(timezone);

const AdminForestItem = () => {
    const { data, setData } = useAdminStore();
    const { checkLoginStatus } = useVerify();
    const { fetchData } = useAdminData();

    const levelHandler = async (id: string) => {
        const level = window.prompt("변경하실 계정 레벨을 지정하세요.");
        if (!level) return;

        try {
            await checkLoginStatus();
            await adminApi.updateForestLevel(id, Number(level));
            const data = (await fetchData()) as FormData;
            setData(data);
        } catch (error) {
            console.error("Level Change Failed", error);
        }
    };

    const sortedForest = data.forest.sort();

    return (
        <div className="w-fit p-8 select-text">
            <table className="border-collapse w-fit text-xl">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">USER UUID</th>
                        <th className="border p-2">FOREST UUID</th>
                        <th className="border p-2">FOREST LEVEL</th>
                        <th className="border p-2">LEVEL CHANGE</th>
                    </tr>
                </thead>
                <tbody className="text-lg text-center">
                    {sortedForest.map((item) => (
                        <tr key={item.forest_uuid} className="">
                            <td className="border p-2">
                                <div
                                    className={tw(
                                        "hover:bg-white hover:text-black",
                                        "bg-slate-300 text-slate-300 rounded-md"
                                    )}
                                >
                                    {item.user_uuid}
                                </div>
                            </td>
                            <td className="border p-2">{item.forest_uuid}</td>
                            <td className="border p-2">{item.forest_level}</td>
                            <td className="border p-2">
                                <button
                                    onClick={() => levelHandler(item.forest_uuid)}
                                    className="p-1 select-none w-full rounded-md transition bg-green-600 hover:bg-green-800 text-white"
                                >
                                    <div className="flex justify-center items-center relative">
                                        <IconChange className="fill-white w-4 absolute left-0 ml-2" />
                                        <div>Level</div>
                                    </div>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminForestItem;

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { FormData, UserTreeDetail } from "../../config/types";
import { adminApi, treeApi } from "../../api";
import useVerify from "../../hook/useVerify";

import useAdminData from "../../hook/useAdminData";
import { IconChange, IconCopy, IconDeleteBtn } from "../../config/IconData";
import { useAdminStore } from "../../config/store";
import useSound from "use-sound";
import pingSound from "../../assets/sound/btn_ping.mp3";

dayjs.extend(utc);
dayjs.extend(timezone);

const AdminTreeItem = () => {
    const { data, setData } = useAdminStore();
    const { checkLoginStatus } = useVerify();
    const { fetchData } = useAdminData();
    const [playCopy] = useSound(pingSound, { volume: 0.75 });

    const levelHandler = async (treeId: string, userId: string) => {
        const level = window.prompt("변경하실 나무의 레벨을 지정하세요.");
        if (!level) return;

        const requestForm = {
            tree_level: Number(level),
            user_uuid: userId,
        };

        try {
            await checkLoginStatus();
            await adminApi.updateTree(treeId, requestForm);
            const data = (await fetchData()) as FormData;
            setData(data);
        } catch (error) {
            console.error("Level Change Failed", error);
        }
    };

    const locationHandler = async (treeId: string, userId: string) => {
        const location = window.prompt("변경하실 나무의 위치를 지정하세요.");
        if (!location) return;

        const requestForm = {
            location: Number(location),
            user_uuid: userId,
        };

        try {
            await checkLoginStatus();
            await adminApi.updateTree(treeId, requestForm);
            const data = (await fetchData()) as FormData;
            setData(data);
        } catch (error) {
            console.error("Location Change Failed", error);
        }
    };

    const deleteAccountHandler = async (id: string) => {
        const confirm = window.confirm("해당 나무를 정말로 삭제하겠습니까?");

        if (confirm) {
            try {
                await checkLoginStatus();
                //TODO: 수정필요
                await treeApi.deleteTree(id);
                const newData = (await fetchData()) as FormData;
                setData(newData);
            } catch (error) {
                console.error("Delete Account Failed", error);
            }
        }
    };

    const clipBoardHandler = async (item: UserTreeDetail) => {
        const form = `TREE_UUID: ${item.tree_uuid} \nTREE_NAME: ${item.tree_name} \nTREE_LEVEL: ${item.tree_level} \nTREE_LOCATION: ${item.location}
        `;

        await navigator.clipboard.writeText(form);
        playCopy();
    };

    return (
        <div className="w-full p-8 flex justify-center select-text">
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
                        <tr key={item.tree_detail.tree_uuid} className="">
                            <td className="border p-2">{item.tree_detail.tree_uuid}</td>
                            <td className="border p-2">{item.tree_detail.tree_name}</td>
                            <td className="border p-2">{item.tree_detail.tree_level}</td>

                            <td className="border p-2">
                                <button
                                    onClick={() =>
                                        levelHandler(item.tree_detail.tree_uuid, item.user_uuid)
                                    }
                                    className="select-none p-1 w-full rounded-md transition bg-green-600 hover:bg-green-800 text-white"
                                >
                                    <div className="flex justify-center items-center relative">
                                        <IconChange className="fill-white w-4 absolute left-0 ml-2" />
                                        <div>Level</div>
                                    </div>
                                </button>
                            </td>
                            <td className="border p-2">{item.tree_detail.location}</td>
                            <td className="border p-2">
                                <button
                                    onClick={() =>
                                        locationHandler(item.tree_detail.tree_uuid, item.user_uuid)
                                    }
                                    className="select-none p-1 w-full rounded-md transition bg-green-600 hover:bg-green-800 text-white"
                                >
                                    <div className="flex justify-center items-center relative">
                                        <IconChange className="fill-white w-4 absolute left-0 ml-2" />
                                        <div>Location</div>
                                    </div>
                                </button>
                            </td>
                            <td>
                                <div
                                    onClick={() => clipBoardHandler(item.tree_detail)}
                                    className="fill-white ml-2 p-2 bg-gray-300 hover:bg-gray-500 transition rounded-md cursor-pointer flex justify-center"
                                >
                                    <IconCopy className="fill-white w-fit h-6" />
                                </div>
                            </td>
                            <td className="pl-4 rounded-md">
                                <div
                                    onClick={() => deleteAccountHandler(item.tree_detail.tree_uuid)}
                                    className="fill-white ml-2 p-2 bg-gray-300 hover:bg-gray-500 transition rounded-md hover:cursor-pointer flex justify-center"
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

export default AdminTreeItem;

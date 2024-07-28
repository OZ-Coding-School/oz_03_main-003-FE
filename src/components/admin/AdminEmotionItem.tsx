import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { IconChange } from "../../config/IconData";
import { useAdminStore } from "../../config/store";
import { useState } from "react";
import ModalAdminChangeEmotion from "../common/modal/ModalAdminChangeEmotion";

dayjs.extend(utc);
dayjs.extend(timezone);

const AdminEmotionItem = () => {
    const { data } = useAdminStore();
    const [isModalOn, setIsModalOn] = useState(false);
    const [treeUUID, setTreeUUID] = useState("");

    const modalOnHandler = (uuid: string) => {
        setTreeUUID(uuid);
        setIsModalOn(true);
    };
    const modalOffHandler = () => {
        setIsModalOn(false);
    };

    const emotionData = data.emotion.sort((a, b) => {
        if (a.tree_uuid < b.tree_uuid) return -1;
        if (a.tree_uuid > b.tree_uuid) return 1;
        return 0;
    });

    return (
        <div className="w-full p-8 flex justify-center select-text">
            <table className="border-collapse w-full text-xl">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">TREE UUID</th>
                        <th className="border p-2">HAPPINESS</th>
                        <th className="border p-2">ANGER</th>
                        <th className="border p-2">SADNESS</th>
                        <th className="border p-2">WORRY</th>
                        <th className="border p-2">INDIFFERENCE</th>
                        <th className="border p-2">EMOTION CHANGE</th>
                    </tr>
                </thead>
                <tbody className="text-lg text-center">
                    {emotionData.map((item) => (
                        <tr key={item.tree_uuid} className="">
                            <td className="border p-2">{item.tree_uuid}</td>
                            <td className="border p-2">{item.emotions.happiness}</td>
                            <td className="border p-2">{item.emotions.anger}</td>
                            <td className="border p-2">{item.emotions.sadness}</td>
                            <td className="border p-2">{item.emotions.worry}</td>
                            <td className="border p-2">{item.emotions.indifference}</td>
                            <td className="border p-2">
                                <button
                                    onClick={() => modalOnHandler(item.tree_uuid)}
                                    className="p-1 select-none w-full rounded-md transition bg-green-600 hover:bg-green-800 text-white"
                                >
                                    <div className="flex justify-center items-center relative">
                                        <IconChange className="fill-white w-4 absolute left-0 ml-2" />
                                        <div>Emotion</div>
                                    </div>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isModalOn && <ModalAdminChangeEmotion onClose={modalOffHandler} uuid={treeUUID} />}
        </div>
    );
};

export default AdminEmotionItem;

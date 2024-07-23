import { treeApi } from "../../../api";
import { IconChange, IconDeleteBtn, IconDetail, IconUpdate } from "../../../config/IconData";
import { twMerge as tw } from "tailwind-merge";
import useVerify from "../../../hook/useVerify";
import useInfo from "../../../hook/useInfo";

interface ModalGridSettingProps {
    tree_uuid: string;
    onEditModal: (id: string) => void;
    onDetailModal: (id: string) => void;
}

const ModalGridSetting = ({ tree_uuid, onEditModal, onDetailModal }: ModalGridSettingProps) => {
    const { checkLoginStatus } = useVerify();
    const { getUserGridInfo } = useInfo();

    const editHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        onEditModal(e.currentTarget.id);
    };

    const deleteHandler = async () => {
        await checkLoginStatus();
        await treeApi.deleteTree(tree_uuid);
        await getUserGridInfo();
    };

    const detailHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        onDetailModal(e.currentTarget.id);
    };

    return (
        <>
            <div className="relative w-40 h-40 border-gray-600 mt-32">
                <div
                    className={tw(
                        "border h-[38px] border-gray-600 rounded-full",
                        "flex gap-1 justify-center bg-gray-800 fill-white text-zero p-1 max-w-auto",
                        "absolute top-0 left-1/2 -translate-x-1/2"
                    )}
                >
                    <button
                        id={tree_uuid}
                        title="자세히"
                        type="button"
                        onClick={detailHandler}
                        className="w-8 flex justify-center items-center py-1 px-2 hover:bg-gray-600 transition rounded-full"
                    >
                        <IconDetail className="w-4 h-4" />
                    </button>
                    <button
                        id={tree_uuid}
                        title="수정"
                        onClick={editHandler}
                        type="button"
                        className="w-8 flex justify-center items-center py-1 px-2 hover:bg-gray-600 transition rounded-full"
                    >
                        <IconUpdate className="w-4 h-4" />
                    </button>
                    <button
                        title="위치변경"
                        type="button"
                        className="w-8 flex justify-center items-center py-1 px-2 hover:bg-gray-600 transition rounded-full"
                    >
                        <IconChange className="w-4 h-4" />
                    </button>
                    <button
                        onClick={deleteHandler}
                        id="tree_uuid"
                        title="삭제"
                        type="button"
                        className="w-8 flex justify-center items-center py-1 px-2 hover:bg-gray-600 transition rounded-full"
                    >
                        <IconDeleteBtn className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default ModalGridSetting;

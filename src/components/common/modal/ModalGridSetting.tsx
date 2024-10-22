import { IconChange, IconDeleteBtn, IconDetail, IconUpdate } from "../../../config/IconData";
import { twMerge as tw } from "tailwind-merge";

interface ModalGridSettingProps {
    tree_uuid: string;
    onEditModal: (id: string) => void;
    onDetailModal: (id: string) => void;
    onMoveModal: (id: string) => void;
    onDeleteModal: (id: string) => void;
}

const ModalGridSetting = ({
    tree_uuid,
    onEditModal,
    onDetailModal,
    onMoveModal,
    onDeleteModal,
}: ModalGridSettingProps) => {
    const editHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        onEditModal(e.currentTarget.id);
    };

    const detailHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        onDetailModal(e.currentTarget.id);
    };

    const moveHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        onMoveModal(e.currentTarget.id);
    };
    const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        onDeleteModal(e.currentTarget.id);
    };
    return (
        <>
            <div className="relative w-40 h-40 border-gray-600">
                <div
                    className={tw(
                        "border bg-opacity-75 border-gray-600 rounded-full scale-[80%]",
                        "flex gap-1 justify-center bg-gray-800 fill-white text-zero p-1 max-w-auto",
                        "absolute -top-3 left-1/2 -translate-x-1/2"
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
                        id={tree_uuid}
                        onClick={moveHandler}
                        title="위치변경"
                        type="button"
                        className="w-8 flex justify-center items-center py-1 px-2 hover:bg-gray-600 transition rounded-full"
                    >
                        <IconChange className="w-4 h-4" />
                    </button>
                    <button
                        onClick={deleteHandler}
                        id={tree_uuid}
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

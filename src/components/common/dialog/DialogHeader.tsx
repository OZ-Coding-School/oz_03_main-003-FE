import { IconLeft } from "../../../config/IconData";
import { useDialogStore, useUserChatStore, useUserStore } from "../../../config/store";

interface DialogHeaderProps {
    onClose: () => void;
}

const DialogHeader = ({ onClose }: DialogHeaderProps) => {
    const { chatRooms } = useUserChatStore();
    const { userData } = useUserStore();
    const { chatroom_uuid } = useDialogStore();
    const treeUuid = chatRooms.find((data) => data.chat_room_uuid === chatroom_uuid)?.tree_uuid;
    const chatRoomName = chatRooms.find(
        (data) => data.chat_room_uuid === chatroom_uuid
    )?.chat_room_name;
    const treeName = userData.treeDetail.find((t) => t.tree_uuid === treeUuid)?.tree_name;

    return (
        <div className="select-none flex items-center w-full h-20 px-5 shadow-black shadow-lg">
            <button
                type="button"
                className="text-zero fill-white w-9 h-9 p-2 rounded-full hover:bg-gray-800 transition"
                onClick={onClose}
            >
                <IconLeft />
                뒤로가기
            </button>
            <p className="text-white ml-4">
                {chatRoomName} <span className="text-primary">{treeName}</span>
            </p>
        </div>
    );
};

export default DialogHeader;

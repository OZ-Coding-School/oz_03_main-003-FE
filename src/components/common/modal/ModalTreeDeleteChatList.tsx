import { useUserChatStore } from "../../../config/store";

interface ModalTreeDeleteChatList {
    treeUUID: string;
}

const ModalTreeDeleteChatList = ({ treeUUID }: ModalTreeDeleteChatList) => {
    const { chatRooms } = useUserChatStore();
    const filterChatRooms = chatRooms.filter((item) => item.tree_uuid === treeUUID);

    if (filterChatRooms.length === 0)
        return (
            <div className="mt-2 p-3 w-full h-[140px] bg-black border border-gray-600 overflow-y-scroll">
                <div className="text-literal-error text-xs">없음</div>
            </div>
        );

    return (
        <div className="mt-2 p-3 w-full h-[140px] bg-black border border-gray-600 overflow-y-scroll">
            {filterChatRooms.map((item) => (
                <div className="text-xs text-literal-error" key={item.chat_room_uuid}>
                    {item.chat_room_name}
                </div>
            ))}
        </div>
    );
};

export default ModalTreeDeleteChatList;

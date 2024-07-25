import { useEffect } from "react";
import useFetchTreeData from "./useFetchTreeData";
import useFetchChatRooms from "./useFetchChatRooms";
import useAddChatRoom from "./useAddChatRoom";
import useRemoveChatRoom from "./useRemoveChatRoom";
import { useUserStore } from "../config/store";

/**
 * @description 사용자의 채팅방 CRUD와 나무와의 관계를 위한 커스텀 훅 입니다.
 * @returns fetchTreeData 모든 나무 데이터를 서버에서 가져오고 'useUserStore'의 setTreeDetailData 상태 업데이트.
 *          tree_uuid / tree_name / tree_level / location
 * @returns fetchChatRooms 모든 채팅방 데이터를 서버에서 가져오고 'useUserStore'의 setChatRooms 상태 업데이트.
 *          chat_room_uuid / chat_room_name / tree_uuid
 * @returns addChatRooms 새로운 채팅방을 서버에 생성하고 'useUserStore'의 setChatRooms 상태 업데이트.
 * @returns removeChatRooms 특정 채팅방을 서버에서 삭제하고 'useUserStore'의 setChatRooms 상태 업데이트.
 */

const useChatRooms = () => {
    const { chatRooms } = useUserStore((state) => ({
        chatRooms: state.chatRooms,
    }));

    const { fetchTreeData } = useFetchTreeData();
    const { fetchChatRooms } = useFetchChatRooms();
    const { addChatRoom } = useAddChatRoom();
    const { removeChatRoom } = useRemoveChatRoom();

    useEffect(() => {
        fetchTreeData();
    }, [fetchTreeData]);

    return {
        chatRooms,
        fetchChatRooms,
        addChatRoom,
        removeChatRoom,
    };
};

export default useChatRooms;

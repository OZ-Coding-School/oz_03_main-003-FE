import useFetchChatRooms from "./useFetchChatRooms";
import useAddChatRoom from "./useAddChatRoom";
import useRemoveChatRoom from "./useRemoveChatRoom";
import { useUserChatStore } from "../../config/store";
import useUpdateChatRoom from "./useUpdateChatRoom";

/**
 * @description 사용자의 채팅방 CRUD와 나무와의 관계를 위한 커스텀 훅 입니다.
 * @returns fetchChatRooms 모든 채팅방 데이터를 서버에서 가져오고 'useUserChatStore'의 setChatRooms 상태 업데이트.
 *          chat_room_uuid / chat_room_name / tree_uuid
 * @returns addChatRooms 새로운 채팅방을 서버에 생성하고 'useUserChatStore'의 setChatRooms 상태 업데이트.
 * @returns removeChatRooms 특정 채팅방을 서버에서 삭제하고 'useUserChatStore'의 setChatRooms 상태 업데이트.
 * @returns updateChatRooms 특정 채팅방의 정보를 업데이트하고 'useUserChatStore'의 setChatRooms 상태 업데이트.
 */

const useChatRooms = () => {
    const { chatRooms } = useUserChatStore((state) => ({
        chatRooms: state.chatRooms,
    }));

    const { fetchChatRooms } = useFetchChatRooms();
    const { addChatRoom } = useAddChatRoom();
    const { removeChatRoom } = useRemoveChatRoom();
    const { updateChatRoom } = useUpdateChatRoom();

    return {
        chatRooms,
        fetchChatRooms,
        addChatRoom,
        removeChatRoom,
        updateChatRoom,
    };
};

export default useChatRooms;

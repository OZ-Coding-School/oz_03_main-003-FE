import create from "zustand";
import { axiosInstance } from "../api/axios";
import {
    UserAccount,
    UserLevel,
    UserTree,
    TreeItem,
    UserTreeDetail,
    UserTreeEmotionDetail,
} from "./types";

interface ModalStore {
    modal: boolean;
    setModal: (bool: boolean) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
    modal: false,

    setModal: (bool: boolean) =>
        set(() => ({
            modal: bool,
        })),
}));

interface UserStore {
    userData: {
        user: UserAccount;
        level: UserLevel;
        tree: UserTree;
        treeDetail: UserTreeDetail[];
        treeEmotion: UserTreeEmotionDetail | object;
        treeUuid: string;
    };
    setUserData: (data: UserAccount) => void;
    setLevelData: (data: UserLevel) => void;
    setTreeData: (data: UserTree) => void;
    setTreeDetailData: (data: UserTreeDetail[]) => void;
    setTreeDetailEmotionData: (data: UserTreeEmotionDetail) => void;
    setTreeUuid: (uuid: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
    userData: {
        user: {
            id: "",
            username: "...",
            imgUrl: "/img/profile-placeholder.png",
            email: "...",
            created_at: "...",
        },
        level: {
            userLevel: 0,
            userExperience: 0,
            forestUUID: "",
        },
        tree: {
            treeMax: 0,
            treeCurrent: 0,
            gridSize: 0,
            accessibleIndices: [],
            originIndices: [],
        },
        treeDetail: [],
        treeEmotion: {},
        treeUuid: "",
    },

    setUserData: (data: UserAccount) =>
        set((state) => ({
            userData: { ...state.userData, user: data },
        })),
    setLevelData: (data: UserLevel) =>
        set((state) => ({
            userData: { ...state.userData, level: data },
        })),
    setTreeData: (data: UserTree) =>
        set((state) => ({
            userData: { ...state.userData, tree: data },
        })),
    setTreeDetailData: (data: UserTreeDetail[]) =>
        set((state) => ({
            userData: { ...state.userData, treeDetail: data },
        })),
    setTreeDetailEmotionData: (data: UserTreeEmotionDetail) =>
        set((state) => ({
            userData: { ...state.userData, treeEmotion: data },
        })),
    setTreeUuid: (uuid: string) =>
        set((state) => ({
            userData: { ...state.userData, treeUuid: uuid },
        })),
}));

interface ChatStore {
    chatList: ChatRoom[];
    treeList: TreeItem[]; // treeList 추가
    treeUuid: string;
    addChatRoom: (chatRoom: ChatRoom) => void;
    setChatList: (chatList: ChatRoom[]) => void;
    setTreeList: (treeList: TreeItem[]) => void; // setTreeList 추가
    setTreeUuid: (uuid: string) => void;
    fetchTreeList: () => Promise<void>;
    deleteChatRoom: (chatRoomId: string) => Promise<void>;
}

export interface ChatRoom {
    chat_room_uuid: string;
    chat_room_name: string;
    tree_uuid: string;
    created_at: string;
    tree_name: string;
}
export const useChatStore = create<ChatStore>((set) => ({
    chatList: [],
    treeList: [], // 초기값 설정
    treeUuid: "",
    addChatRoom: (chatRoom) =>
        set((state) => ({
            chatList: [chatRoom, ...state.chatList],
        })),
    setChatList: (chatList) =>
        set(() => ({
            chatList: chatList,
        })),
    setTreeList: (treeList) =>
        set(() => ({
            treeList: treeList,
        })),
    setTreeUuid: (uuid: string) =>
        set(() => ({
            treeUuid: uuid,
        })),
    fetchTreeList: async () => {
        try {
            const response = await axiosInstance.get("/tree");
            const treeList: TreeItem[] = response.data;
            set({ treeList });
        } catch (error) {
            console.error("Failed to fetch tree list:", error);
        }
    },
    deleteChatRoom: async (chatRoomId: string) => {
        try {
            await axiosInstance.delete(`/chat/${chatRoomId}`);
            set((state) => ({
                chatList: state.chatList.filter(
                    (chatRoom) => chatRoom.chat_room_uuid !== chatRoomId
                ),
            }));
        } catch (error) {
            console.error("Failed to delete chat room:", error);
        }
    },
}));

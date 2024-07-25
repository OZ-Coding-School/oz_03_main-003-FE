import { create } from "zustand";
import { UserAccount, UserLevel, UserTree, UserTreeDetail, UserTreeEmotionDetail } from "./types";

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
    };
    setUserData: (data: UserAccount) => void;
    setLevelData: (data: UserLevel) => void;
    setTreeData: (data: UserTree) => void;
    setTreeDetailData: (data: UserTreeDetail[]) => void;
    setTreeDetailEmotionData: (data: UserTreeEmotionDetail) => void;
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
            originIndices: [], // 초기값 추가
        },
        treeDetail: [], // 초기값을 빈 배열로 지정
        treeEmotion: {}, // 초기값 지정
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
}));

export interface ChatRoom {
    chat_room_uuid: string;
    chat_room_name: string;
    tree_uuid: string;
    created_at: string;
    tree_name: string;
}

interface ChatStore {
    chatList: ChatRoom[];
    addChatRoom: (chatRoom: ChatRoom) => void;
    setChatList: (chatList: ChatRoom[]) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
    chatList: [],
    addChatRoom: (chatRoom) =>
        set((state) => ({
            chatList: [chatRoom, ...state.chatList],
        })),
    setChatList: (chatList) =>
        set(() => ({
            chatList: chatList,
        })),
}));

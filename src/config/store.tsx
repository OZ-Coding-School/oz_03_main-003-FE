// config/store.js
import { create } from "zustand";
import {
    UserAccount,
    UserLevel,
    UserTree,
    UserTreeDetail,
    UserTreeEmotionDetail,
    ChatRoom,
    UserData,
    UserMessage,
    ChatRoomMessages,
    AIResponse,
    FormData,
} from "./types";

interface ModalStore {
    modal: boolean;
    setModal: (bool: boolean) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
    modal: false,
    setModal: (bool: boolean) => set(() => ({ modal: bool })),
}));

interface UserStore {
    userData: UserData;
    setUserData: (data: UserAccount) => void;
    setLevelData: (data: UserLevel) => void;
    setTreeData: (data: UserTree) => void;
    setTreeDetailData: (data: UserTreeDetail[]) => void;
    setTreeEmotionData: (data: UserTreeEmotionDetail[]) => void;
}

export const useUserStore = create<UserStore>((set) => ({
    userData: {
        user: {
            id: "",
            username: "...",
            imgUrl: "/img/profile-placeholder.png",
            email: "...",
            created_at: "...",
            admin: false,
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
        treeEmotion: [],
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
    setTreeEmotionData: (data: UserTreeEmotionDetail[]) =>
        set((state) => ({
            userData: { ...state.userData, treeEmotion: data },
        })),
}));

interface UserChatStore {
    chatRooms: ChatRoom[];
    userMessages: ChatRoomMessages;
    aiResponses: { [chatRoomUuid: string]: AIResponse[] };
    setChatRooms: (data: ChatRoom[]) => void;
    setUserMessages: (chatRoomUuid: string, data: UserMessage[]) => void;
    setAIResponse: (chatRoomUuid: string, data: AIResponse) => void;
}

export const useUserChatStore = create<UserChatStore>((set) => ({
    chatRooms: [],
    setChatRooms: (data: ChatRoom[]) => set(() => ({ chatRooms: data })),
    userMessages: {},
    aiResponses: {},

    setChatRooms: (data: ChatRoom[]) =>
        set(() => ({
            chatRooms: data,
        })),
    setUserMessages: (chatRoomUuid: string, data: UserMessage[]) =>
        set((state) => ({
            userMessages: {
                ...state.userMessages,
                [chatRoomUuid]: data,
            },
        })),
    setAIResponse: (chatRoomUuid: string, data: AIResponse) =>
        set((state) => ({
            aiResponses: {
                ...state.aiResponses,
                [chatRoomUuid]: [...(state.aiResponses[chatRoomUuid] || []), data],
            },
        })),
}));

interface AdminStore {
    data: FormData;
    setData: (data: FormData) => void;
}

export const useAdminStore = create<AdminStore>((set) => ({
    data: {
        user: [],
        tree: [],
        forest: [],
        emotion: [],
    },
    setData: (data: FormData) =>
        set(() => ({
            data: data,
        })),
}));

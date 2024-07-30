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
    AIMessage,
    FormData,
    ResponseAIMessage,
} from "./types";

//? MUSIC GLOBAL STATE
interface MusicStore {
    play: boolean;
    setPlay: () => void;
}

export const useMusicStore = create<MusicStore>((set) => ({
    play: false,
    setPlay: () =>
        set((state) => ({
            play: !state.play,
        })),
}));

//? TOASTER GLOBAL STATE
interface ModalStore {
    modal: boolean;
    setModal: (bool: boolean) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
    modal: false,
    setModal: (bool: boolean) => set(() => ({ modal: bool })),
}));

//? USER DATA GLOBAL STATE
interface UserStore {
    userData: UserData;
    setUserData: (data: UserAccount) => void;
    setLevelData: (data: UserLevel) => void;
    setTreeData: (data: UserTree) => void;
    setTreeDetailData: (data: UserTreeDetail[]) => void;
    setTreeEmotionData: (data: UserTreeEmotionDetail[]) => void;
    setTreeDetailEmotionData: (data: UserTreeEmotionDetail[]) => void;
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
    setTreeDetailEmotionData: (data: UserTreeEmotionDetail[]) =>
        set((state) => ({
            userData: { ...state.userData, treeEmotion: data },
        })),
}));

//? USER CHAT DATA GLOBAL STATE
interface UserChatStore {
    chatRooms: ChatRoom[];

    setChatRooms: (data: ChatRoom[]) => void;
}

export const useUserChatStore = create<UserChatStore>((set) => ({
    chatRooms: [],

    setChatRooms: (data: ChatRoom[]) =>
        set(() => ({
            chatRooms: data,
        })),
}));

interface DialogStore {
    messages: {
        ai: AIMessage[];
        user: UserMessage[];
    };
    chatroom_uuid: string;
    selected_tree: {
        tree_uuid: string;
        tree_name: string;
    };
    initUserMessages: (data: UserMessage[]) => void;
    initAiMessages: (data: AIMessage[]) => void;
    setUserMessages: (data: UserMessage) => void;
    setAiMessages: (data: ResponseAIMessage) => void;
    setRoomData: (uuid: string) => void;
    setTreeData: (uuid: string, name: string) => void;
    setStateChange: (index: number) => void;
}

export const useDialogStore = create<DialogStore>((set) => ({
    messages: {
        ai: [],
        user: [],
    },
    chatroom_uuid: "",
    selected_tree: {
        tree_uuid: "",
        tree_name: "",
    },

    initUserMessages: (data) =>
        set((state) => ({
            messages: { ...state.messages, user: data },
        })),
    initAiMessages: (data) =>
        set((state) => ({
            messages: { ...state.messages, ai: data },
        })),
    setAiMessages: (data) =>
        set((state) => ({
            ...state,
            messages: { ...state.messages, ai: [...state.messages.ai, data] },
        })),
    setUserMessages: (data) =>
        set((state) => ({
            ...state,
            messages: { ...state.messages, user: [...state.messages.user, data] },
        })),
    setRoomData: (uuid: string) =>
        set(() => ({
            chatroom_uuid: uuid,
        })),
    setTreeData: (uuid, name) =>
        set(() => ({
            selected_tree: {
                tree_uuid: uuid,
                tree_name: name,
            },
        })),
    setStateChange: (index: number) =>
        set((state) => ({
            messages: {
                ...state.messages,

                ai: state.messages.ai.map((message, i) =>
                    i === index ? { ...message, applied_state: !message.applied_state } : message
                ),
            },
        })),
}));

//? ADMIN DATA GLOBAL STATE
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

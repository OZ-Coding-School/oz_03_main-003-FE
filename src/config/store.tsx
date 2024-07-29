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
    DialogItem,
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
    dialogList: { [chatRoomUuid: string]: DialogItem[] };
    userMessage: { [chatRoomUuid: string]: UserMessage[] };
    aiMessages: { [chatRoomUuid: string]: AIMessage[] };
    setUserMessage: (chatRoomUuid: string, data: UserMessage) => void;
    setAIMessage: (chatRoomUuid: string, data: AIMessage) => void;
    addDialogItem: (chatRoomUuid: string, dialogItem: DialogItem) => void;
    updateDialogItem: (chatRoomUuid: string, index: number, updatedDialogItem: DialogItem) => void;
    updateSingleDialog: (chatRoomUuid: string, messageUuid: string, newStatuses: boolean) => void;
}

export const useDialogStore = create<DialogStore>((set) => ({
    dialogList: {},
    userMessage: {},
    aiMessages: {},
    setUserMessage: (chatRoomUuid: string, data: UserMessage) =>
        set((state) => ({
            userMessage: {
                ...state.userMessage,
                [chatRoomUuid]: [...(state.aiMessages[chatRoomUuid] || []), data],
            },
        })),
    setAIMessage: (chatRoomUuid: string, data: AIMessage) =>
        set((state) => ({
            aiMessages: {
                ...state.aiMessages,
                [chatRoomUuid]: [...(state.aiMessages[chatRoomUuid] || []), data],
            },
        })),
    addDialogItem: (chatRoomUuid, dialogItem) =>
        set((state) => ({
            dialogList: {
                ...state.dialogList,
                [chatRoomUuid]: [...(state.dialogList[chatRoomUuid] || []), dialogItem],
            },
        })),
    updateDialogItem: (chatRoomUuid, index, updatedDialogItem) =>
        set((state) => {
            const updatedDialogs = [...(state.dialogList[chatRoomUuid] || [])];
            updatedDialogs[index] = updatedDialogItem;

            return {
                dialogList: {
                    ...state.dialogList,
                    [chatRoomUuid]: updatedDialogs,
                },
            };
        }),

    updateSingleDialog: (chatRoomUuid: string, messageUuid: string, newStatus: boolean) =>
        set((state) => {
            const dialogList = state.dialogList[chatRoomUuid] || [];
            const updatedDialogs = dialogList.map((dialog) => {
                if (dialog.aiMessage) {
                    return dialog.aiMessage.message_uuid === messageUuid
                        ? { ...dialog, applied_state: newStatus }
                        : dialog;
                } else {
                    return dialog;
                }
            });

            return {
                dialogList: {
                    ...state.dialogList,
                    [chatRoomUuid]: updatedDialogs,
                },
            };
        }),
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

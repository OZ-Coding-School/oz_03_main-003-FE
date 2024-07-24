import { create } from "zustand";
import {
    UserAccount,
    UserLevel,
    UserTree,
    UserTreeDetail,
    UserTreeEmotionDetail,
    ChatRoom,
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
        treeDetail: UserTreeDetail[] | Record<string, never>;
        treeEmotion: UserTreeEmotionDetail[] | Record<string, never>;
    };
    chatRooms: ChatRoom[];
    setUserData: (data: UserAccount) => void;
    setLevelData: (data: UserLevel) => void;
    setTreeData: (data: UserTree) => void;
    setTreeDetailData: (data: UserTreeDetail[]) => void;
    setTreeDetailEmotionData: (data: UserTreeEmotionDetail[]) => void;
    setChatRooms: (rooms: ChatRoom[]) => void;
}

/**
 * @function setUserData: (data: UserAccount) => void;
 * @function setLevelData: (data: UserLevel) => void;
 * @function setTreeData: (data: UserTree) => void;
 * @function setTreeDetailData: (data: UserTreeDetail) => void;
 * @function setChatRooms : (data : chatRooms[]) => void;
 */
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
        treeEmotion: [],
    },
    chatRooms: [],

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
    setTreeDetailEmotionData: (data: UserTreeEmotionDetail[]) =>
        set((state) => ({
            userData: { ...state.userData, treeEmotion: data },
        })),
    setChatRooms: (rooms: ChatRoom[]) =>
        set(() => ({
            chatRooms: rooms,
        })),
}));

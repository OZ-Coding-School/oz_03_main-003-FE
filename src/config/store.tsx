import { create } from "zustand";
import { UserAccount, UserLevel } from "./types";

interface UserStore {
    userData: {
        user: UserAccount;
        level: UserLevel;
    };
    setUserData: (data: UserAccount) => void;
    setLevelData: (data: UserLevel) => void;
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
            treeMax: 0,
            treeCurrent: 0,
            gridSize: 0,
            accessibleIndices: [6, 7, 11, 12],
            forest_UUID: "0",
        },
        // ? Tree 데이터도 추가해야 할듯
    },

    setUserData: (data: UserAccount) =>
        set((state) => ({
            userData: { ...state.userData, user: data },
        })),
    setLevelData: (data: UserLevel) =>
        set((state) => ({
            userData: { ...state.userData, level: data },
        })),
}));

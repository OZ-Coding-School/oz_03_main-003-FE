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
            username: "Guest",
            imgUrl: "...",
            email: "...",
            created_at: "...",
        },
        level: {
            userLevel: 1,
            treeMax: 3,
            treeCurrent: 0,
            gridSize: 0,
        },
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

export interface UserAccount {
    id: string;
    username: string;
    imgUrl: string;
    email: string;
    created_at: string;
}

export interface UserLevel {
    userLevel: number;
    userExperience: number;
    forestUUID: string;
}

export interface UserTreeDetail {
    tree_uuid: string;
    tree_name: string;
    tree_level: number;
    location: number;
}
export interface UserTreeEmotionDetail {
    tree_uuid: string;
    emotion: {
        happiness: number;
        anger: number;
        sadness: number;
        worry: number;
        indifference: number;
    };
}

export interface Emotion {
    happiness: number;
    anger: number;
    sadness: number;
    worry: number;
    indifference: number;
}

export interface UserTree {
    treeMax: number;
    treeCurrent: number;
    gridSize: number;
    accessibleIndices: number[];
}

export interface AccessibleIndices {
    [key: number]: number[];
}

export enum AuthStatusType {
    LOADING = 1,
    VERIFIED = 2,
    UNVERIFIED = 3,
}

export interface TreeFormData {
    tree_name: string;
    tree_level: number;
    location: number;
    chat_room_uuid: string;
}

export interface AdminPageUserData {
    uuid: string;
    username: string;
    email: string;
    profile_image: string;
    social_platform: string;
    created_at: string;
    updated_at: string;
    last_login: string;
    is_active: boolean;
    is_superuser: boolean;
}

export interface FormData {
    user: AdminPageUserData[];
    tree: UserTreeDetail[];
    emotion: UserTreeEmotionDetail[];
}

export interface UserAccount {
    id: string;
    username: string;
    imgUrl: string;
    email: string;
    created_at: string;
    admin: boolean;
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
    emotions: {
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
    originIndices: number[];
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
    tree_name?: string;
    tree_level?: number;
    location?: number;
}

// chat types
export interface CreateChatRoomRequest {
    chat_room_name: string;
    tree_uuid: string;
}

export interface CreateChatRoomResponse {
    chat_room_uuid: string;
}

export interface ChatRoom {
    chat_room_uuid: string;
    chat_room_name: string;
    tree_uuid: string;
}

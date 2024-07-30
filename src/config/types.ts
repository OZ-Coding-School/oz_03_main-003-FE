//? ADMIN DATA TYPES -------------------//
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
export interface AdminPageForestData {
    user_uuid: string;
    forest_uuid: string;
    forest_level: number;
}
export interface FormData {
    user: AdminPageUserData[];
    tree: AdminTreeDetail[];
    emotion: UserTreeEmotionDetail[];
    forest: AdminPageForestData[];
}

export interface AdminTreeDetail {
    user_uuid: string;
    tree_detail: {
        tree_uuid: string;
        tree_name: string;
        tree_level: number;
        location: number;
    };
}

export interface AdminTreeFormData {
    user_uuid: string;
    tree_name?: string;
    tree_level?: number;
    location?: number;
}

export interface AdminEmotionFormData {
    happiness?: number;
    anger?: number;
    sadness?: number;
    worry?: number;
    indifference?: number;
}

//? USER DATA TYPES -------------------//

export interface UserData {
    user: UserAccount;
    level: UserLevel;
    tree: UserTree;
    treeDetail: UserTreeDetail[] | Record<string, never>;
    treeEmotion: UserTreeEmotionDetail[];
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
export interface Emotions {
    happiness: number;
    anger: number;
    sadness: number;
    worry: number;
    indifference: number;
}

export interface UserTreeEmotionDetail {
    tree_uuid: string;
    emotions: Emotions;
    type: string;
    count: number;
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

export interface LocationData {
    nowId: string;
    nowLocation: number;
    selectLocation: number;
}

export interface SwapLocationData extends LocationData {
    selectId: string;
}

export interface TreeFormData {
    tree_name?: string;
    tree_level?: number;
    location?: number;
}

//? CONST DATA TYPES -------------------//

export type TREE_CONST_TYPE = {
    [key: number]: string;
};
export type TREE_CONST_TYPE_LIST = {
    [key: number]: {
        name: string;
        style: string;
        desc: string;
    };
};

//? USER CHATROOM TYPES -------------------//

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

export interface UpdateChatRoom {
    chat_room_uuid?: string;
    tree_uuid?: string;
}

export interface UserMessage {
    message_uuid: string;
    message: string;
}

export interface Sentiment {
    happiness: number;
    anger: number;
    sadness: number;
    worry: number;
    indifference: number;
}

export interface AIMessage {
    message_uuid: string;
    message: string;
    sentiments: Sentiment;
    applied_state: boolean;
    date?: string;
}
export interface ResponseAIMessage {
    message_uuid: string;
    message: string;
    sentiments: Sentiment;
    applied_state: boolean;
    date?: string;
}

export interface DialogItem {
    userMessage: UserMessage;
    aiMessage?: AIMessage;
    applied_state?: boolean;
}

export interface ResponseDialogList {
    ai: {
        message: string;
        message_uuid: string;
        sentiments: Sentiment;
    };
    user: {
        message: string;
        message_uuid: string;
    };
    applied_state: boolean;
}

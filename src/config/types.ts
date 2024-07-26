// types.ts

// 사용자 계정 정보
export interface UserAccount {
    id: string;
    username: string;
    imgUrl: string;
    email: string;
    created_at: string;
}

// 사용자 레벨 정보
export interface UserLevel {
    userLevel: number;
    userExperience: number;
    forestUUID: string;
}

// 사용자 트리 상세 정보
export interface UserTreeDetail {
    tree_uuid: string;
    tree_name: string;
    tree_level: number;
    location: number;
}

// 사용자 트리 감정 상세 정보
export interface UserTreeEmotionDetail {
    tree_uuid: string;
    emotions: Emotions;
    type: string;
    count: number;
}
interface TreeEmotion {
    emotions: {
        happiness: number;
        anger: number;
        sadness: number;
        worry: number;
        indifference: number;
    };
}

// 감정 타입
export interface Emotions {
    happy: number;
    angry: number;
    sorrow: number;
    worry: number;
    indifference: number;
}

// 사용자 트리 정보
export interface UserTree {
    treeMax: number;
    treeCurrent: number;
    gridSize: number;
    accessibleIndices: number[];
    originIndices: number[];
}

// 접근 가능한 인덱스
export interface AccessibleIndices {
    [key: number]: number[];
}

// 인증 상태 타입
export enum AuthStatusType {
    LOADING = 1,
    VERIFIED = 2,
    UNVERIFIED = 3,
}

// 트리 폼 데이터
export interface TreeFormData {
    tree_name?: string;
    tree_level?: number;
    location?: number;
}

// 채팅방 생성 요청
export interface CreateChatRoomRequest {
    chat_room_name: string;
    tree_uuid: string;
}

// 채팅방 생성 응답
export interface CreateChatRoomResponse {
    chat_room_uuid: string;
}

// 채팅방 정보
export interface ChatRoom {
    chat_room_uuid: string;
    chat_room_name: string;
    tree_uuid: string;
}

// 사용자 데이터
export interface UserData {
    user: UserAccount;
    level: UserLevel;
    tree: UserTree;
    treeDetail: UserTreeDetail[] | Record<string, never>;
    treeEmotion: UserTreeEmotionDetail[];
}

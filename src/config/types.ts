export interface UserAccount {
    id: string;
    username: string;
    imgUrl: string;
    email: string;
    created_at: string;
}

export interface UserLevel {
    userLevel: number;
    treeMax: number;
    treeCurrent: number;
    gridSize: number;
    userExperience: number;
}

export interface AccessibleIndices {
    [key: number]: number[];
}

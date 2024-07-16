export interface UserInfoData {
    name: string;
    imgUrl: string;
    email: string;
    level: number;
    growth: number;
    joinDate: string;
    treeMax: number;
    treeCurrent: number;
    gridSize: number;
}

export const UserInfoDummy: UserInfoData = {
    name: "User01",
    imgUrl: "https://example.com/profile.jpg",
    email: "user01@example.com",
    level: 1,
    growth: 75,
    joinDate: "2023-09-15",
    treeMax: 3,
    treeCurrent: 1,
    gridSize: 2,
};

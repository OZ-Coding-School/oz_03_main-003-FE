import { AccessibleIndices } from "../../config/types";

export const accessibleIndices: AccessibleIndices = {
    1: [6, 7, 11, 12],
    2: [6, 7, 8, 11, 12, 13, 16, 17, 18],
    3: [6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 23, 24],
    4: [6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 23, 24],
    5: Array.from({ length: 25 }, (_, i) => i),
};

export const userExperience = {
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
};

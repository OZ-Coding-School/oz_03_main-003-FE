type AccessibleIndices = { [key: number]: number[] };

export const accessibleIndices: AccessibleIndices = {
    0: [6, 7, 11, 12],
    1: [6, 7, 11, 12],
    2: [6, 7, 8, 11, 12, 13, 16, 17, 18],
    3: [6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 23, 24],
    4: [6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 23, 24],
};

export const userExperience: { [key: number]: number } = {
    0: 50,
    ...Object.fromEntries(Array.from({ length: 99 }, (_, i) => [i + 1, (i + 1) * 100])),
};

export const calculateExperience = (level: number, currentExperience: number): string => {
    const maxLevel = Object.keys(userExperience).length - 1;

    if (level < 0 || level > maxLevel) {
        return "Invalid level";
    }

    const requiredExperience = userExperience[level];
    const percentage = (currentExperience / requiredExperience) * 100;

    return Math.min(percentage, 100).toFixed(2);
};

export const calculateForest = (level: number) => {
    if (level < 0 || level > 99) {
        throw new Error("Invalid level");
    }

    if (level <= 1) {
        return {
            userLevel: level,
            treeMax: 4,
            treeCurrent: 0,
            gridSize: 1,
            experience: 0,
            accessibleIndices: accessibleIndices[level],
        };
    } else if (level <= 2) {
        return {
            userLevel: level,
            treeMax: 9,
            treeCurrent: 0,
            gridSize: 2,
            experience: 0,
            accessibleIndices: accessibleIndices[level],
        };
    } else if (level <= 4) {
        return {
            userLevel: level,
            treeMax: 16,
            treeCurrent: 0,
            gridSize: 2,
            experience: 0,
            accessibleIndices: accessibleIndices[level],
        };
    } else {
        return {
            userLevel: level,
            treeMax: 25,
            treeCurrent: 0,
            gridSize: 2,
            experience: 0,
            accessibleIndices: Array.from({ length: 25 }, (_, i) => i),
        };
    }
};

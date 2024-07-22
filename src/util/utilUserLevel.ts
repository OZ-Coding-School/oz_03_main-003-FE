const userExperience: { [key: number]: number } = {
    0: 50,
    ...Object.fromEntries(Array.from({ length: 99 }, (_, i) => [i + 1, (i + 1) * 100])),
};

const calculateExperience = (level: number, currentExperience: number): string => {
    const maxLevel = Object.keys(userExperience).length - 1;

    if (level < 0 || level > maxLevel) {
        return "Invalid level";
    }
    const requiredExperience = userExperience[level];

    const percentage = (currentExperience / requiredExperience) * 100;

    return Math.min(percentage, 100).toFixed(2);
};

export const calculateUserLevel = (level: number) => {
    if (level < 0 || level > 99) {
        throw new Error("Invalid level");
    }

    const currentExp = 30;

    if (level <= 1) {
        return {
            userLevel: level,
            experience: Number(calculateExperience(level, currentExp)),
        };
    } else if (level <= 2) {
        return {
            userLevel: level,
            experience: Number(calculateExperience(level, currentExp)),
        };
    } else {
        return {
            userLevel: level,
            experience: Number(calculateExperience(level, currentExp)),
        };
    }
};

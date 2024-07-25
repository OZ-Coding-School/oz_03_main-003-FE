export const calculateTreeType = (emotion: string) => {
    switch (emotion) {
        case "happiness":
            return 1;
        case "sadness":
            return 2;
        case "worry":
            return 3;
        case "indifference":
            return 4;
        case "anger":
            return 5;
        default:
            return 0;
    }
};

const generateSparkles = (count: number) => {
    const sparkles = [];
    for (let i = 0; i < count; i++) {
        sparkles.push({
            id: i,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 3 + 1,
            delay: Math.random() * 5,
        });
    }
    return sparkles;
};

export default generateSparkles;

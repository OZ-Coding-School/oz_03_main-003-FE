import Bar from "./Bar";

const Progress = () => {
    return (
        <div className="flex flex-col mb-4">
            <div className="text-white mt-2 text-xl font-title">작업 진척도 현황판</div>
            <Bar text="Logo" value={100} />
            <Bar text="Social Login Button" value={1} />
            <Bar text="Global Navigation Bar" value={100} />
            <Bar text="Button" value={100} />
            <Bar text="Emotion Badge" value={100} />
            <Bar text="Chat list" value={100} />
            <Bar text="Create Chat Modal" value={100} />
            <Bar text="Delete Chat Modal" value={100} />
            <Bar text="Update Chat Modal" value={100} />
            <Bar text="Input Chat" value={100} />
            <Bar text="Chat box" value={1} />
            <Bar text="Home user Info" value={1} />
            <Bar text="Home Modal" value={100} />
            <Bar text="MyPage User Info" value={1} />
            <Bar text="Grid" value={1} />
        </div>
    );
};

export default Progress;

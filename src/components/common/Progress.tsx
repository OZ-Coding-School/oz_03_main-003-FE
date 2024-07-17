import Bar from "./Bar";

const Progress = () => {
    return (
        <div className="flex flex-col mb-4">
            <div className="text-white mt-2 text-xl font-title">작업 진척도 현황판</div>
            <Bar text="Logo" value={100} />
            <Bar text="Social Login Button" value={100} />
            <Bar text="Global Navigation Bar" value={100} />
            <Bar text="Button" value={100} />
            <Bar text="Emotion Badge" value={100} />
            <Bar text="Chat list" value={100} />
            <Bar text="Create Chat Modal" value={100} />
            <Bar text="Delete Chat Modal" value={100} />
            <Bar text="Update Chat Modal" value={100} />
            <Bar text="Input Chat" value={100} />
            <Bar text="Home user Info" value={100} />
            <Bar text="Create tree modal" value={100} />
            <Bar text="Tree detail modal" value={100} />
            <Bar text="Delete tree modal" value={100} />
            <Bar text="Change tree location" value={100} />
            <Bar text="MyPage User Info" value={100} />
        </div>
    );
};

export default Progress;

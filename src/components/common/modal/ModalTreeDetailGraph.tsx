import { twMerge as tw } from "tailwind-merge";
import {
    IconAngry,
    IconHappy,
    IconIndifference,
    IconSorrow,
    IconWorry,
} from "../../../config/IconData";

interface ModalTreeDetailGraphProps {
    emotions: {
        happiness: number;
        anger: number;
        sadness: number;
        worry: number;
        indifference: number;
    };
}

const ModalTreeDetailGraph = ({ emotions }: ModalTreeDetailGraphProps) => {
    //? 해당 데이터는 API 적용시 수정될 데이터
    const emotionData = [
        {
            name: "분노",
            Icon: IconAngry,
            color: "bg-literal-angry text-literal-angry fill-literal-angry",
            count: emotions.anger,
        },
        {
            name: "행복",
            Icon: IconHappy,
            color: "bg-literal-happy text-literal-happy fill-literal-happy",
            count: emotions.happiness,
        },
        {
            name: "슬픔",
            Icon: IconSorrow,
            color: "bg-literal-sorrow text-literal-sorrow fill-literal-sorrow",
            count: emotions.sadness,
        },
        {
            name: "걱정",
            Icon: IconWorry,
            color: "bg-literal-worry text-literal-worry fill-literal-worry",
            count: emotions.worry,
        },
        {
            name: "무관심",
            Icon: IconIndifference,
            color: "bg-gray-600 text-gray-600 fill-gray-600",
            count: emotions.indifference,
        },
    ];

    return (
        <div className="w-full h-[200px] flex flex-col">
            <main className="relative flex h-[160px]">
                <article className="w-[20px] border-r border-gray-400 h-full flex flex-col justify-between items-center">
                    <div className="text-gray-200 text-xs">10</div>
                    <div className="text-gray-200 text-xs">0</div>
                </article>
                <article className="w-full h-full border-b border-gray-400">
                    <div className="w-full h-full pl-4 flex gap-[44px] items-end relative">
                        {emotionData.map(({ name, color, count }) => (
                            <div
                                key={name}
                                style={{ "--target-height": `${count}%` } as React.CSSProperties}
                                className={tw(
                                    "relative border-white z-10 flex gap-[40px] w-2 rounded-t-[2px] animate-height",
                                    color
                                )}
                            ></div>
                        ))}
                    </div>
                    <div className="absolute w-[calc(100%-20px)] border-gray-600 border-b top-0 mt-8"></div>
                    <div className="absolute w-[calc(100%-20px)] border-gray-600 border-b top-0 mt-16"></div>
                    <div className="absolute w-[calc(100%-20px)] border-gray-600 border-b top-0 mt-24"></div>
                    <div className="absolute w-[calc(100%-20px)] border-gray-600 border-b top-0 mt-32"></div>
                </article>
            </main>
            <article className="z-10 ml-7 flex w-full gap-8 text-xs font-title mt-2">
                {emotionData.map(({ name, Icon, color }) => (
                    <div
                        key={name}
                        className={tw(`flex flex-col items-center text-${color} fill-${color}`)}
                    >
                        <Icon className="w-[16px] h-[16px]" />
                        <div>{name}</div>
                    </div>
                ))}
            </article>
        </div>
    );
};

export default ModalTreeDetailGraph;

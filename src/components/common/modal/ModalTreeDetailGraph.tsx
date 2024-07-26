import React, { useMemo } from "react";
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

interface EmotionDataItem {
    name: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    color: string;
    count: number;
}

const ModalTreeDetailGraph = ({ emotions }: ModalTreeDetailGraphProps) => {
    const emotionData: EmotionDataItem[] = useMemo(
        () => [
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
        ],
        [emotions]
    );

    const maxValue = useMemo(() => {
        const max = Math.max(...emotionData.map((item) => item.count));
        return Math.ceil(max / 10) * 10; // Round up to the nearest 10
    }, [emotionData]);

    const yAxisLabels = useMemo(() => {
        const step = maxValue / 4;
        return [0, step, step * 2, step * 3, maxValue].map(Math.round).reverse();
    }, [maxValue]);

    return (
        <div className="w-full h-[260px] flex flex-col">
            <main className="relative flex h-full">
                <article className="w-[20px] border-r border-gray-400 h-full flex flex-col justify-between items-center">
                    {yAxisLabels.map((label, index) => (
                        <div key={index} className="text-gray-200 text-sm">
                            {label}
                        </div>
                    ))}
                </article>
                <article className="w-full h-full border-b border-gray-400">
                    <div className="w-full h-full flex pl-[28px] gap-[55px] items-end relative">
                        {emotionData.map(({ name, color, count }) => (
                            <div
                                key={name}
                                style={
                                    {
                                        "--target-height": `${(count / maxValue) * 100}%`,
                                    } as React.CSSProperties
                                }
                                className={tw(
                                    "relative border-white z-10 flex w-4 rounded-t-[2px] animate-height",
                                    color.split(" ")[0] // Use only the background color class
                                )}
                            ></div>
                        ))}
                    </div>
                    {[1, 2, 3, 4].map((_, index) => (
                        <div
                            key={index}
                            className="absolute w-[calc(100%-20px)] border-gray-600 border-b"
                            style={{ top: `${(index + 1) * 20}%` }}
                        ></div>
                    ))}
                </article>
            </main>
            <article className="z-10 ml-[38px] flex w-full gap-[45px] text-md font-title mt-4">
                {emotionData.map(({ name, Icon, color }) => (
                    <div
                        key={name}
                        className={tw(
                            `flex flex-col items-center`,
                            color.split(" ").slice(1).join(" ")
                        )}
                    >
                        <Icon className="w-[24px] h-[24px]" />
                        <div>{name}</div>
                    </div>
                ))}
            </article>
        </div>
    );
};

export default ModalTreeDetailGraph;

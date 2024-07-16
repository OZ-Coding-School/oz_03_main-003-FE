import { useEffect, useState } from "react";
import { DetailDummy } from "./ModalTreeDetailDummy";
import { IconClose, IconTooltip } from "../../IconData";
import { twMerge as tw } from "tailwind-merge";
import ModalTreeDetailGraph from "./ModalTreeDetailGraph";

//? 추후 페이지 제작시 사용
// interface DetailProps {
//     name: string;
//     type: string;
//     desc?: string;
//     growth: number;
//     emotion: {
//         angry: number;
//         happy: number;
//         sorrow: number;
//         worry: number;
//         indifference: number;
//     };
// }

interface DetailData {
    name: string;
    type: string;
    growth: number;
    emotion: {
        angry: number;
        happy: number;
        sorrow: number;
        worry: number;
        indifference: number;
    };
    desc?: string;
    style?: string;
}

const ModalTreeDetail = () => {
    const [data, setData] = useState<DetailData>(DetailDummy);

    //? 위 항목은 실제 API가 제작될 경우 useEffect가 아닌 커스텀 훅으로 대체할 예정입니다.
    useEffect(() => {
        switch (data.type) {
            case "새싹":
                return setData({
                    ...data,
                    style: "text-primary font-title text-sm",
                    desc: "아직은 종을 알 수 없는 어린 나무",
                });
            default:
                return setData({
                    ...data,
                    style: "font-title text-sm",
                    desc: "No Loading Data",
                });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="p-5 w-[320px] h-fit bg-gray-800 border border-gray-600">
            <div className="w-full flex justify-between">
                <h1 className="text-gray-200 font-title text-base mb-5">나무 정보</h1>
                <IconClose className="w-5 h-5 cursor-pointer fill-gray-600 transition hover:fill-white" />
            </div>
            <article className="mb-[10px]">
                <div className="text-gray-200 font-title text-sm">이름</div>
                <div className="text-white text-base">{data.name}</div>
            </article>
            <article className="mb-[10px]">
                <div className="flex gap-2">
                    <div className={data.style}>{data.type}</div>
                    <IconTooltip
                        className={tw(
                            "w-4 h-4 fill-gray-400 mt-[2px]",
                            "cursor-pointer hover:fill-white transition"
                        )}
                    />
                </div>
                <div className="text-white text-base">{data.desc}</div>
            </article>
            <article className="mb-[20px]">
                <div className="w-full flex justify-between items-center">
                    <div className="text-gray-200 font-title text-sm">성장률</div>
                    <div className="text-gray-200 font-title">{data.growth}%</div>
                </div>
                <div className="rounded-sm border h-2">
                    <div
                        className="bg-primary h-full animate-width"
                        style={{ "--target-width": `${data.growth}%` } as React.CSSProperties}
                    ></div>
                </div>
            </article>
            <article>
                <div className="text-gray-200 font-title text-sm">감정 기록</div>
                <ModalTreeDetailGraph emotion={data.emotion} />
            </article>
        </div>
    );
};

export default ModalTreeDetail;

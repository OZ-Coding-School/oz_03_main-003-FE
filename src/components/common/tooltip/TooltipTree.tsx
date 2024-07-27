import { IconLeft } from "../../../config/IconData";

const TooltipTree = () => {
    return (
        <div className="text-gray-200 outline-none relative z-10 flex flex-col gap-5">
            <article>
                <h2 className="font-title text-lg mb-[3px] text-primary">Tree</h2>
                <div className="text-base font-base">
                    <div>사용자가 전달한 감정 데이터를</div>
                    <div>기반해서 나무의 종류가 결정됩니다.</div>
                </div>
            </article>
            <article>
                <h2 className="font-title text-lg text-primary mb-[3px]">Growth</h2>
                <div className="text-base font-base">
                    <div>전달된 감정의 총합이 기준치에</div>
                    <div>도달할때마다 성장하며</div>
                    <div>감정의 종류에 따라</div>
                    <div>새로운 나무로 성장합니다.</div>
                </div>
            </article>
            <article className="flex items-center gap-2">
                <div className=" bg-gray-400 flex-grow font-title text-lg text-white text-center py-[2px]">
                    새싹
                </div>
                <IconLeft className="fill-gray-400 rotate-180 w-[16px] h-[9.5px]" />
                <div className=" bg-gray-400 flex-grow font-title text-lg text-white text-center py-[2px]">
                    묘목
                </div>
                <IconLeft className="fill-gray-400 rotate-180 w-[16px] h-[9.5px]" />
                <div className=" bg-gray-400 flex-grow font-title text-lg text-white text-center py-[2px]">
                    나무
                </div>
            </article>
        </div>
    );
};

export default TooltipTree;

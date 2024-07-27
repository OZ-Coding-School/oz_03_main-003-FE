const TooltipAccount = () => {
    return (
        <div className="text-gray-200 outline-none w-[222px] relative z-10 flex flex-col gap-5">
            <article>
                <h2 className="font-title text-lg mb-[3px]">Tree</h2>
                <div className="text-base font-body">
                    <div>현재 심어져 있는 나무와 </div>
                    <div>심을 수 있는 나무가 표기됩니다.</div>
                </div>
            </article>
            <article>
                <h2 className="font-title text-lg mb-[3px]">Grid Size</h2>
                <div className="text-base font-body">
                    <div>나무를 심을 수 있는 그리드의</div>
                    <div>크기가 표기됩니다.</div>
                </div>
            </article>
            <article>
                <div className="text-base font-body text-primary">
                    <div>레벨이 오르면 심을 수 있는 나무</div>
                    <div>개수와 정원 크기가 늘어납니다.</div>
                </div>
            </article>
        </div>
    );
};

export default TooltipAccount;

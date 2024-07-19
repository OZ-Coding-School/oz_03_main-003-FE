const UserInfoText = () => {
    return (
        <div className="text-gray-200 outline-none relative z-10 flex flex-col gap-5">
            <article>
                <h2 className="font-title mb-[3px]">Tree</h2>
                <div className="text-sm">
                    <div>현재 심어져 있는 나무와 심을</div>
                    <div>수 있는 나무의 갯 수가 표기됩니다.</div>
                </div>
            </article>
            <article>
                <h2 className="font-title mb-[3px]">Grid Size</h2>
                <div className="text-sm">
                    <div>나무를 심을 수 있는 그리드의</div>
                    <div>크기가 표기됩니다.</div>
                </div>
            </article>
            <article>
                <div className="text-sm text-primary">
                    <div>레벨이 오르면 심을 수 있는 Tree의</div>
                    <div>갯 수와 Grid Size가 늘어납니다.</div>
                </div>
            </article>
        </div>
    );
};

export default UserInfoText;

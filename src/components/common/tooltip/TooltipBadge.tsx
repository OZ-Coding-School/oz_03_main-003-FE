const TooltipBadge = () => {
    return (
        <div className="text-gray-200 outline-none relative z-10 flex flex-col gap-5">
            <article>
                <h2 className="font-title text-lg mb-[3px] text-primary">Collection</h2>
                <div className="text-base text-gray-200 font-body">
                    <div>특정 감정 값에 도달하면 </div>
                    <div>획득된 감정 뱃지가 표기됩니다.</div>
                </div>
            </article>
            <article>
                <h2 className="font-title text-lg mb-[3px] text-primary">Profile Image</h2>
                <div className="text-base text-gray-200 font-body">
                    <div>획득한 감정 뱃지를 눌러</div>
                    <div>프로필 이미지를</div>
                    <div>변경할 수 있습니다.</div>
                </div>
            </article>
        </div>
    );
};

export default TooltipBadge;

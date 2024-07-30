import ButtonEmoTree from "../button/ButtonEmoTree";

const HomeTreeInfo = () => {
    return (
        <div>
            <div className="text-center mt-[113px]">
                <div>
                    <strong className="font-title text-[14px] text-primary">새싹</strong>
                    <p className="mt-[2px]">지훈의 감정</p>
                </div>
                <div className="mt-[70px]">
                    <img
                        src="../src/assets/images/landing-ground.svg"
                        alt="땅"
                        className="m-auto"
                    />
                </div>
                <ButtonEmoTree className="mt-10 mb-5">감정을 나무에 전달하기</ButtonEmoTree>
                <p>전달하기 버튼을 클릭해보세요.</p>
            </div>
        </div>
    );
};

export default HomeTreeInfo;

const Description = () => {
    return (
        <div className="text-white">
            <div className="text-xl text-literal-angry">Component 명 컨벤션 주의! </div>
            <div>
                <span className="text-literal-joy">Folder</span> 명은 소문자로 시작,
                <span className="text-literal-joy">카멜케이스</span>로 작성
            </div>
            <div>
                <span className="text-literal-joy">Component</span>명은 대문자로 시작. 폴더명을 가장
                앞으로 두어 직관적으로 길게 작성
            </div>
            <div className="bg-gray-800 p-2 rounded-md mt-2 mb-2">
                <div className="text-literal-sorrow">예시</div>
                <div>
                    <span className="text-literal-happy">폴더 명</span> : Button{" "}
                </div>
                <div>
                    <span className="text-literal-happy">컴포넌트 명</span> : ButtonLoginGoogle.tsx
                </div>
            </div>
        </div>
    );
};

export default Description;

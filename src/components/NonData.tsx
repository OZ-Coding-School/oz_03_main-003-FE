const NonData = () => {
    return (
        <div className="select-none w-full h-[100vh] bg-black flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center h-full">
                <div className="text-2xl text-white mb-10 font-bold">Tree Not Found</div>
                <div className="text-xl text-white mb-20">
                    나무를 먼저 추가하고 채팅방을 생성해주세요
                </div>

                <img className="w-[500px] absolute bottom-[100px]" src="/img/404-image.png" />
            </div>
        </div>
    );
};

export default NonData;

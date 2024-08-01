import { useState, useEffect, ReactNode } from "react";

const PageMaintenance = ({ children }: { children: ReactNode }) => {
    const [isMaintenanceTime, setIsMaintenanceTime] = useState(false);

    useEffect(() => {
        const checkMaintenanceTime = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            console.log(now);

            if (hours === 12 && minutes >= 0 && minutes < 5) {
                setIsMaintenanceTime(true);
            } else {
                setIsMaintenanceTime(true);
            }
        };

        checkMaintenanceTime();

        //? 5분마다 체크
        const intervalId = setInterval(checkMaintenanceTime, 300000);

        //? 컴포넌트 언마운트 시 인터벌 제거
        return () => clearInterval(intervalId);
    }, []);

    if (isMaintenanceTime) {
        return (
            <>
                <div className="select-none font-body flex items-center justify-center h-screen bg-black">
                    <img
                        className="absolute left-0 top-0"
                        src="/img/landing_sideBranch01.png"
                    ></img>
                    <img
                        className="absolute right-0 top-0"
                        src="/img/landing_sideBranch02.png"
                    ></img>
                    <img
                        className="absolute right-0 bottom-0"
                        src="/img/landing_sideBranch03.png"
                    ></img>
                    <div className="animate-pulse text-center p-8 bg-gray-800 rounded-lg shadow-md">
                        <div className="flex gap-2 justify-center">
                            <h1 className="text-2xl font-bold mb-4 text-white">서버 점검 중</h1>
                            <img className="h-[50px]" src="/img/badge_placeholder.png" />
                        </div>
                        <p className="mb-4 text-gray-200">
                            현재 서버 점검 중입니다. 잠시 후 다시 시도해 주세요.
                        </p>
                        <p className="text-gray-200">예상 완료 시간: 2024/08/02</p>
                    </div>
                </div>
            </>
        );
    }

    return children;
};

export default PageMaintenance;

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
                setIsMaintenanceTime(false);
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
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="text-center p-8 bg-white rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-4">서버 점검 중</h1>
                    <p className="mb-4">현재 서버 점검 중입니다. 잠시 후 다시 시도해 주세요.</p>
                    <p>예상 완료 시간: 12:05</p>
                </div>
            </div>
        );
    }

    return children;
};

export default PageMaintenance;

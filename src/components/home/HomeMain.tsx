import { useEffect, useState } from "react";
import { twMerge as tw } from "tailwind-merge";
import useUserInfo from "../../hook/useUserInfo";
import { useUserStore } from "../../config/store";
import UserInfoHome from "../userInfo/UserInfoHome";
import ButtonPrimary from "../button/ButtonPrimary";
import ModalCreateTree from "../modal/ModalCreateTree";

const HomeMain = () => {
    const { isLoading, getUserInfo, getUserLevelInfo } = useUserInfo();

    useEffect(() => {
        const refreshUserInfo = async () => {
            await getUserInfo();
            await getUserLevelInfo();
        };
        refreshUserInfo();
    }, [getUserInfo, getUserLevelInfo]);

    const { userData } = useUserStore();
    const [isOpen, setIsOpen] = useState(false);

    const handleModalClose = () => {
        setIsOpen(false);
    };

    const handleModalOpen = () => {
        setIsOpen(true);
    };

    const handleClick = (id: number) => {
        //TODO: 나무 생성이 가능해지면 추가해야 함
        console.log(id);
        handleModalOpen();
    };

    const isAccessible = (index: number): boolean => {
        return userData.level.accessibleIndices.includes(index) || false;
    };

    return (
        <div className="">
            <nav className="text-white relative">
                <div className="flex absolute left-5 top-10">
                    <div className="w-[338px] mr-5">
                        <UserInfoHome />
                    </div>
                    <ButtonPrimary
                        className="fixed z-10 top-[140px] left-[380px]"
                        onClick={handleModalOpen}
                    >
                        새 나무 심기
                    </ButtonPrimary>
                </div>
            </nav>
            <main
                style={{ backgroundImage: `url("/img/grid-background.png")` }}
                className={tw("flex bg-cover items-center justify-center h-screen")}
            >
                <div className="w-full relative flex items-center justify-center h-screen bg-cover">
                    <sub
                        style={{ backgroundImage: `url("/img/grid-cover.png")` }}
                        className="absolute w-full h-screen bg-cover"
                    ></sub>
                    <div
                        className={tw(
                            "absolute z-0 bg-cover flex justify-center items-center mr-10",
                            userData.level.userLevel > 1
                                ? "w-[900px] h-[710px] mt-[400px]"
                                : "w-[600px] h-[535px] mt-[200px]"
                        )}
                        style={{
                            backgroundImage: `url(${userData.level.userLevel > 1 ? "/img/grid-lv2.png" : "/img/grid-lv1.png"})`,
                        }}
                    ></div>
                    <div
                        style={{
                            transformStyle: "preserve-3d",
                            transform: "rotateX(51deg) rotateZ(43deg)",
                        }}
                        className={tw(
                            "grid gap-0",
                            userData.level.userLevel > 1
                                ? "mr-[50px] mb-[30px] mt-[250px]"
                                : "mt-[200px]"
                        )}
                    >
                        {!isLoading && (
                            <div
                                className="grid text-zero relative z-10"
                                style={{
                                    gridTemplateRows: `repeat(5, 1fr)`,
                                    gridTemplateColumns: `repeat(5, 1fr)`,
                                }}
                            >
                                {Array.from({ length: 25 }).map((_, index) => {
                                    const isEnabled = isAccessible(index);
                                    return (
                                        <div
                                            key={index}
                                            className={tw(
                                                "w-[170px] h-[170px] transition",
                                                isEnabled
                                                    ? "hover:bg-primary hover:opacity-25 cursor-pointer"
                                                    : ""
                                            )}
                                            onClick={() => {
                                                if (isEnabled) {
                                                    handleClick(index);
                                                }
                                            }}
                                        >
                                            {index}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {isOpen && <ModalCreateTree isOpen={isOpen} onClose={handleModalClose} />}
        </div>
    );
};

export default HomeMain;

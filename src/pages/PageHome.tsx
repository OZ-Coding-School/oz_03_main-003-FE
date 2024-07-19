import HeaderLoggedIn from "../components/header/HeaderLoggedIn";
import { useEffect, useState } from "react";
import UserInfoHome from "../components/userInfo/UserInfoHome";
import ButtonPrimary from "../components/button/ButtonPrimary";
import { useUserStore } from "../config/store";
import { accessibleIndices } from "../components/util/UtilUserLevel";
import { twMerge as tw } from "tailwind-merge";
import ModalCreateTree from "../components/modal/ModalCreateTree";
import useUserInfo from "../hook/useUserInfo";
import { AnimatePresence, motion } from "framer-motion";

const PageHome = () => {
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
        console.log(id);
        handleModalOpen();
    };

    const isAccessible = (index: number): boolean => {
        return accessibleIndices[userData.level.userLevel].includes(index) || false;
    };

    return (
        <>
            <HeaderLoggedIn />
            <div className="bg-black pt-[129px] w-full min-h-screen h-100 box-border">
                <nav className="text-white relative">
                    <div className="flex absolute left-5 top-10">
                        <div className="w-[338px] mr-5">
                            <UserInfoHome />
                        </div>
                        <ButtonPrimary
                            className="fixed z-10 left-[380px]"
                            onClick={handleModalOpen}
                        >
                            새 나무 심기
                        </ButtonPrimary>
                    </div>
                </nav>

                <main
                    className={tw(
                        "flex items-center justify-center pt-64 pb-20",
                        isOpen && "blur-sm"
                    )}
                >
                    <div
                        style={{
                            transformStyle: "preserve-3d",
                            transform: "rotateX(51deg) rotateZ(43deg)",
                        }}
                        className="text-zero grid gap-0"
                    >
                        {!isLoading && (
                            <motion.div
                                animate={{ opacity: [0, 1], translateZ: [-100, 0] }}
                                className="grid"
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
                                            className={`w-[150px] h-[150px] border border-black inline-block 
                      ${
                          isEnabled
                              ? "bg-gray-800 hover:bg-gray-700 hover:border-primary transition cursor-pointer"
                              : "bg-black"
                      }`}
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
                            </motion.div>
                        )}
                    </div>
                </main>
            </div>

            <ModalCreateTree isOpen={isOpen} onClose={handleModalClose} />
        </>
    );
};

export default PageHome;

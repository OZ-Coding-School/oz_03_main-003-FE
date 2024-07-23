import { useEffect, useState } from "react";
import { twMerge as tw } from "tailwind-merge";
import UserInfoHome from "../common/userInfo/UserInfoHome";
import ModalCreateTree from "../common/modal/ModalCreateTree";
import HomeBackground from "./HomeBackground";
import HomeGrid from "./HomeGrid";
import HomeDescription from "./HomeDescription";
import useInfo from "../../hook/useInfo";
const HomeMain = () => {
    const { getUserInfo, getUserGridInfo, getUserLevelInfo } = useInfo();
    const [isOpen, setIsOpen] = useState(false);
    const [treeIndex, setTreeIndex] = useState(0);

    useEffect(() => {
        const refreshUserInfo = async () => {
            await getUserInfo();
            await getUserGridInfo();
            await getUserLevelInfo();
        };
        refreshUserInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getUserInfo, getUserGridInfo, getUserLevelInfo]);

    const handleModalClose = () => {
        setIsOpen(false);
    };

    const handleModalOpen = (id: number) => {
        setTreeIndex(id);
        setIsOpen(true);
    };

    return (
        <div className="">
            <UserInfoHome />

            <main className={tw("flex bg-cover items-center justify-center h-screen")}>
                <div className="w-full animate-blur relative flex items-center justify-center h-screen bg-cover">
                    <HomeBackground />

                    <HomeGrid onCreateTreeModal={handleModalOpen} />
                </div>
            </main>

            <HomeDescription />
            {isOpen && (
                <ModalCreateTree treeIndex={treeIndex} isOpen={isOpen} onClose={handleModalClose} />
            )}
        </div>
    );
};

export default HomeMain;

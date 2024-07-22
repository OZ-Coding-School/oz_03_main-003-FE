import { useEffect, useState } from "react";
import { twMerge as tw } from "tailwind-merge";
import useUserInfo from "../../hook/useUserInfo";
import UserInfoHome from "../common/userInfo/UserInfoHome";
import ModalCreateTree from "../common/modal/ModalCreateTree";
import HomeBackground from "./HomeBackground";
import HomeGrid from "./HomeGrid";
import HomeDescription from "./HomeDescription";

const HomeMain = () => {
    const { getUserInfo, getUserLevelInfo } = useUserInfo();
    const [isOpen, setIsOpen] = useState(false);
    const [treeIndex, setTreeIndex] = useState(0);

    useEffect(() => {
        const refreshUserInfo = async () => {
            await getUserInfo();
            await getUserLevelInfo();
        };
        refreshUserInfo();
    }, [getUserInfo, getUserLevelInfo]);

    const handleModalClose = () => {
        setIsOpen(false);
    };

    const handleModalOpen = (id: number) => {
        console.log(id);
        setTreeIndex(id);
        setIsOpen(true);
    };

    return (
        <div className="">
            <UserInfoHome />

            <main className={tw("flex bg-cover items-center justify-center h-screen")}>
                <div className="w-full relative flex items-center justify-center h-screen bg-cover">
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

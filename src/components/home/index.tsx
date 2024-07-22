import { useEffect, useState } from "react";
import { twMerge as tw } from "tailwind-merge";
import useUserInfo from "../../hook/useUserInfo";
import UserInfoHome from "../userInfo/UserInfoHome";
import ModalCreateTree from "../modal/ModalCreateTree";
import HomeBackground from "./HomeBackground";
import HomeGrid from "./HomeGrid";
import HomeDescription from "./HomeDescription";

const HomeMain = () => {
    const { getUserInfo, getUserLevelInfo } = useUserInfo();

    useEffect(() => {
        const refreshUserInfo = async () => {
            await getUserInfo();
            await getUserLevelInfo();
        };
        refreshUserInfo();
    }, [getUserInfo, getUserLevelInfo]);

    const [isOpen, setIsOpen] = useState(false);

    const handleModalClose = () => {
        setIsOpen(false);
    };

    const handleModalOpen = (id: number) => {
        console.log(id);
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
            {isOpen && <ModalCreateTree isOpen={isOpen} onClose={handleModalClose} />}
        </div>
    );
};

export default HomeMain;

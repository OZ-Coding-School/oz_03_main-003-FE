import HeaderLoggedIn from "../components/header/HeaderLoggedIn";
import { useEffect, useState } from "react";
import UserInfoHome from "../components/userInfo/UserInfoHome";
import ButtonPrimary from "../components/button/ButtonPrimary";
import { LevelDummy } from "./PageLevelDummy";
import ModalCreateTree from "../components/modal/ModalCreateTree";
import { useUserStore } from "../config/store";
import { authApi } from "../api";
import dayjs from "dayjs";

interface LevelItem {
    level: number;
    width: string;
    treeMax: number;
}
const PageHome = () => {
    const { setUserData } = useUserStore();

    useEffect(() => {
        const getUserInfo = async () => {
            const { data: response } = await authApi.getUserInfo();
            setUserData({
                id: response.id,
                imgUrl: response.profile_image,
                username: response.username,
                email: response.email,
                created_at: dayjs(response.created_at).format("YYYY-MM-DD"),
            });
        };
        getUserInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleModalClose = () => {
        setIsOpen(false);
    };

    const handleModalOpen = () => {
        setIsOpen(true);
    };

    const handleClick = (id: string) => {
        console.log(id);
        handleModalOpen();
    };

    return (
        <>
            <HeaderLoggedIn />
            <div className="bg-black pt-[129px] w-full min-h-screen h-100 box-border">
                <div className="text-white relative">
                    <div className="flex absolute left-5 top-10">
                        <div className="w-[338px] mr-5">
                            <UserInfoHome />
                        </div>
                        <ButtonPrimary onClick={handleModalOpen}>새 나무 심기</ButtonPrimary>
                    </div>
                    <div className="flex items-center justify-center pt-64 pb-20">
                        <div
                            className="text-zero grid gap-0" // auto-rows-[200px] auto-cols-[200px]
                            style={{
                                transformStyle: "preserve-3d",
                                transform: "rotateX(51deg) rotateZ(43deg)",
                            }}
                        >
                            {LevelDummy.filter(
                                (item): item is LevelItem => item !== undefined && item.level > 4
                            ).map((item) => (
                                <div
                                    key={item.level}
                                    className="grid"
                                    style={{
                                        gridTemplateRows: `repeat(${item.level}, 1fr)`,
                                        gridTemplateColumns: `repeat(${item.level}, 1fr)`,
                                    }}
                                >
                                    {Array.from({ length: item.treeMax }).map((_, index) => {
                                        const row = Math.floor(index / item.level) + 1;
                                        const col = (index % item.level) + 1;
                                        const id = `${row}-${col}`;
                                        return (
                                            <div
                                                key={id}
                                                id={id}
                                                className={`w-[150px] h-[150px] border border-black bg-gray-800 inline-block hover:bg-gray-opacity hover:border-primary `}
                                                onClick={() => handleClick(id)}
                                            ></div>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <ModalCreateTree isOpen={isOpen} onClose={handleModalClose} />
        </>
    );
};

export default PageHome;

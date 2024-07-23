import { IconUpdate } from "../../../config/IconData";
import { twMerge as tw } from "tailwind-merge";
import { useUserStore } from "../../../config/store";
import UserInfoBadge from "./UserInfoBadge";
import { useState } from "react";
import ModalChangeName from "../modal/ModalChangeName";
import ButtonError from "../button/ButtonError";
import { treeApi } from "../../../api";

export interface userInfoData {
    created_at: string;
    imgUrl: string;
    username: string;
    email: string;
}

const UserInfoMyPage = () => {
    const { userData } = useUserStore();
    const [isOpen, setIsOpen] = useState(false);

    const handleModalClose = () => {
        setIsOpen(false);
    };

    const handleModalOpen = () => {
        setIsOpen(true);
    };

    const removeHandler = () => {
        const UUID = prompt("삭제를 원하는 나무의 UUID를 입력하세요 (콘솔창 참고)");
        if (UUID) {
            treeApi.deleteTree(UUID);
        }
    };

    return (
        <div className="w-full flex justify-center gap-3 select-none">
            <div className="bg-gray-800 text-white w-[340px] h-fit mt-5">
                <div className="flex gap-4 p-5 pb-6 border-b border-gray-600">
                    <div className="relative w-12 h-12 border border-white rounded-full">
                        <img
                            src={userData.user.imgUrl || "/img/profile-placeholder.png"}
                            alt={"Profile Image"}
                            className="w-12 h-12 rounded-full"
                        />
                        <div className="w-6 h-6 absolute bottom-[-6px] right-[-6px] border border-primary rounded-full bg-gray-800 text-center text-sm">
                            {userData.level.userLevel}
                        </div>
                    </div>
                    <div className="flex-grow flex flex-col justify-end">
                        <p className="font-title text-lg">{userData.user.username}</p>
                        <div className="rounded-sm border h-2">
                            <div
                                className="bg-primary h-full animate-width"
                                style={
                                    {
                                        "--target-width": `${userData.level.userExperience}%`,
                                    } as React.CSSProperties
                                }
                            ></div>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <div className="flex items-center mb-2">
                        <p className="font-title text-gray-200 mr-2">user Information</p>
                        <div
                            className={tw(
                                "w-8 h-8 rounded-full flex justify-center items-center",
                                "fill-white hover:bg-gray-600",
                                "cursor-pointer transition"
                            )}
                            onClick={handleModalOpen}
                        >
                            <IconUpdate className="h-4" />
                        </div>
                    </div>
                    <div className="flex">
                        <ul className="w-20 text-gray-200">
                            <li className="mb-3">nickName</li>
                            <li className="mb-3">email</li>
                            <li className="mb-3">join date</li>
                            <li className="mb-3">tree</li>
                            <li className="mb-3">grid size</li>
                        </ul>
                        <ul>
                            <li className="mb-3">: {userData.user.username}</li>
                            <li className="mb-3">: {userData.user.email}</li>
                            <li className="mb-3">: {userData.user.created_at}</li>
                            <li className="mb-3">
                                : {userData.tree.treeCurrent} / {userData.tree.treeMax}
                            </li>
                            <li className="mb-3">
                                : {userData.tree.gridSize} x {userData.tree.gridSize}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <UserInfoBadge />
            {isOpen && <ModalChangeName isOpen={isOpen} onClose={handleModalClose} />}
            <ButtonError onClick={removeHandler} className="mt-8 w-fit px-4">
                (개발) 나무삭제
            </ButtonError>
        </div>
    );
};

export default UserInfoMyPage;
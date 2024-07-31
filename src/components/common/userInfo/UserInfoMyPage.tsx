import { IconUpdate } from "../../../config/IconData";
import { twMerge as tw } from "tailwind-merge";
import { useUserStore } from "../../../config/store";
import UserInfoBadge from "./UserInfoBadge";
import { useState } from "react";
import ModalChangeName from "../modal/ModalChangeName";
import ButtonError from "../button/ButtonError";
import ModalQuitSite from "../modal/ModalDeleteAccount";
import useSound from "use-sound";
import pingSound from "../../../assets/sound/btn_ping.mp3";
import collapseSound from "../../../assets/sound/btn_collapse.mp3";

export interface userInfoData {
    created_at: string;
    imgUrl: string;
    username: string;
    email: string;
}

const UserInfoMyPage = () => {
    const { userData } = useUserStore();
    const [isChangeModalOpen, setIsChangeModalOpen] = useState(false);
    const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] = useState(false);
    const [playWarn] = useSound(pingSound, { volume: 0.75 });
    const [playCollapse] = useSound(collapseSound, { volume: 0.75 });

    const handleChangeModalOpen = () => {
        setIsChangeModalOpen(true);
        playCollapse();
    };
    const handleDeleteAccountModalOpen = () => {
        setIsDeleteAccountModalOpen(true);
        playWarn();
    };

    const handleDeleteAccountModalClose = () => {
        setIsDeleteAccountModalOpen(false);
    };
    const handleChangeModalClose = () => {
        setIsChangeModalOpen(false);
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
                            onClick={handleChangeModalOpen}
                        >
                            <IconUpdate className="h-4" />
                        </div>
                    </div>
                    <div className="flex">
                        <ul className="w-20 text-gray-200 font-body font-semibold">
                            <li className="mb-3">이름</li>
                            <li className="mb-3">이메일</li>
                            <li className="mb-3">가입 일자</li>
                            <li className="mb-3">잔여 나무</li>
                            <li className="mb-3">정원 크기</li>
                        </ul>
                        <ul>
                            <li className="mb-3 font-light">: {userData.user.username}</li>
                            <li className="mb-3 font-light">: {userData.user.email}</li>
                            <li className="mb-3 font-light">: {userData.user.created_at}</li>
                            <li className="mb-3 font-light">
                                : {userData.tree.treeCurrent} / {userData.tree.treeMax}
                            </li>
                            <li className="mb-3 font-light">
                                : {userData.tree.gridSize} x {userData.tree.gridSize}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <UserInfoBadge />
            <div className="flex flex-col gap-3 mt-5">
                <ButtonError onClick={handleDeleteAccountModalOpen}>계정 탈퇴</ButtonError>
            </div>
            {isChangeModalOpen && <ModalChangeName onClose={handleChangeModalClose} />}
            {isDeleteAccountModalOpen && <ModalQuitSite onClose={handleDeleteAccountModalClose} />}
        </div>
    );
};

export default UserInfoMyPage;

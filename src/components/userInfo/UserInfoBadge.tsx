import {
    IconAngry,
    IconHappy,
    IconIndifference,
    IconSorrow,
    IconWorry,
} from "../../config/IconData";

import UserInfoBadgeContent from "./UserInfoBadgeContent";

const UserInfoBadge = () => {
    return (
        <div className="bg-gray-800 mt-5 w-[560px] h-[450px] p-5">
            <div className="flex flex-col font-title text-base text-gray-200">
                Emotion Collections
            </div>
            <div className="px-8 flex mt-10 w-full justify-between items-center">
                <IconAngry className="w-5 h-5 fill-literal-angry" />
                <IconHappy className="w-5 h-5 fill-literal-happy" />
                <IconSorrow className="w-5 h-5 fill-literal-sorrow" />
                <IconWorry className="w-5 h-5 fill-literal-worry" />
                <IconIndifference className="w-5 h-5 fill-gray-600" />
            </div>
            <div className="px-[18px] flex mt-10 w-full justify-between items-center">
                <nav>
                    <UserInfoBadgeContent type="angry" />
                </nav>
                <nav>
                    <UserInfoBadgeContent type="happy" />
                </nav>
                <nav>
                    <UserInfoBadgeContent type="sorrow" />
                </nav>
                <nav>
                    <UserInfoBadgeContent type="worry" />
                </nav>
                <nav>
                    <UserInfoBadgeContent type="indiff" />
                </nav>
            </div>
        </div>
    );
};

export default UserInfoBadge;

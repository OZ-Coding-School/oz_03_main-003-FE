import {
    IconAngry,
    IconHappy,
    IconIndifference,
    IconSorrow,
    IconWorry,
} from "../../../config/IconData";
import UserInfoBadgeContent from "./UserInfoBadgeContent";

const UserInfoBadge = () => {
    return (
        <div className="bg-gray-800 mt-5 w-[560px] h-[450px] p-5">
            <div className="flex flex-col font-title text-base text-gray-200">
                Emotion Collections
            </div>
            <div className="gap-[82.5px] flex w-full justify-center items-center mt-10">
                <IconAngry className="w-5 h-5 fill-literal-angry" />
                <IconHappy className="w-5 h-5 fill-literal-happy" />
                <IconSorrow className="w-5 h-5 fill-literal-sorrow" />
                <IconWorry className="w-5 h-5 fill-literal-worry" />
                <IconIndifference className="w-5 h-5 fill-gray-600" />
            </div>
            <div className="px-[18px] flex mt-4 w-full justify-between items-center">
                <UserInfoBadgeContent type="anger" />
                <UserInfoBadgeContent type="happiness" />
                <UserInfoBadgeContent type="sadness" />
                <UserInfoBadgeContent type="worry" />
                <UserInfoBadgeContent type="indifference" />
            </div>
        </div>
    );
};

export default UserInfoBadge;

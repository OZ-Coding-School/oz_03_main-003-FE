interface UserInfoBadgeProps {
    type: "angry" | "happy" | "sorrow" | "worry" | "indifference";
}

const UserInfoBadgeContent = ({ type }: UserInfoBadgeProps) => {
    console.log(type);
    return (
        <div className="flex flex-col gap-5">
            <nav>
                <div className="w-12 h-12 rounded-full border border-white"></div>
                <div className="mt-1 text-sm text-gray-200 text-center">뱃지</div>
            </nav>
            <nav>
                <div className="w-12 h-12 rounded-full border border-white"></div>
                <div className="mt-1 text-sm text-gray-200 text-center">뱃지</div>
            </nav>
            <nav>
                <div className="w-12 h-12 rounded-full border border-white"></div>
                <div className="mt-1 text-sm text-gray-200 text-center">뱃지</div>
            </nav>
        </div>
    );
};

export default UserInfoBadgeContent;

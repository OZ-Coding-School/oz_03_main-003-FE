interface UserInfoBadgeProps {
    type: "angry" | "happy" | "sorrow" | "worry" | "indiff";
}

const UserInfoBadgeContent = ({ type }: UserInfoBadgeProps) => {
    return (
        <div className="flex flex-col gap-5">
            <nav>
                <div className="w-12 h-12 rounded-full border border-white"></div>
                <div className="mt-1 text-sm text-gray-200 text-center">{type}</div>
            </nav>
            <nav>
                <div className="w-12 h-12 rounded-full border border-white"></div>
                <div className="mt-1 text-sm text-gray-200 text-center">{type}</div>
            </nav>
            <nav>
                <div className="w-12 h-12 rounded-full border border-white"></div>
                <div className="mt-1 text-sm text-gray-200 text-center">{type}</div>
            </nav>
        </div>
    );
};

export default UserInfoBadgeContent;

interface UserInfoBadgeProps {
    type: "angry" | "happy" | "sorrow" | "worry" | "indifference";
    count: number;
}

const UserInfoBadgeContent = ({ type, count }: UserInfoBadgeProps) => {
    const getImageSrc = () => {
        if (count >= 250) {
            return `/assets/badge_${type}_03.png`;
        }
        if (count >= 8) {
            return `/assets/badge_${type}_02.png`;
        }
        if (count >= 3) {
            return `/assets/badge_${type}_01.png`;
        }
        return null;
    };

    const imageSrc = getImageSrc();

    return (
        <div className="flex flex-col items-center gap-5">
            <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                {imageSrc ? (
                    <img src={imageSrc} alt={`${type} badge`} className="w-12 h-12" />
                ) : (
                    <div className="w-12 h-12"></div>
                )}
            </div>
            <div className="mt-1 text-sm text-gray-200 text-center">{type}</div>
        </div>
    );
};

export default UserInfoBadgeContent;

import UserInfoText from "../userInfo/UserInfoText";
import ModalTreeDetailText from "./ModalTreeDetailText";

interface ModalTooltipProps {
    type: string;
}

const ModalTooltip = ({ type }: ModalTooltipProps) => {
    return (
        <div
            className="rounded-[4px] relative w-[242px] h-fit p-4 bg-gray-600
    "
        >
            {type === "DETAIL" && <ModalTreeDetailText />}
            {type === "USERINFO" && <UserInfoText />}
            <div className="absolute w-5 h-5 bg-gray-600 skew-x-[45deg] rounded-tl-[4px] top-1 -left-2"></div>
        </div>
    );
};

export default ModalTooltip;

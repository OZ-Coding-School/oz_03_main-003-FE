import TooltipAccount from "../tooltip/TooltipAccount";
import TooltipBadge from "../tooltip/TooltipBadge";
import TooltipTree from "../tooltip/TooltipTree";

interface ModalTooltipProps {
    type: string;
}

const ModalTooltip = ({ type }: ModalTooltipProps) => {
    return (
        <div
            className="rounded-[4px] relative w-fit flex justify-center h-fit p-4 bg-gray-600
    "
        >
            {type === "DETAIL" && <TooltipTree />}
            {type === "USERINFO" && <TooltipAccount />}
            {type === "COLLECTION" && <TooltipBadge />}
            <div className="absolute w-5 h-5 bg-gray-600 skew-x-[45deg] rounded-tl-[4px] top-1 -left-2"></div>
        </div>
    );
};

export default ModalTooltip;

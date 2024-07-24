import React from "react";
import { UserTreeDetail } from "../../../config/types";

interface ModalListItemProps {
    item: UserTreeDetail;
    onClick: (treeName: string) => void;
}

const ModalListItem: React.FC<ModalListItemProps> = ({ item, onClick }) => {
    return (
        <li
            className="text-white transition py-3 px-4 cursor-pointer bg-gray-600 hover:bg-gray-400"
            onClick={() => onClick(item.tree_name)}
        >
            {item.tree_name}
        </li>
    );
};

export default ModalListItem;

import React from "react";

interface ModalListItemProps {
    item: {
        name: string;
        uuid: string;
    };
    onClick: (tree: { name: string; uuid: string }) => void;
}

const ModalListItem: React.FC<ModalListItemProps> = ({ item, onClick }) => {
    return (
        <li
            className="text-white transition py-3 px-4 cursor-pointer bg-gray-600 hover:bg-gray-400"
            onClick={() => onClick(item)}
        >
            {item.name}
        </li>
    );
};

export default ModalListItem;

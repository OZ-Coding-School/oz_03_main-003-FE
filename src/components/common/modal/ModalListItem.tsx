import { TreeItem } from "../../../config/types";

interface ModalListItemProps {
    item: TreeItem;
    onClick: (item: TreeItem) => void;
}

const ModalListItem: React.FC<ModalListItemProps> = ({ item, onClick }) => {
    return (
        <li
            className="text-white transition py-3 px-4 cursor-pointer bg-gray-600 hover:bg-gray-400"
            onClick={() => onClick(item)}
        >
            {item.tree_name}
        </li>
    );
};

export default ModalListItem;

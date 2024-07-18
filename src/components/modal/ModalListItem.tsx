interface ModalListItemProps {
    item: {
        id: number;
        group_name: string;
    };
    onClick: (groupName: string) => void;
}

const ModalListItem: React.FC<ModalListItemProps> = ({ item, onClick }) => {
    return (
        <li
            className="text-white transition py-3 px-4 cursor-pointer bg-gray-600 hover:bg-gray-400"
            onClick={() => onClick(item.group_name)}
        >
            {item.group_name}
        </li>
    );
};

export default ModalListItem;

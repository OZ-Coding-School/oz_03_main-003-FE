interface ModalListItem {
    item: {
        id: number;
        group_name: string;
    };
}

const ModalListItem = ({ item }: ModalListItem) => {
    return (
        <>
            <ul className="text-white transition py-4 px-3 cursor-pointer bg-gray-600 hover:bg-gray-400">
                <li>{item.group_name}</li>
            </ul>
        </>
    );
};

export default ModalListItem;

import { IconLeft } from "../IconData";

const ChatHeader = () => {
    return (
        <div className="flex p-5 w-full">
            <button type="button" className="text-zero fill-white w-5">
                <IconLeft />
                뒤로가기
            </button>
            <p className="text-sm text-white pl-2.5">친구01</p>
        </div>
    );
};

export default ChatHeader;
